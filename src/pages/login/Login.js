import { Card } from '@mui/material';
import React, { useState } from 'react';
import LoginCard from '../../components/login/LoginCard';
import LoginForm from '../../components/login/LoginForm';
import Dashboard from '../dashboard/Dashboard';

function Login() {
	const adminUser = {
		email: 'admin@admin.com',
		password: 'admin123',
	};

	const [user, setUser] = useState({ name: '', email: '', password: '' });
	const [error, setError] = useState('');

	const Login = (details) => {
		console.log(details);

		if (
			details.email == adminUser.email &&
			details.password == adminUser.password
		) {
			console.log('logged In');
			setUser({
				email: details.email,
			});
		} else {
			console.log('details donot match');
		}
	};

	return (
		<div
			style={{
				display: 'flow-root',
				flexGrow: '1',
			}}
		>
			{user.email != '' ? (
				<Dashboard />
			) : (
				<LoginForm Login={Login} error={error} />
			)}
			{/* <LoginCard /> */}
		</div>
	);
}

export default Login;
