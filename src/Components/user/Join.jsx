const { useState, useRef } = require('react');
const React = require('react');
const ReactDom = require('react-dom');
const err = document.querySelector('#email_sec>.err_msg');
const eng_pattern = /[a-zA-Z]/;
const num_pattern = /[0-9]/;
const special_pattern = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi; //특수문자 전체
const email_pattern = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

const Join = () => {
    const email_input = useRef();
    const emailr_input = useRef();
    const pw_input = useRef();
    const pwr_input = useRef();
    const nic_input = useRef();

    const [email, setEmail] = useState();
    const [emailr, setEmailr] = useState();
    const [pw, setPw] = useState();
    const [pwr, setPwr] = useState();
    const [nic, setNic] = useState();
    const [birth, setBirth] = useState();
    const [gender, setGender] = useState();
    

    const onChange = (e) => {

        const target = e.target.className;
        const target_txt = e.target.value;

        switch(target){ //인풋 클래스 구분

            case 'email_input' :{
                setEmail(target_txt);
                break;
            }
            case 'emailr_input' :{
                setEmailr(target_txt);
                break;
            }
            case 'pw_input' :{
                setPw(target_txt);
                break;
            }
            case 'pwr_input' :{
                setPwr(target_txt);
                break;
            }
            case 'nic_input' :{
                setNic(target_txt);
                break;
            }
            case 'birth_input' :{
                setBirth(target_txt);
                break;
            }
        }
    }

    const valid_success = (dom) =>{
        dom.classList.remove("fail");
        dom.classList.add("success");
    }

    const valid_fail = (dom) =>{
        dom.classList.remove("success");
        dom.classList.add("fail");
    }

    const blur_valid_email = (e) =>{

        const email_txt = e.target.value;

        if(email_txt !== ''){ //값이 없을 경우 검사안함
            if(email_pattern.test(email_txt)){
                valid_success(email_input.current);
            }else{
                valid_fail(email_input.current);
            }
        }

    }
    const blur_valid_emailr = (e) =>{

        const emailr_txt = e.target.value;

        if(emailr_txt !== ''){ //값이 없을 경우 검사안함
            if(email_pattern.test(emailr_txt)){

                if(email_input.current.value === emailr_txt){
                    valid_success(emailr_input.current);
                }else{
                    valid_fail(emailr_input.current);
                    console.log("불일치");
                }
            }else{
                valid_fail(emailr_input.current);
            }
        }

    }

    const blur_valid_pw = (e) =>{

        const pw_txt = e.target.value;

        if(pw_txt !== ''){ //값이 없을 경우 검사안함
            if( eng_pattern.test(pw_txt) && num_pattern.test(pw_txt) 
            && special_pattern.test(pw_txt) && pw_txt.length > 7 && pw_txt.length < 15 ){
                valid_success(pw_input.current);
            }else{
                valid_fail(pw_input.current);
            }
        }

    }

    const blur_valid_pwr = (e) =>{

        const pwr_txt = e.target.value;
        
        if(pwr_txt !== ''){ //값이 없을 경우 검사안함
            if( eng_pattern.test(pwr_txt) && num_pattern.test(pwr_txt) 
            && special_pattern.test(pwr_txt) && pwr_txt.length > 7 && pwr_txt.length < 15 ){
                valid_success(pwr_input.current);
            }else{
                valid_fail(pwr_input.current);
            }
        }

    }

    const blur_valid_nic = (e) =>{
        
        const nic_txt = e.target.value;

        if(nic_txt !== '' ){ //값이 없을 경우 검사안함
            console.log("DB에서 중복확인 해야함")
        }
        
    }

    const onClick_gender = (e) =>{
        setGender(e.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(gender);
    }
    
    return(
        
        <div className="join">
            <h2 className="sub_title">회원가입!</h2>
            <form className="join_form">
                
                <input type="text" ref={email_input} onChange={onChange} onBlur={blur_valid_email} className="email_input" placeholder="이메일" autoComplete="true"/>
                <input type="text" ref={emailr_input} onChange={onChange} onBlur={blur_valid_emailr} className="emailr_input" placeholder="이메일 확인" autoComplete="true"/>
                <input type="password" ref={pw_input} onChange={onChange} onBlur={blur_valid_pw} className="pw_input" placeholder="비밀번호"/>
                <input type="password" ref={pwr_input} onChange={onChange} onBlur={blur_valid_pwr} className="pwr_input" placeholder="비밀번호 확인" />
                <input type="text" ref={nic_input} onChange={onChange} onBlur={blur_valid_nic} className="nic_input" placeholder="닉네임"/>
                <input type="date" onChange={onChange} className="birth_input" value="2000-01-01" />
                <div className="gender">
                    <div className="gender_wrap">
                        <span>성별 : </span>
                        <label htmlFor="unkown">
                            <input type="radio" onClick={onClick_gender} id="unkown" name="gender" value="unkown" />
                            <span>선택안함</span>
                        </label>
                        <label htmlFor="male">
                            <input type="radio" onClick={onClick_gender} id="male" name="gender" value="male" />
                            <span>남성</span>
                        </label>
                        <label htmlFor="female">
                            <input type="radio" onClick={onClick_gender} id="female" name="gender" value="female" />
                            <span>여성</span>
                        </label>
                    </div>
                </div>
                
                <button type="submit" onClick={onSubmit} onSubmit={onSubmit} className="join_submit">확인</button>
            </form>
        </div>
    )
}

module.exports = Join;