import React, {useState, useRef} from "react";
import ReactDom from "react-dom";
import { useHistory, useLocation } from "react-router-dom";
import queryString from 'query-string';
import axios from 'axios';

const UserCheck = () => {
    const [pw, setPw] = useState();
    const pwInput = useRef(null);
    const his = useHistory();
    const { search } = useLocation();
    const { no } = queryString.parse(search);

    const chk_success = () => {
        his.push(`/post/update?no=${no}`);
    }

    const onSubmit = () => { 

        if( pwInput.current.value !== ''){ //비밀번호 입력 체크
            
            axios.post(`/post/usercheck?no=${no}`, {
                passwd : pw
            }).then((res)=>{
                if(res.status === 200){
                    his.push(`/post/update?no=${no}`);
                }
            }).catch(err=>{
                alert("잘못된 비밀번호입니다.");
                console.log(err);
            });

        }else{
            alert("비밀번호를 입력해주세요. (4~6자리)");
        }
    }

    const onChange = (e) => {
        setPw(e.target.value);
    }

    return(
        <> 
            <h3>비밀번호 확인</h3>
            <input ref={pwInput} type="password" id="chk-passwd" onChange={onChange}/>
            <button type="submit" onClick={onSubmit}>확인</button>
        </>
    )
}

export default UserCheck;