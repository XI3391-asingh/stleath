import * as actionTypes from '../type';

const initialState = {
	fromDate: new Date(2010),
	toDate: new Date(),
	agentName: null,
	isCallOpenedWithCompliance: null,
	isCallClosedWithCompliance: null,
	isTotalCompliance: null,
	isServiceIssue: null,
	isProductIssue: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_FILTER:
			return { ...state, ...action.payload }
		case actionTypes.CLEAR_FILTERS:
			return initialState;
		default:
			return state;
	}
};

export default reducer;
