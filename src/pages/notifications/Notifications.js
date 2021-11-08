import { Button, Card, CardHeader, Divider, Typography } from '@mui/material';
import React from 'react';
import SingleNotification from '../../components/notification/SingleNotification';

import './styles.css';

function Notifications() {
	return (
		<div className='notifications-page-layout'>
			<Card className='notifications-page-card'>
				<div className='notifications-page-card-header'>
					<Typography variant='h5'>Notifications</Typography>
					<Button>
						<Typography variant='button'>Mark All As Read</Typography>
					</Button>
				</div>
				{/* <Divider /> */}
				<div>
					<SingleNotification />
					<SingleNotification />
					<SingleNotification />
				</div>
			</Card>
		</div>
	);
}

export default Notifications;
