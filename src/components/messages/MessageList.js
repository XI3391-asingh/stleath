import React from 'react';

import { Divider, Typography } from '@mui/material';

import MessageListData from '../../data/messageList.json';

import './styles.css';

function MessageList() {
	return (
		<div className='message-list-layout'>
			{MessageListData.map((messageListDetail, index) => {
				return (
					<div>
						<div className='message-list-details'>
							<Typography variant='h6' className='message-list-name'>
								{messageListDetail.name}
							</Typography>
							<Typography
								variant='caption'
								className='messages-list-unread-messages'
							>
								{messageListDetail.unreadMessageCount}
							</Typography>
						</div>
						<Typography variant='body2' className='message-list-recent-message'>
							{messageListDetail.message}
						</Typography>
						<Divider className='message-list-divider' />
					</div>
				);
			})}
		</div>
	);
}

export default MessageList;
