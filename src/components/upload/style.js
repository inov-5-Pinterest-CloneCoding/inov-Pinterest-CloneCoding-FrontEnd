import { styled } from "styled-components";

export const PageBackGround = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	left: 0;
	top: 55px;
	width: 100%;
	height: 100%;
	background-color: #e9e9e9;
`;

export const PageContainer = styled.div`
	/* display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 880px;
    padding-top: 30px;
    justify-content: center;
	align-items: center;

    @media screen and (max-width: 360px) {
        width: 100%;
	    height: 100%;
    } */
`;

export const UploadContainer = styled.div`
	border-radius: 20px;
	margin: 80px;
	padding: 60px 30px 30px 30px;
	background-color: white;
	width: 1000px;
	height: 80%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 360px) {
		display: grid;
		width: 100%;
		height: 100%;
		padding: 0px;
		margin: 0px;
	}
`;

export const Inlabel = styled.label`
	display: flex;
	color: #182251;
	vertical-align: middle;
	padding: 12px;
	font-size: 18px;
	text-overflow: ellipsis;
	text-align: center;
	justify-content: center;
	align-items: center;
	margin: 20px;
	border-radius: 20px;
	width: 500px;
	height: 80%;
	background-color: #e9e9e9;
	border: none;
	cursor: pointer;

	@media screen and (max-width: 360px) {
		width: 90%;
		height: 100%;
	}
`;

export const LabelContainer = styled.div`
	justify-content: center;
	align-items: center;
	padding: 230px 0px 230px 0px;
	width: 100%;
	border: 3px dashed #fff;
	border-radius: 20px;
`;

export const LabelText = styled.div`
	width: 100%;
	margin-top: 20px;
	font-size: 120%;
	font-weight: bold;
`;

export const ImgUploadWrapper = styled.input`
	display: none;
`;

export const TextInputWrapper = styled.div`
	align-items: center;
	justify-content: center;
	width: 50%;
	padding: 20px;
`;

export const NickNameTitle = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	border-radius: 10px;
	padding: 5px;
	margin: 100px 5px 10px 5px;

	@media screen and (max-width: 945px) {
		font-size: 90%;
	}

	@media screen and (max-width: 360px) {
		margin-top: 0px;
	}
`;

export const NickNameFirst = styled.div`
	width: 80px;
	height: 80px;
	margin-left: 10px;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 200%;
	font-weight: bolder;
	background-color: #e9e9e9;
`;

export const NickName = styled.div`
	width: 100%;
	padding-left: 5px;
	display: flex;
	align-items: center;
	font-size: 130%;
	font-weight: bolder;
`;

export const Email = styled.div`
	width: 50%;
	padding-left: 5px;
	display: flex;
	align-items: center;
	font-size: 90%;
`;

export const ImpoContainer = styled.div`
	width: 50%;
	height: 80px;
	display: grid;
`;

export const UploadBtn = styled.button`
	border-radius: 60px;
	width: 100%;
	height: 60px;
	margin-top: 300px;
	background-color: #e9e9e9;
	border: none;
	cursor: pointer;
	font-size: 150%;
	font-weight: bold;

	&:hover {
		background-color: #dadada;
	}

	@media screen and (max-width: 950px) {
		font-size: 90%;
		margin: 0px;
	}

	@media screen and (max-width: 360px) {
		width: 360px;
		margin: 0px 0px 0px 10px;
	}
`;

export const UploadImgContainer = styled.div`
	display: flex;
	color: #182251;
	vertical-align: middle;
	padding: 12px;
	font-size: 18px;
	text-overflow: ellipsis;
	text-align: center;
	justify-content: center;
	align-items: center;
	margin: 20px;
	border-radius: 20px;
	width: 63%;
	height: 550px;
	background-color: #e9e9e9;
	border: none;
	object-fit: contain;
	cursor: pointer;

	@media screen and (max-width: 360px) {
		width: 90%;
		height: 100%;
	}
`;

export const UploadImg = styled.img`
	display: flex;
	padding: 12px;
	font-size: 18px;
	text-overflow: ellipsis;
	text-align: center;
	justify-content: center;
	align-items: center;
	max-width: 500px;
  	max-height: 500px;
	cursor: pointer;

	@media screen and (max-width: 360px) {
		width: 90%;
		height: 100%;
	}
`;
