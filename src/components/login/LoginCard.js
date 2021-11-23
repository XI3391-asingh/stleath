import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button, Grid, Paper, TextField, Typography } from '@mui/material';

import './styles.css';

function LoginCard() {
	return (
		<div>
			<Grid>
				<Paper elevation={10} className='login-paper-styles'>
					<div className='login-paper-header'>
						<Typography variant='h5'>Sign In</Typography>
					</div>

					<div className='login-paper-fields'>
						<Typography variant='subtitle2' className='login-paper-subtitle'>
							Username:
						</Typography>
						<TextField
							label='username'
							placeholder='Username'
							fullWidth
							required
							variant='standard'
							className='login-paper-textfield'
						/>
					</div>
					<div>
						<Typography variant='subtitle2' className='login-paper-subtitle'>
							Password:
						</Typography>
						<TextField
							label='password'
							placeholder='Password'
							fullWidth
							required
							variant='standard'
							type='password'
							className='login-paper-textfield'
						/>
					</div>
					{/* <FormControlLabel
						control={
							<Checkbox
								// checked={gilad}
								// onChange={handleChange}
								name='checked'
								// className='login-paper-checkbox'
								// style={{ textAlign: 'left' }}
							/>
						}
						label='Remember Me'
					/> */}
					<NavLink to='/'>
						<Button
							type='submit'
							color='primary'
							variant='contained'
							// fullWidth
							className='login-paper-button'
						>
							Sign In
						</Button>
					</NavLink>
					{/* </div>
						);
					})} */}
				</Paper>
			</Grid>
		</div>
	);
}

export default LoginCard;
