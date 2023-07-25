import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Redirection = () => {
	const code = new URL(window.location.toString()).searchParams.get("code");
	console.log("code", code);
	const navigate = useNavigate();

	useEffect(() => {
		console.log(process.env.REACT_APP_SERVER);
		axios.post(`${process.env.REACT_APP_SERVER}/api/user/kakao/login?code=${code}`).then((r) => {
			console.log("r.data", r.data);
			console.log("r.header", r.headers);
			document.cookie = `accessToken=${r.headers.accesstoken}; path=/;`;
			// 토큰을 받아서 localStorage/쿠키에 같은 곳에 저장하는 코드를 여기에 쓴다.
			navigate("/");
		});
	}, []);

	return <div>로그인 중입니다.</div>;
};

export default Redirection;
