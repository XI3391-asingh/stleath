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

Axios.interceptors.request.use((config) => {
	const token = localStorage.getItem('access_token');
	config.headers.Authorization = token ? `Bearer ${token}` : '';
	return config;
});

// Axios.defaults.headers.common["Authorization"] =
//   "Bearer " + localStorage.getItem("access_token");

// axios.interceptors.request.use((config) => {
//   if (localStorage.getItem("access_token")) {
//     Axios.defaults.headers.common["Authorization"] =
//       "Bearer " + localStorage.getItem("access_token");
//   }
//   return config;
// });

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
