import React, { useState } from "react";
import * as S from "./style";
import logo from "../../images/PinterestLogo.png";
import { LoginModal } from "../logIn/LoginModal";
import { SignUpModal } from "../signUp/SignUpModal";
import ProfilModal from "../profil/ProfilModal";
import jwt_decode from "jwt-decode";

function Header() {
	const [logInState, setLogInState] = useState(false); // 로그인
	const [signUpState, setSignUpState] = useState(false); // 가입하기
 	const [profilModal, setProfilModal] = useState(false); //프로필 모달창

	// token 가져오기 (token이 있으면 로그인된 상태)
	const accessToken = document.cookie.replace(/(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
	let isLogin = accessToken ? true : false;
	const infoDict = accessToken ? jwt_decode(accessToken) : {}; // 현재 로그인된 사용자의 토근 디코딩;

	// 토근이 만료되면 자동 로그아웃
	const currentTime = Date.now() / 1000; // 현재 시간
	if (currentTime > infoDict.exp) {
		alert("로그인이 만료되었습니다. 다시 로그인 해주시기 바랍니다.");
		isLogin = false;
		document.cookie = `accessToken=0; max-age=0`; // 쿠키에서 삭제
	}

	return (
		<S.HeaderContainer>
			<S.Container>
				<S.LogoImg src={logo} alt='logo' />
				<S.LogoText>Pinterest</S.LogoText>
			</S.Container>
			{
			(isLogin && currentTime < infoDict.exp)
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
				    infoDict={infoDict}
					profilModal={profilModal}
					setProfilModal={setProfilModal}
					/>
				}   {/*모달창 띄우기*/}
			</S.MainRightWrapper>
			: <>
				<S.BtnContainer state={logInState || signUpState}>
					<S.LoginBtn onClick={() => setLogInState(true)}>로그인</S.LoginBtn>
					<S.SignUpBtn onClick={() => setSignUpState(true)}>가입하기</S.SignUpBtn>
				</S.BtnContainer>
				<LoginModal modalState={logInState} setModalState={setLogInState} />
				<SignUpModal modalState={signUpState} setModalState={setSignUpState} />
			</>
			}			
		</S.HeaderContainer>
	);
}

export default Header;
