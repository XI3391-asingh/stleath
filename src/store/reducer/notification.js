import * as actionTypes from '../type';

const initialState = {
	notification: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_NOTIFICATION:
			return { ...state, notification: action.payload };
		default:
			return state;
	}
};

export default reducer;
