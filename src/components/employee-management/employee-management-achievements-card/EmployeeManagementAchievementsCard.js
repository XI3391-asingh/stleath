import { Divider, Typography } from '@mui/material';
import React from 'react';
import EmployeeManagementAchievements from '../employee-management-achievements/EmployeeManagementAchievements';

import './styles.css';

function EmployeeManagementAchievementsCard() {
	return (
		<div className='employee-management-suggestions-layout'>
			<Typography variant='h6' className='employee-management-header'>
				Achievements
			</Typography>
			<Divider />
			<EmployeeManagementAchievements />
		</div>
	);
}

export default EmployeeManagementAchievementsCard;
