import Axios from '../http/Axios';

const headers = {
	'Content-Type': 'application/json',
};

class indexService {
	getEmotionReport = async () => {
		const perRequest = await Axios.get(`/get-count-call-emotions`, {
			headers: headers,
		});
		return perRequest;
	};

	getReport = async (id) => {
		let calltype = id ? `?call_emotion=${id}` : '';
		const perRequest = await Axios.get(`/get-report${calltype}`, {
			headers: headers,
		});
		return perRequest;
	};

	getCallDetails = async (id) => {
		const perRequest = await Axios.get(`/get-call-details/${id}`, {
			headers: headers,
		});
		return perRequest;
	};

	generateAnalysis = async () => {
		const perRequest = await Axios.get(`/generate-speech-to-text`, {
			headers: headers,
		});
		return perRequest;
	};

	getCallEmotion = async (id) => {
		const perRequest = await Axios.get(`/get-report?call_emotion=${id}`, {
			headers: headers,
		});
		return perRequest;
	};

	addComment = async (payload) => {
		const perRequest = await Axios.post('/add-comment', payload, {
			headers: headers,
		});
		return perRequest;
	};

	uplaodFiles = async (payload) => {
		const perRequest = await Axios.post('/s3gallery-upload', payload);
		return perRequest;
	};

	getCallCountByDuration = async () => {
		const perRequest = await Axios.post('/get-call-count-by-duration', {
			headers: headers,
		});
		return perRequest;
	};

	getCallCount = async () => {
		const perRequest = await Axios.post('/get-call-count', {
			headers: headers,
		});
		return perRequest;
	};
}
export default new indexService();