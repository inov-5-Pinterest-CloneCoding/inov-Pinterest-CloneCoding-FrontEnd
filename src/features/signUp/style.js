import { styled } from "styled-components";

export const ModalDiv = styled.div`
    display:${props => props.state ? 'block' : 'none'};
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    border-radius: 12px;
    box-sizing: border-box;

    padding: 24px;
    background-color: rgb(200, 200, 200);

    width: 500px;
    height: 300px;
    z-index:${props => props.state ? 1 : -1};
`

export const Contents = styled.div`
    display:flex;
    flex-direction:column;
    height: 100%;
    justify-content:space-between;
`
export const BtnContainer = styled.div`
    display:flex;
    justify-content:right;
`

export const LogoSection = styled.section`
    display: flex;
 
    margin-top: 20px;
    margin-left: 30px;
    align-items: center;
`;

export const LogoImg = styled.img`
    width: 32px;
    height: 32px;
`;

export const LogoH1 = styled.h1`
    color: rgba(187, 39, 26);
    font-size: 18px;
    align-items: center;
    margin-left: 8px;
`;
