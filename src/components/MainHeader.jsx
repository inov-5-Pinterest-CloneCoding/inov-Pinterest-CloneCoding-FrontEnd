import React, { useState } from 'react'
import { styled } from 'styled-components'
import Logo from "../img/logo.webp"
import ProfilModal from './profilModal/ProfilModal';

function MainHeader() {

  const [profilModal, setProfilModal] = useState(false);

  const onClickProfilModalHandler = () => {
    setProfilModal(!profilModal);
  };

  return (
    <MainHeaderContainer>
      <MainLeftWrapper>
        <MainLogoContainer>
          <MainLogoImg src={Logo} alt='logo'></MainLogoImg>
        </MainLogoContainer>
        <HomeBtn>홈</HomeBtn>
      </MainLeftWrapper>
      <MainRightWrapper>
        <MainLogoContainer>
          <ProfilContainer>이</ProfilContainer>
        </MainLogoContainer>
        <ProfilModalBtn
          onClick={onClickProfilModalHandler}
        >∨</ProfilModalBtn>
        {
        (profilModal === true)
        && <ProfilModal
            profilModal={profilModal}
            setProfilModal={setProfilModal}
            />
        }   {/*모달창 띄우기*/}
      </MainRightWrapper>
    </MainHeaderContainer>
  )
}

const MainHeaderContainer = styled.div`
  height: 80px;
	padding: 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const MainLeftWrapper = styled.div`
	height: 35.2px;
	display: flex;
	align-items: center;
	padding: 0px 12px;
`;

const MainRightWrapper = styled.div`
  height: 35.2px;
	display: flex;
	align-items: center;
	padding: 0px 12px;
`;

const MainLogoContainer = styled.div`
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

const MainLogoImg = styled.img`
  width: 32px;
	height: 32px;
`;

const HomeBtn = styled.button`
  width: 80px;
  height: 60px;
  background-color: #111111;
  color: white;
  border-radius: 30px;
  margin: 0px 10px;
  font-size: 130%;
  font-weight: bolder;
  cursor: pointer;
`;

const ProfilContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  font-weight: bolder;
  background-color: #f0f0f0;
`;

const ProfilModalBtn = styled.button`
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

export default MainHeader