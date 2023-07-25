import axios from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_SERVER,
});

instance.interceptors.request.use((config) => {
	const accessToken = document.cookie.replace(/(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
	accessToken && (config.headers.Authorization = accessToken);
	return config;
});

export const signUp = async (newUser) => {
	const response = instance.post(`/api/user/signup`, newUser, {
		headers: { "Content-Type": "application/json" },
	});
	return response;
};

export const login = async (user) => {
	const response = instance.post(`/api/user/login`, user, {
		headers: { "Content-Type": "application/json" },
	});
	return response;
};