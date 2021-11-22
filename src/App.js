import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import Navbar from './components/nav-bar/Navbar';

import Calls from './pages/calls/Calls';
import CallVisualizer from './pages/calls/CallVisualizer';
import Dashboard from './pages/dashboard/Dashboard';
import EmployeeManagement from './pages/employee-management/EmployeeManagement';
import Messages from './pages/messages/Messages';
import Notifications from './pages/notifications/Notifications';

function App() {
	return (
		<Router>
			<div className='App'>
				<div>
					<Navbar />
				</div>
				<Switch>
					<Route exact path='/'>
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
				</Switch>
				{/* <Dashboard />
				<Calls />
				<CallVisualizer /> */}
			</div>
		</Router>
	);
}

export default App;
