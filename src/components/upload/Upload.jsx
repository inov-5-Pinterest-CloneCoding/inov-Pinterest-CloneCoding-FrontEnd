import * as S from "./style";
import { useCallback, useRef, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { addPins } from "../../api/pins";
import UserInfo from "../../utils/UserInfo";
import { Avatar } from "@mui/material";
import { useDropzone } from 'react-dropzone';

function Upload() {
	const [isLogin, infoDict] = UserInfo(); // 토큰에서 현재 로그인된 사용자 정보
	const userName = infoDict.username; // 로그인된 사용자 이름

	const onDrop = useCallback((acceptedFiles) => {
		// 파일을 선택하거나 드래그 앤 드롭한 후 실행되는 콜백 함수

		if (acceptedFiles.length > 0) {
			setUpLoadedImgFile(acceptedFiles[0]);
		
			let reader = new FileReader();
			reader.onload = function (e) {
			  setThumbnail(e.target.result);
			};
			reader.readAsDataURL(acceptedFiles[0]);
		  }
	  }, []);

	const dropRef = useRef(null);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
		onDrop,
		noClick: true,
	});

	const handleOnClick = () => {
		dropRef.current.click();
	};

	const [upLoadedImgFile, setUpLoadedImgFile] = useState(""); // 등록한 이미지
	const [thumbnail, setThumbnail] = useState(false); // 썸네일

	const navigate = useNavigate();
	const addMutation = useMutation(addPins, {
		onSuccess: () => {
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
						<S.UploadImgContainer>
							<S.UploadImg
								src={thumbnail}
								onClick={() => {
									setUpLoadedImgFile("");
									setThumbnail(false);
								}}
							/>
						</S.UploadImgContainer>
					) : (
						<div>
							<div {...getRootProps()} >
								<S.Inlabel htmlFor='files'>
									<S.LabelContainer>
										<FaArrowAltCircleUp style={{ fontSize: "240%" }} onClick={handleOnClick}/>
										<br />
										{isDragActive ? (
											<S.LabelText>사진을 이곳으로 드래그해주세요</S.LabelText>
										) : (
											<S.LabelText>사진을 드래그하거나 클릭하여 업로드하세요</S.LabelText>
										)}
									</S.LabelContainer>
								</S.Inlabel>
							</div>
							<S.ImgUploadWrapper id='files' {...getInputProps()} ref={dropRef}/>	
						</div>
					)}
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