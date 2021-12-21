import { createStore, combineReducers, compose } from 'redux';
import user from './reducer/user';
import notification from './reducer/notification';
import auth from './reducer/auth';
import dashboard from './reducer/dashboard';
import call from './reducer/call';

const rootReducer = combineReducers({
	user: user,
	notification: notification,
	auth: auth,
	dashboard: dashboard,
	call: call,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
