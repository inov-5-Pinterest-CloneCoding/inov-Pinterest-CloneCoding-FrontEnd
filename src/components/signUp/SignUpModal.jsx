import * as L from "../ModalStyle";
import logo from "../../images/PinterestLogo.png";
import { GrClose } from "react-icons/gr";
import { FaComment } from "react-icons/fa";

export const LoginModal = ({ modalState, setModalState }) => {
	const kakaoLoginHandler = () => {
		const REST_API_KEY = "675207d8c9b206dd9adb619c2fda7c0d";
		const REDIRECT_URI = "http://localhost:3000/kakao/pinterest";
		window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
	};

	return (
		<>
			{modalState && (
				<L.Father>
					<L.ModalDiv>
						<L.Contents>
							<L.BtnContainer>
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
							</L.BtnContainer>
							<div>
								<L.LogoImg src={logo} alt='logo' />
								<L.BoldSpan>
									Pinterest에 오신 것을
									<br /> 환영합니다
								</L.BoldSpan>
							</div>

							<div>
								<form>
									<section>
										<L.Label>이메일</L.Label>
										<br />
										<L.Input type='text' placeholder='  이메일' />
									</section>
									<section>
										<L.Label>비밀번호</L.Label>
										<br />
										<L.Input type='password' placeholder='  비밀번호' />
									</section>
								</form>
								<section
									style={{
										marginBottom: "25px",
									}}>
									<L.MediumSpan>비밀번호를 잊으셨나요?</L.MediumSpan>
								</section>

								<section>
									<L.Button backgroundColor='red'>로그인</L.Button>
								</section>

								<L.MediumDiv>또는</L.MediumDiv>
								<div>
									<L.Button
										backgroundColor='rgb(255,204,0)'
										style={{ position: "relative" }}
										onClick={kakaoLoginHandler}>
										<FaComment style={{ position: "absolute", top: "10px", left: "25px" }} />
										KakaoTalk으로 계속하기
									</L.Button>
								</div>
								<div>
									<L.Span>
										계속 진행하면 Pinterest 서비스 약관에 동의하고
										<br /> 개인정보 보호정책을 읽었음을 인정하는 것으로 간주됩니다.
									</L.Span>
								</div>
							</div>
							<div>
								<L.Span>아직 Pinterest를 사용하고 있지 않으신가요? 가입하기</L.Span>
								<br />
								<L.Span>사업체인가요? 여기에서 시작하세요!</L.Span>
							</div>
						</L.Contents>
					</L.ModalDiv>
				</L.Father>
			)}
		</>
	);
};
