import {
	Button,
	Card,
	CardHeader,
	Divider,
	Pagination,
	Stack,
	Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import SingleNotification from '../../components/notification/SingleNotification';
import PageNumber from '../../components/shared-components/pagination/PageNumber';

import './styles.css';

function Notifications() {
	const [notificationData, setNotificationData] = React.useState([]);

	useEffect(() => {
		getNotification();
	}, []);

	const getNotification = () => {
		fetch(
			'http://13.127.135.117:8080/api/get-notification?recipient_id=' +
				localStorage.getItem('id'),
			{
				method: 'GET',
			}
		)
			.then((response) => response.json())
			.then(async (result) => {
				if (result?.code === 200) {
					let data = result?.data;
					setNotificationData(data);
				}
			})
			.catch((error) => console.log('error', error));
	};

	const handleMarkReadNotification = () => {
		var myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		var raw = JSON.stringify({
			recipient_id: localStorage.getItem('id'),
		});
		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
		};
		fetch(
			'http://13.127.135.117:8080/api/mark-read-notification',
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				if (result?.code === 200) {
					getNotification();
				}
			})
			.catch((error) => console.log('error', error));
	};

	return (
		<div className='notifications-page-layout'>
			<Card className='notifications-page-card'>
				<div className='notifications-page-card-header'>
					<Typography variant='h5'>Notifications</Typography>
					<Button onClick={handleMarkReadNotification}>
						<Typography variant='button'>Mark All As Read</Typography>
					</Button>
				</div>
				{/* <Divider /> */}
				<div>
					{notificationData?.map((data, index) => {
						return (
							<SingleNotification
								key={index}
								message={data?.message}
								call_id={data?.call_id}
								date={data?.createdAt}
								sender_id={data?.sender_id}
							/>
						);
					})}
				</div>
				<div>
					<Stack spacing={2}>
						<Pagination count={2} />
					</Stack>
				</div>
			</Card>
		</div>
	);
}

export default Notifications;
