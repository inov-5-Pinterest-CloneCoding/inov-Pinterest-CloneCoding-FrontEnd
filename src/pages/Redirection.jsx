import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Redirection = () => {
	const code = new URL(window.location.toString()).searchParams.get("code");
	const navigate = useNavigate();
	useEffect(() => {
		axios.post(`${process.env.REACT_APP_SERVER}/api/user/kakao/login?code=${code}`).then((r) => {
			document.cookie = `accessToken=${r.headers.authorization}; path=/;`;
			navigate("/");
			window.location.reload();
		});
	});

	return <div>로그인 중입니다.</div>;
};

export default Redirection;