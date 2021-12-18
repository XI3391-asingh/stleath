import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../../components/login/LoginForm';
import { useDispatch } from 'react-redux';
import { LOGIN_USER } from '../../store/type';
import authService from '../../service/auth';

function Login() {
	let history = useHistory();
	const dispatch = useDispatch();
	const [error, setError] = useState('');

	//   const adminUser = [
	//     {
	//       email: "rajat.bansal@xebia.com",
	//       password: "Rajat Bansal",
	//       id: 1,
	//       username: "Rajat Bansal",
	//     },
	//     {
	//       email: "wasi.muka@xebia.com",
	//       password: "Wasi Muka",
	//       id: 2,
	//       username: "Wasi Muka",
	//     },
	//     {
	//       email: "jayanth.valluru@xebia.com",
	//       password: "Jayanth Valluru",
	//       id: 3,
	//       username: "Jayant Raja",
	//     },
	//   ];

	const Login = (details) => {
		authService
			.login({
				email: details.email,
				password: details.password,
			})
			.then((resp) => {
				if (resp.isSuccess) {
					dispatch({ type: LOGIN_USER, payload: resp?.data });
					setError('');
					localStorage.setItem('access_token', resp?.data?.access_token);
					//   localStorage.setItem("user", JSON.stringify(resp?.data?.user));
					localStorage.setItem('username', resp?.data?.user?.user_name);
					localStorage.setItem('id', resp?.data?.user?.id);
					localStorage.setItem(
						'userable_type',
						resp?.data?.user?.userable_type
					);
					history.replace('/dashboard');
				}
			})
			.catch((error) => {
				setError(
					<div style={{ color: `red` }}>Invalid Email or Password!!</div>
				);
			});
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
