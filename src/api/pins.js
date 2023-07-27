import axios from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_SERVER,
});

instance.interceptors.request.use((config) => {
	const accessToken = document.cookie.replace(/(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
	accessToken && (config.headers.Authorization = accessToken);
	return config;
});

// 조회 (페이지 별로)
export const fetchPins = async (pageParam) => {
	const response = await instance.get(`/api/file/images?page=${pageParam}&size=63`);
	return response;
};

// pin 등록
export const addPins = async (imageFile) => {
	const response = await instance.post(`/api/file/pin`, imageFile);
	return response;
};