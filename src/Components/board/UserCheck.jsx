import React, {useState, useRef} from "react";
import ReactDom from "react-dom";
import { useHistory, useLocation } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import queryString from 'query-string';
import axios from 'axios';

const UserCheck = ({listUpdate, action}) => {
    const [pw, setPw] = useState("");
    const [inputErr, setInputErr] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    
    const his = useHistory();
    const { search } = useLocation();
    const { no } = queryString.parse(search);

    const onSubmit = () => { 
            
        if( pw !== '' ){ //비밀번호 입력 체크
            
            axios.post(`/post/usercheck?no=${no}`, {
                passwd : pw
            }).then((res)=>{

                    if(action === 'update'){    //게시글 수정
                        his.push(`/post/update?no=${no}`);
                    }else if(action === 'delete'){ //게시글 삭제

                        axios.delete(`/post/delete?no=${no}`).then((res)=>{
                            if(res.status === 200){
                                listUpdate();
                                his.push('/list');
                            }
                        }).catch(err=>{
                            console.log("UserCheck->delete");
                            console.log(err);
                        });
                    }

            }).catch(err=>{
                setInputErr(true);      
                setErrMsg("잘못된 비밀번호입니다.");
            });

        }else{ // 아무것도 입력 안했을 때
            setInputErr(true);
            setErrMsg("비밀번호를 입력해주세요.");
        }
    }

    const onChange = (e) => {
        setPw(e.target.value);
    }

    const pressEnter = (e) => {
        if(e.charCode === 13){
            onSubmit();
        }
    }

    return(
        <> 
            <div className="usercheck-wrap mount">
                <div className="input-wrap">
                    <TextField required onChange={onChange} onKeyPress={pressEnter} id="chk-passwd" type="password"  label="비밀번호 확인" defaultValue="" maxLength={6}  autoFocus={true} error={inputErr} helperText={errMsg}/>
                </div>
                <div className="btn-wrap">
                    <Button variant="contained" color="default" id="chk-pwBtn" onClick={onSubmit} fullWidth={true}>확인</Button>
                </div>
            </div>

        </>
    )
}

export default UserCheck;