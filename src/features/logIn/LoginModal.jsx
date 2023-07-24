import * as S from "./style";
import logo from "../../img/logo.webp";

export const LoginModal = ({modalState, setModalState}) => {
    return (
        <div>
            <S.ModalDiv state={modalState}>
                <S.Contents>
                    <S.BtnContainer>
                        <button onClick={() => setModalState(!modalState)}>X</button>
                    </S.BtnContainer>
                    <div>
                        <S.LogoImg src={logo} alt="logo"/>
                        <span>Pinterest에 오신 것을 환영합니다</span>
                    </div>
                    <div>
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
                                <button>로그인</button>
                            </section>
                        </form>
                        <div>또는</div>
                        <div>
                            <button>KakaoTalk으로 계속하기</button>
                        </div> 
                        <div>
                            <span>계속 진행하면 Pinterest 서비스 약관에 동의하고 개인정보 보호정책을 읽었음을 인정하는 것으로 간주됩니다.</span>
                            <span>컬렉션 알림.</span>
                        </div>
                    </div>     
                    <div>
                        <span>아직 Pinterest를 사용하고 있지 않으신가요? 가입하기</span>
                        <span>사업체인가요? 여기에서 시작하세요!</span>
                    </div>   
                </S.Contents>
            </S.ModalDiv>
        </div>
    )
}