import { Divider, Typography } from '@mui/material';
import React from 'react';
import CelebrationIcon from '@mui/icons-material/Celebration';

import moment from 'moment';

import './styles.css';

function EmployeeManagementAchievements({ agentachievementdata }) {
	let dateTime = moment().format('lll');
	const achievementType = (type, datetime) => {
		let datemonth = moment(datetime)?.subtract(1, 'months')?.format('MMMM');
		switch (type) {
			case 'POSITIVE_CALL':
				return `100% Positive Calls in ${datemonth}`;
			case 'COMPLIANCE_CALL':
				return `100% Compliance Calls in ${datemonth}`;
			case 'CLOSING_CALL_COMPLIANCE':
				return `100% Closing Note in ${datemonth}`;
			case 'OPENING_CALL_COMPLIANCE':
				return `100% Opening Note in ${datemonth}`;
			default:
				return <span></span>;
		}
	};
	return (
		<div>
			{agentachievementdata?.length > 0 ? (
				agentachievementdata.map((achievements, index) => {
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
										{achievements.type &&
											achievementType(
												achievements.type,
												achievements.created_at
											)}
									</Typography>
									<Typography
										variant='caption'
										className='employee-achievements-caption'
									>
										{achievements.created_at &&
											moment(achievements.created_at)?.format('lll')}
									</Typography>
								</div>
							</div>
							<Divider className='employee-achievements-divider' />
						</div>
					);
				})
			) : (
				<Typography
					variant='body1'
					color='error'
					className='employee-achievements-none-error'
				>
					Agent Achievements Not Found
				</Typography>
			)}
		</div>
	);
}

export default EmployeeManagementAchievements;
