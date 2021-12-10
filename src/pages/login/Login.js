import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import LoginForm from '../../components/login/LoginForm';

function Login() {
	let history = useHistory();
	const adminUser = [
		{
			email: 'admin@admin.com',
			password: 'admin123',
			id: 1,
			username: 'admin',
		},
		{ email: 'user@admin.com', password: 'user123', id: 2, username: 'user1' },
		{
			email: 'userTwo@admin.com',
			password: 'user1234',
			id: 3,
			username: 'user2',
		},
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
			localStorage.setItem(
				'id',
				adminUser.find((e) => e.email === details.email)?.id
			);
			localStorage.setItem(
				'recipient_id',
				adminUser.find((e) => e.email !== details.email)?.id
			);
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
