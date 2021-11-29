import { Card } from '@mui/material';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import LoginCard from '../../components/login/LoginCard';
import LoginForm from '../../components/login/LoginForm';
import Dashboard from '../dashboard/Dashboard';

function Login() {
	const adminUser = [
		{
			email: 'admin@admin.com',
			password: 'admin123',
		},
		{ email: 'user@admin.com', password: 'user123' },
		{ email: 'userTwo@admin.com', password: 'user1234' },
	];

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
			setError('details donot match');
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
		</div>
	);
}

export default Login;
