import React from 'react';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Divider, Typography } from '@mui/material';

import moment from 'moment';

import './styles.css';

function SingleNotification() {
	let dateTime = moment().format('lll');
	return (
		<div className='single-notification-layout'>
			<div className='single-notification-format'>
				<div className='single-notification-unread-container'>
					<FiberManualRecordIcon className='single-notification-unread-icon' />
				</div>
				<div className='single-notification-message-container'>
					<Typography variant='body2' className='single-notification-message'>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s
					</Typography>
				</div>
				<div className='single-notification-timestamp-container'>
					<Typography
						variant='caption'
						className='single-notification-timestamp'
					>
						{dateTime}
					</Typography>
				</div>
			</div>
			<Divider className='single-notification-divider' />
		</div>
	);
}

export default SingleNotification;
