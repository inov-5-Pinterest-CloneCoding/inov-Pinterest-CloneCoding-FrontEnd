import React, { useState } from "react";
import * as S from "./style";
import logo from "../../images/PinterestLogo.png";
import { LoginModal } from "../logIn/LoginModal";
import { SignUpModal } from "../signUp/SignUpModal";

function Header() {
	const [logInState, setLogInState] = useState(""); // 로그인
	const [signUpState, setSignUpState] = useState(""); // 가입하기

	return (
		<S.HeaderContainer>
			<S.Container>
				<S.LogoImg src={logo} alt='logo' />
				<S.LogoText>Pinterest</S.LogoText>
			</S.Container>
			<S.BtnContainer state={logInState || signUpState}>
				<S.LoginBtn onClick={() => setLogInState(true)}>로그인</S.LoginBtn>
				<S.SignUpBtn onClick={() => setSignUpState(true)}>가입하기</S.SignUpBtn>
			</S.BtnContainer>
			<LoginModal modalState={logInState} setModalState={setLogInState} />
			<SignUpModal modalState={signUpState} setModalState={setSignUpState} />
		</S.HeaderContainer>
	);
}

export default Header;
