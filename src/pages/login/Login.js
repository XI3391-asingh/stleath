import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import LoginForm from '../../components/login/LoginForm';

function Login() {
	let history = useHistory();
	const adminUser = [
		{
			email: 'rajat.bansal@xebia.com',
			password: 'Rajat Bansal',
			id: 1,
			username: 'Rajat Bansal',
		},
		{
			email: 'wasi.muka@xebia.com',
			password: 'Wasi Muka',
			id: 2,
			username: 'Wasi Muka',
		},
		{
			email: 'jayanth.valluru@xebia.com',
			password: 'Jayanth Valluru',
			id: 3,
			username: 'Jayant Raja',
		},
	];

	const [error, setError] = useState('');

	const Login = (details) => {
		let findUser = adminUser.find((e) => e.email === details.email);
		let notUser = adminUser.find((e) => e.email !== details.email);
		if (
			details.email == findUser?.email &&
			details.password == findUser?.password
		) {
			setError('');
			localStorage.setItem('email', findUser?.email);
			localStorage.setItem('id', findUser?.id);
			localStorage.setItem('username', findUser?.username);
			localStorage.setItem('recipient_id', notUser?.username);
			localStorage.setItem('recipient_name', notUser?.username);

			history.replace('/dashboard');
		} else {
			setError(<div style={{ color: `red` }}>Invalid Email or Password!!</div>);
		}
	};

	return (
		<div
			style={{
				display: 'flow-root',
				flexGrow: '1',
				backgroundColor: '#F3EBF6',
				height: '100vh',
			}}
		>
			<LoginForm Login={Login} error={error} />
		</div>
	);
}

export default Login;
