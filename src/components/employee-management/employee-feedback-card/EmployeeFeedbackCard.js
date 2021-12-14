import React, { useEffect, useState } from 'react';

import { Card, Typography } from '@mui/material';

import EmployeeManagementFeedback from '../employee-management-feedback/EmployeeManagementFeedback';

import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import Axios from '../../../http/Axios';
import { SET_RELOAD_FEEDBACK } from '../../../store/type';

function EmployeeFeedbackCard() {
	const dispatch = useDispatch();
	const { relodeFeedback, selectedUser } = useSelector((store) => store.user);
	const [feedbacks, setFeedback] = useState([]);
	useEffect(async () => {
		if (selectedUser?.name || localStorage.getItem('username')) {
			(async () => {
				const res = await Axios.post('/get-feedback', {
					recipient_id: selectedUser?.name || localStorage.getItem('username'),
				});
				if (res.isSuccess) {
					dispatch({type: SET_RELOAD_FEEDBACK, payload: false});
					setFeedback(res.data);
				}
			})();
		}
	}, [relodeFeedback, selectedUser, localStorage.getItem('username')]);
	return (
		<div>
			<div className='employee-feedback-card-title'>
				<Typography variant='subtitle1'>Continuous Feedback:</Typography>
			</div>
			{feedbacks?.length ? (
				feedbacks.map((feedback) => (
					<EmployeeManagementFeedback {...feedback} />
				))
			) : (
				<div className='employee-feedback-card-title'>
					<Typography variant='subtitle1'>No Feedback Yet</Typography>
				</div>
			)}
			{/* <EmployeeManagementFeedback />
			<EmployeeManagementFeedback />
			<EmployeeManagementFeedback /> */}
		</div>
	);
}

export default EmployeeFeedbackCard;
