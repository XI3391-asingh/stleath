import Axios from '../http/Axios';

class indexService {
	getEmotionReport = async () => {
		const perRequest = await Axios.get(`/get-count-call-emotions`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('access_token'),
			},
		});
		return perRequest;
	};

	getReport = async (id) => {
		let calltype = id ? `?call_emotion=${id}` : '';
		const perRequest = await Axios.get(`/get-report${calltype}`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('access_token'),
			},
		});
		return perRequest;
	};

	getCallDetails = async (id) => {
		const perRequest = await Axios.get(`/get-call-details/${id}`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('access_token'),
			},
		});
		return perRequest;
	};

	generateAnalysis = async () => {
		const perRequest = await Axios.get(`/generate-speech-to-text`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('access_token'),
			},
		});
		return perRequest;
	};

	getCallEmotion = async (id) => {
		const perRequest = await Axios.get(`/get-report?call_emotion=${id}`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('access_token'),
			},
		});
		return perRequest;
	};

	addComment = async (payload) => {
		const headers = {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('access_token'),
		};
		const perRequest = await Axios.post('/add-comment', payload, {
			headers: headers,
		});
		return perRequest;
	};

	uplaodFiles = async (payload) => {
		const headers = {
			Authorization: 'Bearer ' + localStorage.getItem('access_token'),
		};
		const perRequest = await Axios.post('/s3gallery-upload', payload, {
			headers: headers,
		});
		return perRequest;
	};

	getCallCountByDuration = async () => {
		const headers = {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('access_token'),
		};
		const perRequest = await Axios.post('/get-call-count-by-duration', {
			headers: headers,
		});
		return perRequest;
	};

	getCallCount = async () => {
		const headers = {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('access_token'),
		};
		const perRequest = await Axios.post('/get-call-count', {
			headers: headers,
		});
		return perRequest;
	};
}
export default new indexService();
