import React from 'react'
import * as S from "./style"

function ProfilModal({ infoDict, profilModal, setProfilModal }) {
  console.log(infoDict)

  const handleClickLogOutBtn = () => {
        document.cookie = `accessToken=0; max-age=0`;
        setProfilModal(false);
  };

  return (
    <S.BackGround onClick={() => {setProfilModal(false)}}>
        <S.ModalBackGround onClick={(event) => {event.stopPropagation()}}>
            <S.ModalTitle>현재 로그인 계정</S.ModalTitle>
            <S.NickNameTitle>
                <S.NickNameFirst>이</S.NickNameFirst>
                <S.ImpoContainer>
                    <S.NickName>닉네임</S.NickName>
                    <S.Email>{infoDict.email}</S.Email>
                </S.ImpoContainer>
            </S.NickNameTitle>
            <S.ModalTitle>내 계정</S.ModalTitle>
            <S.LogoutBtn onClick={handleClickLogOutBtn}>로그아웃하기</S.LogoutBtn>
        </S.ModalBackGround>
    </S.BackGround>
  )
}

export default ProfilModal;