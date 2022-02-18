import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/nav-bar/Navbar';

import Calls from './pages/calls/Calls';
import CallVisualizer from './pages/calls/CallVisualizer';
import Dashboard from './pages/dashboard/Dashboard';
import EmployeeManagement from './pages/employee-management/EmployeeManagement';
import Login from './pages/login/Login';
import Messages from './pages/messages/Messages';
import Notifications from './pages/notifications/Notifications';
import ConfigSettings from './pages/settings/ConfigSettings';
import UserSettings from './pages/settings/UserSettings';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrganizationSettings from './pages/settings/OrganizationSettings';
import UserManagementSettings from './pages/settings/UserManagementSettings';
import RolesAndPermissonsSettings from './pages/settings/RolesAndPermissonsSettings';
toast.configure()

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/'>
						<Login />
					</Route>
					<div>
						<Navbar />
						<Route path='/dashboard'>
							<Dashboard />
						</Route>
						<Route path='/calls'>
							<Calls />
						</Route>
						<Route path='/employee-management'>
							<EmployeeManagement />
						</Route>
						<Route path='/call-visualizer'>
							<CallVisualizer />
						</Route>
						<Route path='/messages'>
							<Messages />
						</Route>
						<Route path='/notifications'>
							<Notifications />
						</Route>
						<Route path='/user-settings'>
							<UserSettings />
						</Route>
						<Route path='/config-settings'>
							<ConfigSettings />
						</Route>
						<Route path='/user-management-settings'>
							<UserManagementSettings />
						</Route>
						<Route path='/organization-settings'>
							<OrganizationSettings />
						</Route>
						<Route path='/roles-and-permissons-settings'>
							<RolesAndPermissonsSettings />
						</Route>
					</div>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
