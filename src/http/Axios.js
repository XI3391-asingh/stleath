import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000/api';


const Axios = axios.create({
    baseURL: apiBaseUrl,
    
});

Axios.interceptors.response.use((response) => {
    return { isSuccess: true, data: response?.data?.data };
}, (error) => { 
    return Promise.reject({isSuccess: false, message: error?.response?.statusText})
});

export default Axios;