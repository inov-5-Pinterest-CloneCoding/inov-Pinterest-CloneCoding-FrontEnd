import * as S from "./style";
import logo from "../../images/PinterestLogo.png";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginModal } from "../logIn/LoginModal";
import { SignUpModal } from "../signUp/SignUpModal";
import { ProfilModal } from "../profil/ProfilModal";
import UserInfo from "../../utils/UserInfo";
import Avatar from "@mui/material/Avatar";

function Header() {
	const navigate = useNavigate();

	const location = useLocation();

	const [logInState, setLogInState] = useState(false); // 로그인
	const [signUpState, setSignUpState] = useState(false); // 가입하기
	const [profilModal, setProfilModal] = useState(false); //프로필 모달창

	let { isLogin, infoDict } = UserInfo(); // 토큰에서 현재 로그인된 사용자 정보

	// 토근이 만료되면 자동 로그아웃
	const currentTime = Date.now() / 1000; // 현재 시간
	if (currentTime > infoDict.exp) {
		alert("로그인이 만료되었습니다. 다시 로그인 해주시기 바랍니다.");
		isLogin = false;
		document.cookie = `accessToken=0; max-age=0`; // 쿠키에서 삭제
	}

	return (
		<S.HeaderContainer>
			<S.Container
				onClick={() => {
					navigate("/");
				}}>
				<S.LogoImg src={logo} alt='logo' />
				<S.LogoText>Pinterest</S.LogoText>
			</S.Container>
			{isLogin && currentTime < infoDict.exp ? (
				<S.MainHeaderContainer>
					{location.pathname === "/upload" ? (
						<S.UploadPageBtn
							onClick={() => {
								navigate("/upload");
							}}>
							만들기
						</S.UploadPageBtn>
					) : (
						<S.UploadBtn
							onClick={() => {
								navigate("/upload");
							}}>
							만들기
						</S.UploadBtn>
					)}
					<S.MainRightWrapper>
						<S.MainLogoContainer>
							<S.ProfilContainer>
								<Avatar>
									<img
										src={infoDict.userProfileImage}
										style={{ width: "30px", height: "30px" }}
										alt='유저프로필'
									/>
								</Avatar>
							</S.ProfilContainer>
						</S.MainLogoContainer>
						<S.ProfilModalBtn
							onClick={() => {
								setProfilModal(!profilModal);
							}}>
							∨
						</S.ProfilModalBtn>
						{profilModal && (
							<ProfilModal
								profilModal={profilModal}
								setProfilModal={setProfilModal}
								navigate={navigate}
							/>
						)}
						{/*모달창 띄우기*/}
					</S.MainRightWrapper>
				</S.MainHeaderContainer>
			) : (
				<div>
					<S.BtnContainer>
						<S.LoginBtn onClick={() => setLogInState(true)}>로그인</S.LoginBtn>
						<S.SignUpBtn onClick={() => setSignUpState(true)}>가입하기</S.SignUpBtn>
					</S.BtnContainer>
					<LoginModal modalState={logInState} setModalState={setLogInState} />
					<SignUpModal modalState={signUpState} setModalState={setSignUpState} />
				</div>
			)}
		</S.HeaderContainer>
	);
}

export default Header;
