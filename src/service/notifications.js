import Axios from '../http/Axios';

class notificationService {
	getNotification = async (id) => {
		const perRequest = await Axios.get(`/get-notification?recipient_id=${id}`);
		return perRequest;
	};
}
export default new notificationService();
