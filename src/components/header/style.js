import { styled } from "styled-components";

export const HeaderContainer = styled.div`
	width: 100%;
    height: 55px;
	padding: 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Container = styled.div`
    width: 80%;
	height: 34px;
	display: flex;
	align-items: center;
	padding: 0px 12px;
`;
export const LogoImg = styled.img`
    width: 32px;
	height: 32px;
`;

export const LogoText = styled.div`
    color: #cc0000;
	font-weight: bolder;
	margin-left: 5px;
	font-size: 120%;
`;

export const BtnContainer = styled.div`
    padding: 5px;
	display: flex;
`;

export const LoginBtn = styled.button`
    width: 68px;
	height: 40px;
	border: none;
	border-radius: 30px;
	outline: none;
	background-color: #e60023;
	color: white;
	font-weight: bolder;
	margin: 0px 5px;
	font-size: 100%;

    &:hover {
		cursor: pointer;
        background-color: #ad081b;
    }
`;

export const SignUpBtn = styled.button`
    width: 80px;
	height: 40px;
	border: none;
	border-radius: 30px;
	outline: none;
	background-color: #efefef;
	font-weight: bolder;
	margin: 0px 5px;
	font-size: 100%;

    &:hover {
		cursor: pointer;
        background-color: #e2e2e2;
    }
`;

export const MainRightWrapper = styled.div`
  height: 35.2px;
	display: flex;
	align-items: center;
	padding: 0px 12px;
`;

export const MainLogoContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ProfilContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  font-weight: bolder;
  background-color: #f0f0f0;
`;

export const ProfilModalBtn = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 120%;
  font-weight: bolder;
  background-color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    font-size: 110%;
  }
`;