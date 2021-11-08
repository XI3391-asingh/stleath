import { Badge, Divider, Typography } from '@mui/material';
import React from 'react';

import './styles.css';

function MessageList() {
	return (
		<div className='message-list-layout'>
			<div className='message-list-details'>
				<Typography variant='h6' className='message-list-name'>
					Rajat Bansal
				</Typography>
				<Typography variant='caption' className='messages-list-unread-messages'>
					4
				</Typography>
			</div>
			<Typography variant='body2' className='message-list-recent-message'>
				Comment One given on 28th of October, 2021 at 11:05 AM
			</Typography>
			<Divider className='message-list-divider' />
		</div>
	);
}

export default MessageList;
