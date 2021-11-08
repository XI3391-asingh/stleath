import React from 'react';

import moment from 'moment';

import { Avatar, Paper, Typography } from '@mui/material';

import './styles.css';

function ToMessage() {
	let dateTime = moment().format('lll');
	return (
		<div className='to-message-layout'>
			<Typography variant='caption' className='from-message-time'>
				{dateTime}
			</Typography>
			<Paper elevation={3} className='from-message-paper-format'>
				<Typography variant='subtitle2' className='to-message-text'>
					Comment One given on 28th of October, 2021 at 11:05
				</Typography>
			</Paper>
			<Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
		</div>
	);
}

export default ToMessage;
