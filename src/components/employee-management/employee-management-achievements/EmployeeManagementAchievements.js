import { Card, Divider, Typography } from '@mui/material';
import React from 'react';
import CelebrationIcon from '@mui/icons-material/Celebration';

// import AchievementsData from '../../../data/employee-management/achievements.json';
import AchievementsData from '../../../data/achievements.json';
import moment from 'moment';

import './styles.css';

function EmployeeManagementAchievements() {
	let dateTime = moment().format('lll');
	return (
		<div>
			{AchievementsData.map((achievements, index) => {
				return (
					<Card className='employee-achievements-layout'>
						<Divider />
						<div className='employee-achievements-header-layout'>
							<CelebrationIcon className='employee-achievements-icon' />
						</div>
						<div>
							<Typography
								variant='subtitle2'
								className='employee-achievements-header'
							>
								{achievements.title}
							</Typography>
							<Typography
								variant='caption'
								className='employee-achievements-caption'
							>
								{dateTime}
							</Typography>
						</div>
					</Card>
				);
			})}
		</div>
	);
}

export default EmployeeManagementAchievements;
