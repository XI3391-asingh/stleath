import React from 'react';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Divider, Typography } from '@mui/material';

import moment from 'moment';

import './styles.css';

function SingleNotification({ message, call_id, date, sender_id }) {
	//   let dateTime = moment().format("lll");
	return (
		<div className='single-notification-layout'>
			<div className='single-notification-format'>
				<div className='single-notification-unread-container'>
					<FiberManualRecordIcon className='single-notification-unread-icon' />
				</div>
				<div className='single-notification-message-source'>
					<Typography variant='body2'></Typography>
					<Typography variant='body2'>{sender_id}</Typography>
				</div>
				<div className='single-notification-message-container'>
					<Typography variant='body2' className='single-notification-message'>
						{message}
						{/* : CallID - {call_id} */}
					</Typography>
				</div>
				<div className='single-notification-timestamp-container'>
					<Typography
						variant='caption'
						className='single-notification-timestamp'
					>
						{moment(date).format('lll')}
					</Typography>
				</div>
			</div>
			<Divider className='single-notification-divider' />
		</div>
	);
}

export default SingleNotification;
