import Axios from '../http/Axios';

class authService {
	login = async (payload) => {
		const perRequest = await Axios.post('/login', payload);
		return perRequest;
	};
}
export default new authService();
