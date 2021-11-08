import { Paper, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import React from 'react';
// import SingleComment from './SingleComment';
import moment from 'moment';

import './styles.css';

function FromMessage() {
	let dateTime = moment().format('lll');
	return (
		<div className='from-message-layout'>
			<Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
			<Paper elevation={3} className='from-message-paper-format'>
				<Typography variant='subtitle2' className='from-message-text'>
					Comment One given on 28th of October, 2021 at 11:05 AM
				</Typography>
			</Paper>
			<Typography variant='caption' className='from-message-time'>
				{dateTime}
			</Typography>
		</div>
	);
}

export default FromMessage;
