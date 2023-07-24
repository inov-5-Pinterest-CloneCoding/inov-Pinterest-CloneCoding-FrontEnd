import { styled } from "styled-components";

export const ModalDiv = styled.div`
    display:${props => props.state ? 'block' : 'none'};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    border-radius: 32px;
    box-sizing: border-box;

    padding: 24px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 2px 10px;

    text-align: center;
    margin: auto;

    width: 484px;
    height: 530px;

    z-index:${props => props.state ? 1 : -1};
`

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    min-height: 400px;
    padding: 20px 10px 24px;
    justify-content: space-between;
`
export const ModalBtn = styled.div`
    display:flex;
    justify-content:right;
`

export const LogoDiv = styled.div`
    margin: 0px auto 22px;
    width: 400px;
`;

export const LogoSection = styled.section`
    display: flex;
 
    margin-top: 20px;
    margin-left: 30px;
    align-items: center;
`;

export const LogeText = styled.h1`
    color: rgb(51, 51, 51);
    font-size: 32px;
    font-weight: 600;
    letter-spacing: -1.2px;
    padding-left: 16px;
    padding-right: 16px;
    -webkit-font-smoothing: antialiased;
    word-break: keep-all;
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

export const ModalContent = styled.div`
    width: 268px;
    margin: 0px auto;
`;

export const Button = styled.button`
    border: 0px;
    height: 40px;
    display: inline-block;
    border-radius: 20px;
    -webkit-font-smoothing: antialiased;
    padding: 0px 18px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 8px;
    vertical-align: middle;
    background-color: ${(props => props.color)};
    color: rgb(255, 255, 255);
    width: 100%;
`;

export const Span = styled.span`
    font-size: ${props => props.fontSize}px;
    font-weight: ${props => props.fontWeight};
`;