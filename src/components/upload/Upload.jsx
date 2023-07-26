import React from 'react'
import * as S from "./style";
import { FaArrowAltCircleUp } from "react-icons/fa";

function Upload() {
    return (
        <S.PageBackGround>
            <S.PageContainer>
                <S.UploadContainer>
                    <S.Inlabel For='files'>
                        <S.LabelContainer>
                            <FaArrowAltCircleUp
                                style={{ fontSize: "240%" }}
                            />
                            <br />
                            <S.LabelText>
                                사진을 드래그하거나 클릭하여 업로드하세요
                            </S.LabelText>
                        </S.LabelContainer>
                    </S.Inlabel>
                    <S.ImgUploadWrapper
                        type='file'
                        id='files'
                    />
                    <S.TextInputWrapper>
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