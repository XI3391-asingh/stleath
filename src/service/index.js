import Axios from '../http/Axios';

const headers = {
	'Content-Type': 'application/json',
};

class indexService {
	getEmotionReport = async (payload) => {
		const perRequest = await Axios.post(`/get-count-call-emotions`, payload, {
			headers: headers,
		});
		return perRequest;
	};

	getReport = async (payload) => {
		const perRequest = await Axios.post(`/get-report`, payload, {
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

	getCallCountByDuration = async (payload) => {
		const perRequest = await Axios.post(
			'/get-call-count-by-duration',
			payload,
			{
				headers: headers,
			}
		);
		return perRequest;
	};

	getCallCount = async () => {
		const perRequest = await Axios.post('/get-call-count', {
			headers: headers,
		});
		return perRequest;
	};

	getCallCountByHoldViolation = async () => {
		const perRequest = await Axios.post('/get-call-count-by-hold-violation', {
			headers: headers,
		});
		return perRequest;
	};

	getCallCountCompliance = async () => {
		const perRequest = await Axios.post('/get-call-count-compliance', {
			headers: headers,
		});
		return perRequest;
	};

	getCallCountForCards = async (payload) => {
		const perRequest = await Axios.post('/get-call-count-for-cards', payload, {
			headers: headers,
		});
		return perRequest;
	};

	getCallCountForVoiceEnergyDeviation = async () => {
		const perRequest = await Axios.post(
			'/get-call-count-for-voice-energy-deviation',
			{
				headers: headers,
			}
		);
		return perRequest;
	};

	getSettingConfiguration = async () => {
		const perRequest = await Axios.get(`/get-configuration`, {
			headers: headers,
		});
		return perRequest;
	};

	addSettingConfiguration = async (payload) => {
		const perRequest = await Axios.post('/set-configuration', payload);
		return perRequest;
	};

	getNegativeCallCount = async () => {
		const perRequest = await Axios.post('/get-negative-call-count', {
			agent_name: localStorage.getItem('username'),
		});
		return perRequest;
	};

	getAgentAchievement = async (userName) => {
		const perRequest = await Axios.post('/agent-achievement', {
			agent_name: userName,
		});
		return perRequest;
	};

	getQuestions = async (type) => {
		const perRequest = await Axios.post('/get-questions', {
			type: type,
		});
		return perRequest;
	};

	getAnswers = async (id) => {
		const perRequest = await Axios.post('/get-answers', {
			call_id: id,
		});
		return perRequest;
	};

	saveAnswers = async (payload) => {
		const perRequest = await Axios.post('/save-answers', payload);
		return perRequest;
	};
}

export default new indexService();
