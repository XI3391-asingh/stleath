import * as actionTypes from '../type';

const initialState = {
	comments: {},
	calls: {
		total: 0,
		filter: 0,
		data: [],
	},
	visualizer: {},
	agentachievement: [],
	// questions: [],
	// answers: [],
	questionsanswers: [],
	managerqueans: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_ALL_COMMENTS:
			return { ...state, comments: action.payload };
		case actionTypes.ADD_COMMENT:
			state?.comments?.call_comments.push(action.payload);
			return {
				...state,
			};
		case actionTypes.GET_ALL_CALLS:
			return { ...state, calls: action.payload };
		case actionTypes.GET_CALL_VISUALIZER:
			return { ...state, visualizer: action.payload };
		case actionTypes.CLEAR_CALL_VISUALIZER:
			return { ...state, visualizer: {} };
		case actionTypes.GET_AGENT_ACHIEVEMENT:
			return { ...state, agentachievement: action.payload };
		// case actionTypes.GET_QUESTIONS:
		//   return { ...state, questions: action.payload };
		// case actionTypes.GET_ANSWERS:
		//   return { ...state, answers: action.payload };
		case actionTypes.GET_QUESTIONS_ANSWERS:
			return { ...state, questionsanswers: action.payload };
		case actionTypes.GET_MANAGER_QUESTIONS_ANSWERS:
			return { ...state, managerqueans: action.payload };

		default:
			return state;
	}
};

export default reducer;
