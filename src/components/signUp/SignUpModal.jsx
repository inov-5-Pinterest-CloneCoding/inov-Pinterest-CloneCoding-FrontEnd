import * as S from "../ModalStyle";
import logo from "../../images/PinterestLogo.png";
import { GrClose } from "react-icons/gr";
import { FaComment } from "react-icons/fa";

export const SignUpModal = ({ modalState, setModalState }) => {
	return (
		<>
			{modalState && (
				<S.Father>
					<S.ModalDiv>
						<S.Contents>
							<S.BtnContainer>
								<GrClose
									size={20}
									style={{
										cursor: "pointer",
										position: "relative",
										top: "0px",
										right: "-60px",
									}}
									onClick={() => setModalState(!modalState)}
								/>
							</S.BtnContainer>
							<div>
								<S.LogoImg src={logo} alt='logo' />
								<S.BoldSpan>
									Pinterest에 오신 것을
									<br /> 환영합니다
								</S.BoldSpan>
							</div>

							<div>
								<form>
									<section>
										<S.Label>이메일</S.Label>
										<br />
										<S.Input type='text' placeholder='  이메일' />
									</section>
									<section>
										<S.Label>비밀번호</S.Label>
										<br />
										<S.Input type='password' placeholder='  비밀번호' />
									</section>
								</form>
								<section
									style={{
										marginBottom: "25px",
									}}>
									<S.MediumSpan>비밀번호를 잊으셨나요?</S.MediumSpan>
								</section>

								<section>
									<S.Button backgroundColor='red'>로그인</S.Button>
								</section>

								<S.MediumDiv>또는</S.MediumDiv>
								<div>
									<S.Button backgroundColor='rgb(255,204,0)' style={{ position: "relative" }}>
										<FaComment style={{ position: "absolute", top: "10px", left: "25px" }} />
										KakaoTalk으로 계속하기
									</S.Button>
								</div>
								<div>
									<S.Span>
										계속 진행하면 Pinterest 서비스 약관에 동의하고
										<br /> 개인정보 보호정책을 읽었음을 인정하는 것으로 간주됩니다.
									</S.Span>
								</div>
							</div>
							<div>
								<S.Span>아직 Pinterest를 사용하고 있지 않으신가요? 가입하기</S.Span>
								<br />
								<S.Span>사업체인가요? 여기에서 시작하세요!</S.Span>
							</div>
						</S.Contents>
					</S.ModalDiv>
				</S.Father>
			)}
		</>
	);
};
