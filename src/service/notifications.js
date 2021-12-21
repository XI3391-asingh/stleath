import Axios from '../http/Axios';

class notificationService {
	getNotification = async (username) => {
		const perRequest = await Axios.get(
			`/get-notification?recipient_id=${username}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + localStorage.getItem('access_token'),
				},
			}
		);
		return perRequest;
	};
}
export default new notificationService();
