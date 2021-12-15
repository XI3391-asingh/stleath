import React, { useEffect, useState } from 'react';

import { Card, Typography } from '@mui/material';

import EmployeeManagementFeedback from '../employee-management-feedback/EmployeeManagementFeedback';

import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import Axios from '../../../http/Axios';
import { SET_RELOAD_FEEDBACK } from '../../../store/type';
import TeamData from '../../../data/team.json';

function EmployeeFeedbackCard() {
	const dispatch = useDispatch();
	const { relodeFeedback, selectedUser } = useSelector((store) => store.user);
	const [feedbacks, setFeedback] = useState([]);
	const [timer, setTimer] = useState(0);

	useEffect(async () => {
		let interval = '';
		getFeedback();
		if (localStorage.getItem('email') !== 'rajat.bansal@xebia.com') {
			const feedtimer = setInterval(() => {
				getFeedback();
			}, 10000);
			setTimer(feedtimer);
		}
		return () => clearInterval(interval);

		// if (selectedUser?.name || localStorage.getItem("username")) {
		//   (async () => {
		//     const res = await Axios.post("/get-feedback", {
		//       recipient_id: selectedUser?.name || localStorage.getItem("username"),
		//     });
		//     if (res.isSuccess) {
		//       dispatch({ type: SET_RELOAD_FEEDBACK, payload: false });
		//       setFeedback(res.data);
		//     }
		//   })();
		// }
	}, [selectedUser]);
	//   }, [relodeFeedback, selectedUser, localStorage.getItem("username")]);
	useEffect(() => {
		return () => {
			clearInterval(timer);
		};
	}, [timer]);

	useEffect(async () => {
		if (relodeFeedback) getFeedback();
	}, [relodeFeedback]);

	function getFeedback() {
		let userName = selectedUser
			? selectedUser?.name
			: localStorage.getItem('email') === 'rajat.bansal@xebia.com'
			? TeamData[0].name
			: localStorage.getItem('username');
		if (userName) {
			(async () => {
				const res = await Axios.post('/get-feedback', {
					recipient_id: userName,
				});
				if (res.isSuccess) {
					dispatch({ type: SET_RELOAD_FEEDBACK, payload: false });
					setFeedback(res.data);
				}
			})();
		}
	}
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
				<div className='employee-feedback-card-subtitle'>
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
