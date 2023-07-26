import * as S from "./style";
import { useState } from "react";
import { QueryClient, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { addPins } from "../../api/pins";
import UserInfo from "../../utils/UserInfo";
import { Avatar } from "@mui/material";

function Upload() {
	const [isLogin, infoDict] = UserInfo(); // 토큰에서 현재 로그인된 사용자 정보
	const userName = infoDict.username; // 로그인된 사용자 이름

	const [upLoadedImgFile, setUpLoadedImgFile] = useState(""); // 등록한 이미지
	const [thumbnail, setThumbnail] = useState(false); // 썸네일
	const handleChangeImgFile = (e) => {
		if (e.target.files[0]) {
			// 파일이 있는 경우에만 아래 로직 수행
			setUpLoadedImgFile(e.target.files[0]);

			// 미리보기
			let reader = new FileReader(); // 파일을 읽기 위해 사용
			reader.onload = function (e) {
				setThumbnail(e.target.result); // FileReader로 읽은 파일의 데이터를 넣어줌
			};
			reader.readAsDataURL(e.target.files[0]); // 파일을 Data URL 형식으로 읽음
		}
	};

	const navigate = useNavigate();
	const queryClient = new QueryClient();
	const addMutation = useMutation(addPins, {
		onSuccess: () => {
			queryClient.invalidateQueries("pins");
			alert("업로드 성공");
			navigate("/");
		},
		onError: () => {
			alert("업로드 실패!");
		},
	});

	const onClickUploadBtnHandler = () => {
		if (!upLoadedImgFile) {
			// 무조건 이미지 한 개를 받을 수 있도록 함.
			alert("등록된 이미지가 없습니다.\n이미지를 등록해주세요.");
		} else {
			const formData = new FormData(); // 생성자 사용하여 FormData 생성
			formData.append("imageFile", upLoadedImgFile);
			addMutation.mutate(formData);
		}
	};

	return (
		<S.PageBackGround>
			<S.PageContainer>
				<S.UploadContainer>
					{thumbnail ? (
						<S.UploadImg
							src={thumbnail}
							onClick={() => {
								setUpLoadedImgFile("");
								setThumbnail(false);
							}}
						/>
					) : (
						<S.Inlabel For='files'>
							<S.LabelContainer>
								<FaArrowAltCircleUp style={{ fontSize: "240%" }} />
								<br />
								<S.LabelText>사진을 드래그하거나 클릭하여 업로드하세요</S.LabelText>
							</S.LabelContainer>
						</S.Inlabel>
					)}
					<S.ImgUploadWrapper type='file' id='files' onChange={handleChangeImgFile} />
					<S.TextInputWrapper>
						<S.NickNameTitle>
							<S.NickNameFirst>
								<Avatar>
									<img src={infoDict.userProfileImage} style={{ width: "30px", height: "30px" }} />
								</Avatar>
							</S.NickNameFirst>
							<S.ImpoContainer>
								<S.NickName>{userName}</S.NickName>
								<S.Email>{infoDict.email}</S.Email>
							</S.ImpoContainer>
						</S.NickNameTitle>
						<S.UploadBtn onClick={onClickUploadBtnHandler}>사이트에 업로드</S.UploadBtn>
					</S.TextInputWrapper>
				</S.UploadContainer>
			</S.PageContainer>
		</S.PageBackGround>
	);
}

export default Upload;
