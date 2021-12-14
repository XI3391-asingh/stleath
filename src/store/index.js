import { createStore, combineReducers, compose } from 'redux';
import user from './reducer/user';
import notification from './reducer/notification';

const rootReducer = combineReducers({ user: user, notification: notification });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
