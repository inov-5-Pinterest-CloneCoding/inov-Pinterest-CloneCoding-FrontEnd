import * as L from "../ModalStyle";
import logo from "../../images/PinterestLogo.png";
import { GrClose } from "react-icons/gr";
import { FaComment } from "react-icons/fa";
import { useState } from "react";
import { useMutation } from "react-query";
import { login } from "../../api/user";

export const LoginModal = ({ modalState, setModalState }) => {
	const kakaoLoginHandler = () => {
		const REST_API_KEY = "675207d8c9b206dd9adb619c2fda7c0d";
		const REDIRECT_URI = "http://localhost:3000/kakao/pinterest";
		window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
	};

	const [userInfo, setUserInfo] = useState({ // input 태그 값 (객체 - 이메일, 비밀번호)
		email: "",
		password: "",
	});
	// 구조 분해 할당으로 입력된 정보 저장
	const { email, password } = userInfo;
	const onChangeLoginHandler = (e) => {
		const { value, name } = e.target;
		setUserInfo({
			...userInfo,
			[name]: value,
		});
	};

	const closeModal = () => { // 모달 닫기 (input 태그 초기화도 진행)
		setUserInfo("");
		setModalState(!modalState);
	};

	const loginMutation = useMutation(login, {
		onSuccess: (res) => {
			const token = res.headers.authorization; // token 값 가져오기
			if (!token) alert("로그인 실패!"); // token 값이 없는 경우
			else { // token 값이 있는 경우
				document.cookie = `accessToken=${token}; path=/;`; // cookie에 token 저장
				alert("로그인 성공!");
			}
			closeModal();
		},
		onError: () => {
			alert(`로그인 실패!`);
		},
	});

	const onClickLoginBtnHandler = () => {
		loginMutation.mutate(
			JSON.stringify({
				email,
				password,
			})
		);
	};

	return (
		<div>
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
									onClick={() => closeModal()}
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
										<L.Input
											type='text'
											placeholder='  이메일'
											name='email'
											value={email}
											onChange={onChangeLoginHandler}
										/>
									</section>
									<section>
										<L.Label>비밀번호</L.Label>
										<br />
										<L.Input
											type='password'
											placeholder='  비밀번호'
											name='password'
											value={password}
											onChange={onChangeLoginHandler}
										/>
									</section>
								</form>
								<section style={{ marginBottom: "25px" }}>
									<L.MediumSpan>비밀번호를 잊으셨나요?</L.MediumSpan>
								</section>
								<section>
									<L.Button $backgroundColor='red' onClick={onClickLoginBtnHandler}>
										로그인
									</L.Button>
								</section>
								<L.MediumDiv>또는</L.MediumDiv>
								<div>
									<L.Button
										onClick={kakaoLoginHandler}
										$backgroundColor='rgb(255,204,0)'
										style={{ position: "relative" }}>
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
		</div>
	);
};