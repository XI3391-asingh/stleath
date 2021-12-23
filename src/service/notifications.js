import Axios from '../http/Axios';

class notificationService {
	getNotification = async (username) => {
		const perRequest = await Axios.get(
			`/get-notification?recipient_id=${username}`,
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		return perRequest;
	};

	markReadNotification = async () => {
		const perRequest = await Axios.post(
			'/mark-read-notification',
			JSON.stringify({
				recipient_id: localStorage.getItem('username'),
			}),
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		return perRequest;
	};
}
export default new notificationService();
