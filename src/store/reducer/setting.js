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
		default:
			return state;
	}
};

export default reducer;
