import jwt_decode from "jwt-decode";

function UserInfo() {
	const accessToken = document.cookie.replace(/(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/, "$1");

	let isLogin = accessToken ? true : false;
	const infoDict = accessToken ? jwt_decode(accessToken) : {}; // 현재 로그인된 사용자의 토근 디코딩;

	return [isLogin, infoDict];
}

export default UserInfo;
