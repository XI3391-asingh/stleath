import {
	Button,
	Card,
	CardHeader,
	Divider,
	Pagination,
	Stack,
	Typography,
} from '@mui/material';
import React from 'react';
import SingleNotification from '../../components/notification/SingleNotification';
import PageNumber from '../../components/shared-components/pagination/PageNumber';

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
				<div>
					<Stack spacing={2}>
						<Pagination count={5} />
					</Stack>
				</div>
			</Card>
		</div>
	);
}

export default Notifications;
