import axios from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_SERVER,
});

//requset가 진행되기전에 실행해줘야 할 것!
instance.interceptors.request.use((config) => {
	const accessToken = document.cookie.replace(/(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
	accessToken && (config.headers.Authorization = accessToken);
	return config;
});

export const fetchPins = async () => {
	let response;
	await instance.get("/api/file/images").then((res) => (response = res.data.content));
	return response;
};
