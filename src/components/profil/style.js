import { styled } from 'styled-components'

export const BackGround = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 8888;

    @media screen and (max-width: 360px) {
        background-color: rgba(0, 0, 0, 0.5);
    }
`;

export const ModalBackGround = styled.div`
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

    @media screen and (max-width: 360px) {
        top: 20%;
        left: 0;
        width: auto;
        height: 50%;
        display: grid;
        align-items: center;
    }
`;

export const ModalTitle = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 90%;
`;

export const NickNameTitle = styled.div`
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

export const LogoutBtn = styled.div`
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