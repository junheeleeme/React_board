import React, {useState, useRef} from "react";
import ReactDom from "react-dom";
import { useHistory, useLocation } from "react-router-dom";
import queryString from 'query-string';
import axios from 'axios';

const UserCheck = ({listUpdate, action}) => {
    const [pw, setPw] = useState();
    const subtitle = useRef(null);
    const pwInput = useRef(null);
    const his = useHistory();
    const { search } = useLocation();
    const { no } = queryString.parse(search);

    const onSubmit = () => { 

        if( pwInput.current.value !== ''){ //비밀번호 입력 체크
            
            axios.post(`/post/usercheck?no=${no}`, {
                passwd : pw
            }).then((res)=>{

                if(res.status === 200){

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
                }
            }).catch(err=>{
                subtitle.current.innerText = "";

                setTimeout( ()=>{
                    subtitle.current.style.color = '#ff265d';
                    subtitle.current.innerText = "잘못된 비밀번호입니다.";
                }, 100)
                                
                pwInput.current.focus();
            });

        }else{
            subtitle.current.innerText =  "비밀번호를 입력해주세요. (4~6자리)";
            subtitle.current.style.color = '#787A91';
            pwInput.current.focus();
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
            <div className="usercheck-wrap">
                <h3 ref={subtitle} className="subtitle">비밀번호 확인</h3>
                <input ref={pwInput} type="password" id="chk-passwd" maxLength={6} onChange={onChange} onKeyPress={pressEnter}/>
                <button type="submit" id="chk-pwBtn" onClick={onSubmit}>확인</button>
            </div>

        </>
    )
}

export default UserCheck;