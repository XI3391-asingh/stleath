import * as actionTypes from '../type';

const initialState = {
	settingconfiguration: {},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_SETTING_CONFIGURATION:
			return { ...state, settingconfiguration: action.payload };
		case actionTypes.ADD_SETTING_CONFIGURATION:
			return { ...state, settingconfiguration: action.payload };
		case actionTypes.ADD_NEW_EVALUATION_QUESTION:
			return { ...state, newEvaluationQuestion: action.payload };
		case actionTypes.GET_EVALUATION_QUESTIONS_OF_MANAGER:
			return { ...state, evaluationQuestionsOfManager: action.payload };
		case actionTypes.GET_EVALUATION_QUESTIONS_OF_QA:
			return { ...state, evaluationQuestionsOfQA: action.payload };
		case actionTypes.DELETE_EVALUATION_QUESTION_BY_ID:
			return { ...state,deleteEvaluationQuestion: action.payload };
		default:
			return state;
	}
};

export default reducer;
