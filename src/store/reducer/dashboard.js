import * as actionTypes from '../type';

const initialState = {
	emotions: {
		Disappointed: 0,
		Happy: 0,
		Surprise: 0,
		'Angry/fear': 0,
	},
	sentiment: {
		'Negative Feedback': 0,
		'Neutral Feedback': 0,
		'Positive Feedback': 0,
	},
	isAnalysisDone: false,
	callcountbyduration: [],
	callcount: [],
	callcountbyholdviolation: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_COUNT_CALL_EMOTION:
			return { ...state, emotions: action.payload };
		case actionTypes.GET_CALL_REPORT:
			return { ...state, sentiment: action.payload };
		case actionTypes.GET_GENERATE_SPEECH_REPORT:
			return { ...state, isAnalysisDone: action.payload };
		case actionTypes.GET_CALL_COUNT_BY_DURATION:
			return { ...state, callcountbyduration: action.payload };
		case actionTypes.GET_CALL_COUNT:
			return { ...state, callcount: action.payload };
		case actionTypes.GET_CALL_COUNT_BY_HOLD_VIOLATION:
			return { ...state, callcountbyholdviolation: action.payload };
		default:
			return state;
	}
};

export default reducer;
