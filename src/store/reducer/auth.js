import * as actionTypes from '../type';

const initialState = {
	auth: {},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOGIN_USER:
			return { ...state, auth: action.payload };
		default:
			return state;
	}
};

export default reducer;
