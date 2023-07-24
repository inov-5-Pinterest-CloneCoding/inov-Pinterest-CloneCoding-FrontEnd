import React from 'react';
import "../styles/LoginHeader.css";
import Logo from "../images/PinterestLogo.png"

function LoginHeader() {
  return (
    <div className='loginHeaderContainer'>
        <div className='logoContainer'>
            <img className='logoImg' src={Logo} alt='logo'></img>
            <div className='logoText'>Pinterest</div>
        </div>
        <div className='buttonContainer'>
            <button className='loginBtn'>로그인</button>
            <button className='JoinBtn'>가입하기</button>
        </div>
    </div>
  )
}

export default LoginHeader