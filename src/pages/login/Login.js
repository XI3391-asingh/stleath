import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import LoginForm from '../../components/login/LoginForm';

function Login() {
	let history = useHistory();
	const adminUser = [
		{
			email: 'admin@admin.com',
			password: 'admin123',
		},
		{ email: 'user@admin.com', password: 'user123' },
		{ email: 'userTwo@admin.com', password: 'user1234' },
	];

	const [error, setError] = useState('');

	const Login = (details) => {
		if (
			details.email ==
				adminUser.find((e) => e.email === details.email)?.email &&
			details.password ==
				adminUser.find((e) => e.password === details.password)?.password
		) {
			setError('');
			localStorage.setItem('email', details.email);
			history.replace('/dashboard');
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
			<LoginForm Login={Login} error={error} />
		</div>
	);
}

export default Login;
