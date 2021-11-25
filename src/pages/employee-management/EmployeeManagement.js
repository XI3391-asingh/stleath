import React from 'react';

import { Card, Typography } from '@mui/material';

import './styles.css';
import MyTeamCard from '../../components/employee-management/my-team-card/MyTeamCard';
import PerformanceCard from '../../components/employee-management/performance-card/PerformanceCard';
import EmployeeFeedbackCard from '../../components/employee-management/employee-feedback-card/EmployeeFeedbackCard';
import EmployeeManagementAchievementsCard from '../../components/employee-management/employee-management-achievements-card/EmployeeManagementAchievementsCard';

function EmployeeManagement() {
	return (
		<div className='employee-management-body-layout'>
			<Card className='employee-management-card-layout'>
				{/* <Card className='employee-management-filters-card-layout'>
					<Typography variant='h6'>Filters</Typography>
				</Card> */}
				<EmployeeManagementAchievementsCard />
				<Card className='employee-management-main-card-layout'>
					<MyTeamCard />
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
