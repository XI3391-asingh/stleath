import * as actionTypes from '../type';

const initialState = {
	fromDate: new Date(2010),
	toDate: new Date(),
	agentName: 'All',
	isCallOpenedWithCompliance: '',
	isCallClosedWithCompliance: '',
	isTotalCompliance: '',
	isServiceIssue: '',
	isProductIssue: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_FROM_DATE:
			return { ...state, fromDate: action.payload };
		case actionTypes.SET_TO_DATE:
			return { ...state, toDate: action.payload };
		case actionTypes.SET_AGENT_NAME:
			return { ...state, agentName: action.payload };
		case actionTypes.SET_IS_CALL_OPENED_WITH_COMPLIANCE:
			return { ...state, isCallOpenedWithCompliance: action.payload };
		case actionTypes.SET_IS_CALL_CLOSED_WITH_COMPLIANCE:
			return { ...state, isCallClosedWithCompliance: action.payload };
		case actionTypes.SET_IS_TOTAL_COMPLIANCE:
			return { ...state, isTotalCompliance: action.payload };
		case actionTypes.SET_IS_SERVICE_ISSUE:
			return { ...state, isServiceIssue: action.payload };
		case actionTypes.SET_IS_PRODUCT_ISSUE:
			return { ...state, isProductIssue: action.payload };
		case actionTypes.CLEAR_FILTERS:
			return {
				...state,
				fromDate: new Date(2010),
				toDate: new Date(),
				agentName: 'All',
				isCallOpenedWithCompliance: '',
				isCallClosedWithCompliance: '',
				isTotalCompliance: '',
				isServiceIssue: '',
				isProductIssue: '',
			};
		default:
			return state;
	}
};

export default reducer;
