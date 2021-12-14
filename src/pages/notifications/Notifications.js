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
import { useDispatch, useSelector } from 'react-redux';
import { GET_NOTIFICATION } from '../../store/type';
import notificationService from '../../service/notifications';
import './styles.css';

function Notifications() {
	const dispatch = useDispatch();
	//   const [notificationData, setNotificationData] = React.useState([]);
	const { notification } = useSelector((store) => store.notification);

	// useEffect(() => {
	// 	getNotification();
	// }, []);

	const getNotification = () => {
		notificationService
			.getNotification(localStorage.getItem('id'))
			.then((resp) => {
				if (resp.isSuccess) {
					dispatch({ type: GET_NOTIFICATION, payload: resp.data });
				}
			});
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
					{notification?.length > 0 &&
						notification?.map((data, index) => {
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
