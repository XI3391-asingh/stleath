import React, { useState } from 'react';

import { Button, Card, Typography } from '@mui/material';

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
								Log In
							</Typography>
						</div>
						<div className='login-form-elements'>
							<label>Email:</label>
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
							<label>Password:</label>
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
							<Button
								type='submit'
								variant='contained'
								onSubmit={submitHandler}
								className='login-form-submit-button'
							>
								Log In
							</Button>
						</div>
						{/* {error !== '' ? <div>{error}</div> : ''} */}
					</div>
				</form>
			</Card>
		</div>
	);
}

export default LoginForm;
