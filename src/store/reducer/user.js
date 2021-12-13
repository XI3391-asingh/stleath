import * as actionTypes from '../type';

const initialState = {
    performance: {
        rating: 0,
        percentage: 0
    },
    selectedUser: null,
    relodeFeedback: false,

}

const reducer = (state = initialState, action) =>{
    switch(action.type){
       
        case actionTypes.SET_PERFORMANCE:
            return {...state, performance: action.payload};
        case actionTypes.SET_USER:
            return {...state, selectedUser: action.payload};
        case actionTypes.SET_RELOAD_FEEDBACK:
            return {...state, relodeFeedback: action.payload};
        default: 
            return state;

    }
}

export default reducer;