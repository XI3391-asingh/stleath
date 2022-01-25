import { Divider, Typography } from '@mui/material';
import React from 'react';
import CelebrationIcon from '@mui/icons-material/Celebration';

import AchievementsData from '../../../data/achievements.json';
import moment from 'moment';

import './styles.css';

function EmployeeManagementAchievements() {
	let dateTime = moment().format('lll');
	return (
		<div>
			{AchievementsData.map((achievements, index) => {
				return (
					<div className='employee-achievements-layout'>
						<div className='employee-achievements'>
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
						</div>
						<Divider className='employee-achievements-divider' />
					</div>
				);
			})}
		</div>
	);
}

export default EmployeeManagementAchievements;
