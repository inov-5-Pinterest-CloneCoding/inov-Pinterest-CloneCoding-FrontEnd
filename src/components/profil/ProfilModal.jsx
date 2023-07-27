import * as S from "./style";
import UserInfo from "../../utils/UserInfo";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

export const ProfilModal = ({ setProfilModal }) => {
	const navigate = useNavigate();
	const handleClickLogOutBtn = () => { // 로그아웃 버튼 선택하면 쿠키에서 토큰 삭제
		document.cookie = `accessToken=0; max-age=0`;
		setProfilModal(false);
		navigate("/");
	};

	const { infoDict } = UserInfo(); // 토큰에서 현재 로그인된 사용자 정보
	const userName = infoDict.username;

	return (
		<S.BackGround
			onClick={() => {
				setProfilModal(false);
			}}>
			<S.ModalBackGround onClick={(event) => { event.stopPropagation(); }}>
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