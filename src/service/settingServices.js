import Axios from '../http/Axios';

const headers = {
	'Content-Type': 'application/json',
};

class settingServices {

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

    addNewQuestion=async(payload)=>{
        const perRequest=await Axios.post('add-question',payload);
        return perRequest;
    }

    getEvaluationQuestions=async(payload)=>{
        const perRequest=await Axios.post('get-questions',payload);
        return perRequest;
    }
	deleteEvaluationQuestion=async(payload)=>{
        const perRequest=await Axios.delete(`question/${payload}`);
        return perRequest;
    }
	
}

export default new settingServices();
