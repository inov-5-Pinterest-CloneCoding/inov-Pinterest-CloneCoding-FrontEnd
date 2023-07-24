import * as S from "./style";
import logo from "../../images/PinterestLogo.png";

export const SignUpModal = ({modalState, setModalState}) => {
    return (
        <S.ModalDiv state={modalState}>
        <S.ModalContainer>
            <S.ModalBtn>
                <button onClick={() => setModalState(!modalState)}>X</button>
            </S.ModalBtn>
            <div>
                <div><S.LogoImg src={logo} alt="logo"/></div>
                <S.LogoDiv><S.LogeText>Pinterest에 오신 것을 환영합니다</S.LogeText></S.LogoDiv>
            </div>
            <S.ModalContent>
                <form>
                    <section>
                        <label>이메일</label>
                        <input type="text" placeholder="이메일"/>
                    </section>
                    <section>
                        <label>비밀번호</label>
                        <input type="password" placeholder="비밀번호"/>
                    </section>
                    <section>
                        <span>비밀번호를 잊으셨나요?</span>
                    </section>
                    <section>
                        <S.Button color="rgb(230, 0, 35)">가입하기</S.Button>
                    </section>
                </form>
                <div>또는</div>
                <div>
                    <S.Button color="#F7E600)">KakaoTalk으로 계속하기</S.Button>
                </div> 
                <div>
                    <S.Span fontSize="11">계속 진행하면 Pinterest 서비스 약관에 동의하고 개인정보 보호정책을 읽었음을 인정하는 것으로 간주됩니다.</S.Span>
                    <S.Span fontSize="11">컬렉션 알림.</S.Span>
                </div>
            </S.ModalContent>     
            <div>
                <S.Span fontSize="11">아직 Pinterest를 사용하고 있지 않으신가요? 가입하기</S.Span>
                <div><S.Span fontSize="11">사업체인가요? 여기에서 시작하세요!</S.Span></div>
            </div>   
        </S.ModalContainer>
    </S.ModalDiv>
    )
}