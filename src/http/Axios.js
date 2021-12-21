import axios from 'axios';

const apiBaseUrl =
	process.env.REACT_APP_SERVER_URL || 'http://localhost:4000/api';

console.log(
	'process.env.REACT_APP_SERVER_URL',
	process.env.REACT_APP_SERVER_URL
);

const Axios = axios.create({
	baseURL: apiBaseUrl,
});

// export const setToken = (token) => {
// 	if (token) {
// 		Axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
// 	} else {
// 		delete Axios.defaults.headers.common['Authorization'];
// 	}
// };

Axios.interceptors.response.use(
	(response) => {
		return { isSuccess: true, data: response?.data?.data };
	},
	(error) => {
		return Promise.reject({
			isSuccess: false,
			message: error?.response?.statusText,
		});
	}
);

export default Axios;
