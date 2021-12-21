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

	markReadNotification = async () => {
		const headers = {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('access_token'),
		};
		const perRequest = await Axios.post(
			'/mark-read-notification',
			JSON.stringify({
				recipient_id: localStorage.getItem('username'),
			}),
			{
				headers: headers,
			}
		);

		return perRequest;
	};
}
export default new notificationService();
