import React, { useState } from 'react';

import { Card, Typography } from '@mui/material';

import './styles.css';

function LoginForm({ Login, error }) {
	const [details, setDetails] = useState({ email: '', password: '' });

	const submitHandler = (e) => {
		e.preventDefault();

		Login(details);
	};

	return (
		<div className='login-form-card-layout'>
			<Typography variant='h3' className='login-form-heading'>
				Stealth
			</Typography>
			<Card className='login-form-card'>
				<form onSubmit={submitHandler}>
					<div>
						<div className='login-form-header'>
							<Typography variant='h5' className='login-form-card-title'>
								LogIn
							</Typography>
						</div>
						<div className='login-form-elements'>
							<label className="login-for-label">Email</label>
							<input
								type='text'
								name='email'
								id='email'
								onChange={(e) =>
									setDetails({ ...details, email: e.target.value })
								}
								value={details.email}
								className='login-form-input'
							/>
						</div>
						<div className='login-form-elements'>
							<label className="login-for-label">Password</label>
							<input
								type='password'
								name='password'
								id='password'
								onChange={(e) =>
									setDetails({ ...details, password: e.target.value })
								}
								value={details.password}
								className='login-form-input'
							/>
						</div>
						{error !== '' ? <div>{error}</div> : ''}
						<div>
							<button
								type='submit'
								variant='contained'
								onSubmit={submitHandler}
								className='login-form-submit-button'
							>
								Log In
							</button>
						</div>
						<div className="forgot-password"><label className="login-forgot-password"><a>Forgot Password?</a></label></div>
						{/* {error !== '' ? <div>{error}</div> : ''} */}
					</div>
				</form>
			</Card>
		</div>
	);
}

export default LoginForm;
