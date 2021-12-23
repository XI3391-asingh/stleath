import * as actionTypes from '../type';

const initialState = {
	comments: {},
	calls: {
		total: 0,
		filter: 0,
		data: [],
	},
	visualizer: {},
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
		default:
			return state;
	}
};

export default reducer;
