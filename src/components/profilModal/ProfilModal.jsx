import React from 'react'
import { styled } from 'styled-components'

function ProfilModal({ profilModal, setProfilModal }) {

  return (
    <BackGround onClick={() => {setProfilModal(false)}}>
        <ModalBackGround onClick={(event) => {event.stopPropagation()}}>
            <ModalTitle>현재 로그인 계정</ModalTitle>
            <NickNameTitle>
                <NickNameFirst>이</NickNameFirst>
                <ImpoContainer>
                    <NickName>닉네임</NickName>
                    <Email>이메일</Email>
                </ImpoContainer>
            </NickNameTitle>
            <ModalTitle>내 계정</ModalTitle>
            <LogoutBtn>로그아웃하기</LogoutBtn>
        </ModalBackGround>
    </BackGround>
  )
}

const BackGround = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 8888;
`;

const ModalBackGround = styled.div`
    width: 300px;
    max-height: 70%;
    background-color: white;
    border-radius: 20px;
    top: 80px;
    right: 0;
    box-shadow: rgba(150, 150, 150, 0.45) 2px 2px 10px;
    padding: 10px;
    position: fixed;
    z-index: 9999;
`;

const ModalTitle = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 90%;
`;

const NickNameTitle = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 20px;

    &:hover {  
        background-color: #e9e9e9;
    }   
`;

const NickNameFirst = styled.div`
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

const NickName = styled.div`
    width: 50%;
    padding-left: 5px;
    display: flex;
    align-items: center;
    font-size: 110%;
    font-weight: bolder;
`;

const Email = styled.div`
    width: 50%;
    padding-left: 5px;
    display: flex;
    align-items: center;
    font-size: 90%;
`;

const ImpoContainer = styled.div`
    width: 50%;
    height: 80px;
    display: grid;
`;

const LogoutBtn = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 5px 5px 5px 15px;
    margin-bottom: 20px;
    font-size: 120%;
    font-weight: bolder;
    cursor: pointer;

    &:hover {  
        background-color: #e9e9e9;
    }
`;

export default ProfilModal