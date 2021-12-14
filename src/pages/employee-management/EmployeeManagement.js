import React, { useEffect, useState } from 'react';

import { Card, Typography } from '@mui/material';

import './styles.css';
import MyTeamCard from '../../components/employee-management/my-team-card/MyTeamCard';
import PerformanceCard from '../../components/employee-management/performance-card/PerformanceCard';
import EmployeeFeedbackCard from '../../components/employee-management/employee-feedback-card/EmployeeFeedbackCard';
import EmployeeManagementAchievementsCard from '../../components/employee-management/employee-management-achievements-card/EmployeeManagementAchievementsCard';
import Axios from '../../http/Axios';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { SET_PERFORMANCE, SET_RATING } from '../../store/type';

function EmployeeManagement() {
	const dispatch = useDispatch();
	const { selectedUser } = useSelector((store) => store.user);
	useEffect(() => {
		if (selectedUser || localStorage.getItem('username')) {
			(async () => {
				const perRes = await Axios.post('/get-performance', {
					agent_name: selectedUser?.name || localStorage.getItem('username'),
				});
				if (perRes.isSuccess) {
					dispatch({ type: SET_PERFORMANCE, payload: perRes.data });
				}
			})();
		}
	}, [selectedUser, localStorage.getItem('username')]);
	return (
		<div className='employee-management-body-layout'>
			<Card className='employee-management-card-layout'>
				{/* <Card className='employee-management-filters-card-layout'>
					<Typography variant='h6'>Filters</Typography>
				</Card> */}
				<EmployeeManagementAchievementsCard />
				<Card className='employee-management-main-card-layout'>
					{localStorage.getItem('email') === 'rajat.bansal@xebia.com' && (
						<MyTeamCard />
					)}
					<PerformanceCard />
					<div className='employee-management-main-bottom-cards'>
						<EmployeeFeedbackCard className='employee-management-main-feedback-card-layout' />
						{/* <EmployeeManagementAchievementsCard /> */}
					</div>
				</Card>
			</Card>
		</div>
	);
}

export default EmployeeManagement;
