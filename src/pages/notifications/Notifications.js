import {
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
	const { notification } = useSelector((store) => store.notification);

	const getNotification = () => {
		notificationService
			.getNotification(localStorage.getItem('username'))
			.then((resp) => {
				if (resp.isSuccess) {
					dispatch({ type: GET_NOTIFICATION, payload: resp?.data?.reverse() });
				}
			});
	};

	const handleMarkReadNotification = () => {
		notificationService.markReadNotification().then((resp) => {
			if (resp.isSuccess) {
				getNotification();
			}
		});
	};

	return (
		<div className='notifications-page-layout'>
			<Card className='notifications-page-card'>
				<div className='notifications-page-card-header'>
					<Typography variant='h5'>Notifications</Typography>
					<button
						onClick={handleMarkReadNotification}
						className='notifications-page-button'
					>
						Mark All As Read
					</button>
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
