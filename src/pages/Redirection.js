import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Redirection = () => {
	const code = new URL(window.location.toString()).searchParams.get("code");
	const navigate = useNavigate();

	useEffect(() => {
		console.log(process.env.REACT_APP_SERVER);
		axios.post(`${process.env.REACT_APP_SERVER}/api/user/kakao/login?code=${code}`).then((r) => {
			document.cookie = `accessToken=${r.headers.authorization}; path=/;`;
			navigate("/");
		});
	}, []);

	return <div>로그인 중입니다.</div>;
};

export default Redirection;
