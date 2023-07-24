import React from 'react'
import * as S from "./style"

function ProfilModal({ profilModal, setProfilModal, setIsLogin }) {

  return (
    <S.BackGround onClick={() => {setProfilModal(false)}}>
        <S.ModalBackGround onClick={(event) => {event.stopPropagation()}}>
            <S.ModalTitle>현재 로그인 계정</S.ModalTitle>
            <S.NickNameTitle>
                <S.NickNameFirst>이</S.NickNameFirst>
                <S.ImpoContainer>
                    <S.NickName>닉네임</S.NickName>
                    <S.Email>이메일</S.Email>
                </S.ImpoContainer>
            </S.NickNameTitle>
            <S.ModalTitle>내 계정</S.ModalTitle>
            <S.LogoutBtn onClick={() => {
                setIsLogin(false)
                setProfilModal(false)
                }}>로그아웃하기</S.LogoutBtn>
        </S.ModalBackGround>
    </S.BackGround>
  )
}

export default ProfilModal