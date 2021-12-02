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
			<Card className='login-form-card'>
				<form onSubmit={submitHandler}>
					<div>
						<div className='login-form-header'>
							<Typography variant='h5'>Log In</Typography>
						</div>
						<div className='login-form-elements'>
							{error !== '' ? <div>{error}</div> : ''}
							<label>Email:</label>
							<input
								type='text'
								name='email'
								id='email'
								onChange={(e) =>
									setDetails({ ...details, email: e.target.value })
								}
								value={details.email}
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
							/>
						</div>
						<div>
							<Button
								type='submit'
								variant='contained'
								onSubmit={submitHandler}
							>
								Log In
							</Button>
						</div>
					</div>
				</form>
			</Card>
		</div>
	);
}

export default LoginForm;