import { createStore, combineReducers, compose } from 'redux';
import user from './reducer/user';

const rootReducer = combineReducers({ user: user });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;