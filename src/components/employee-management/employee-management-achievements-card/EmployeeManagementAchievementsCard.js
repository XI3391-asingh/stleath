import { Card, Divider, Typography } from '@mui/material';
import React from 'react';
import EmployeeManagementAchievements from '../employee-management-achievements/EmployeeManagementAchievements';

import './styles.css';

function EmployeeManagementAchievementsCard() {
	return (
		<Card className='employee-management-suggestions-card-layout'>
			<Typography variant='h6' className='employee-management-header'>
				Achievements
			</Typography>
			<Divider />
			<EmployeeManagementAchievements />
			{/* <Divider /> */}
		</Card>
	);
}

export default EmployeeManagementAchievementsCard;
