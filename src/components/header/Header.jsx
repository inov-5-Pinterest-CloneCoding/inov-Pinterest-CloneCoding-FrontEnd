import React, { useState } from "react";
import * as S from "./style";
import logo from "../../images/PinterestLogo.png";
import { LoginModal } from "../logIn/LoginModal";
import { SignUpModal } from "../signUp/SignUpModal";
import ProfilModal from "../profil/ProfilModal";

function Header() {

	const [logInState, setLogInState] = useState(false); // 로그인
	const [signUpState, setSignUpState] = useState(false); // 가입하기
 	const [isLogin, setIsLogin] = useState(false); // 로그인 조회(로그인 상태 구분)
 	const [profilModal, setProfilModal] = useState(false); //프로필 모달창


	return (
		<S.HeaderContainer>
			<S.Container>
				<S.LogoImg src={logo} alt='logo' />
				<S.LogoText>Pinterest</S.LogoText>
			</S.Container>
			{
			(false)
			? <S.MainRightWrapper>
				<S.MainLogoContainer>
			  		<S.ProfilContainer>이</S.ProfilContainer>
				</S.MainLogoContainer>
				<S.ProfilModalBtn
				onClick={() => {setProfilModal(!profilModal);}}
				>∨</S.ProfilModalBtn>
				{
				(profilModal === true)
				&& <ProfilModal
					profilModal={profilModal}
					setProfilModal={setProfilModal}
					setIsLogin={setIsLogin}
					/>
				}   {/*모달창 띄우기*/}
			</S.MainRightWrapper>
			: <>
				<S.BtnContainer state={logInState || signUpState}>
					<S.LoginBtn onClick={() => setLogInState(true)}>로그인</S.LoginBtn>
					<S.SignUpBtn onClick={() => setSignUpState(true)}>가입하기</S.SignUpBtn>
				</S.BtnContainer>
				<LoginModal modalState={logInState} setModalState={setLogInState} setIsLogin={setIsLogin} />
				<SignUpModal modalState={signUpState} setModalState={setSignUpState} />
			</>
			}			
		</S.HeaderContainer>
	);
}

export default Header;
