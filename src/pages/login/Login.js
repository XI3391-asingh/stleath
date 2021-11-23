import { Card } from '@mui/material';
import React from 'react';
import LoginCard from '../../components/login/LoginCard';

function Login() {
	return (
		<div
			style={{
				display: 'flow-root',
				flexGrow: '1',
				// textAlign: 'center'
			}}
		>
			<LoginCard />
			{/* <Card
				style={{
					margin: '4rem 25rem',
					padding: '1rem 0 1rem 1rem',
					width: '40%',
					height: '25rem',
				}}
			></Card> */}
		</div>
	);
}

export default Login;
