import Axios from '../http/Axios';

class notificationService {
	getNotification = async (username) => {
		const perRequest = await Axios.get(
			`/get-notification?recipient_id=${username}`
		);
		return perRequest;
	};
}
export default new notificationService();
