import React from 'react'
import * as S from "./style";

function Upload() {
    return (
        <S.PageBackGround>
            <S.PageContainer>
                <S.UploadContainer>
                    <S.Inlabel htmlFor='files'>사진 업로드</S.Inlabel>
                    <S.ImgUploadWrapper
                        type='file'
                        id='files'
                    />
                    <S.TextInputWrapper>
                        <S.TitleInput
                            placeholder='제목 추가'
                        />
                        <S.NickNameTitle>
                            <S.NickNameFirst>이</S.NickNameFirst>
                            <S.ImpoContainer>
                                <S.NickName>닉네임</S.NickName>
                                <S.Email>이메일</S.Email>
                            </S.ImpoContainer>
                        </S.NickNameTitle>
                        <S.UploadBtn>사이트에 업로드</S.UploadBtn>
                    </S.TextInputWrapper>
                </S.UploadContainer>
            </S.PageContainer>
        </S.PageBackGround>
    )
}

export default Upload