import React from "react";
import * as S from "./style";
import UserInfo from "../../utils/UserInfo";
import Avatar from "@mui/material/Avatar";

export const ProfilModal = ({ setProfilModal }) => {
	const handleClickLogOutBtn = () => {
		document.cookie = `accessToken=0; max-age=0`;
		setProfilModal(false);
	};

	const { infoDict } = UserInfo(); // 토큰에서 현재 로그인된 사용자 정보
	const userName = infoDict.username;

	console.log("infoDict", infoDict);
	return (
		<S.BackGround
			onClick={() => {
				setProfilModal(false);
			}}>
			<S.ModalBackGround
				onClick={(event) => {
					event.stopPropagation();
				}}>
				<S.ModalTitle>현재 로그인 계정</S.ModalTitle>
				<S.NickNameTitle>
					<S.NickNameFirst>
						<Avatar>
							<img
								src={infoDict.userProfileImage}
								style={{ width: "30px", height: "30px" }}
								alt='유저프로필'
							/>
						</Avatar>
					</S.NickNameFirst>
					<S.ImpoContainer>
						<S.NickName>{userName}</S.NickName>
						<S.Email>{infoDict.email}</S.Email>
					</S.ImpoContainer>
				</S.NickNameTitle>
				<S.ModalTitle>내 계정</S.ModalTitle>
				<S.LogoutBtn onClick={handleClickLogOutBtn}>로그아웃하기</S.LogoutBtn>
			</S.ModalBackGround>
		</S.BackGround>
	);
};
