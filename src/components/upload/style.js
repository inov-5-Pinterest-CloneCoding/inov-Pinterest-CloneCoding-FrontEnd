import { styled } from 'styled-components'

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
    display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 880px;
    background-color: #e9e9e9;
    padding-top: 30px;
`;

export const UploadContainer = styled.div`
    border-radius: 20px;
    margin: 80px;
	padding: 60px 30px 30px 30px;
	background-color: white;
	width: 1000px;
	height: 750px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Inlabel = styled.label`
    display: inline-block;
    color: #fff;
    vertical-align: middle;
    margin: 0 0 3px;
    margin-left: 5px;
    margin: 0 0 20px;
    padding: 12px;
    font-size: 18px;
    line-height: 1.33333333;
    text-overflow: ellipsis;
    overflow: hidden;
    align-items: center;
	justify-content: center;
    border-radius: 20px;
	width: 40%;
	height: 80%;
    background-color: #e9e9e9;
    border: none;
    cursor: pointer;
`;

export const ImgUploadWrapper = styled.input`
    display: none;
`;

export const TextInputWrapper = styled.div`
	align-items: center;
	justify-content: center;
	width: 50%;
	height: 80%;
    padding: 20px;
`;

export const TitleInput = styled.input`
    width: 100%;
    height: 80px;
    margin: 20px 30px 20px 30px;
    border: none;
    border-bottom: 1px solid #333333;
    outline: none;
    font-size: 300%;
    font-weight: bold;
    padding: 0px 10px 0px 10px;

    &:focus {
        border-bottom: 3px solid #7fc1ff;
    }
`;

export const NickNameTitle = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 5px;
    margin: 30px;  
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
    width: 50%;
    padding-left: 5px;
    display: flex;
    align-items: center;
    font-size: 110%;
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
    background-color: #e9e9e9;
    border: none;
    margin: 270px 30px 20px 30px;
    cursor: pointer;
    font-size: 180%;
    font-weight: bold;

    &:hover {
        background-color: #dadada;
    }
`;