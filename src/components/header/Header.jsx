import React, { useState } from 'react'
import * as S from "./style"
import logo from "../../img/logo.webp";
import { LoginModal } from '../../features/logIn/LoginModal';

function Header() {
    const [logInState, setLogInState] = useState("");

    return (
        <header>
            <S.LogoSection>
                <S.LogoImg src={logo} alt="logo"/>
                <S.LogoH1>Pinterest</S.LogoH1>
            </S.LogoSection>
            <section state={logInState}>
                <button onClick={() => setLogInState(true)}>로그인</button>
                <button>가입하기</button>
            </section>
            <LoginModal modalState={logInState} setModalState={setLogInState}/>
        </header>       
    )
}

export default Header;