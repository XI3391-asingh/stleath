import React from 'react';
import EmployeeManagementAchievements from '../employee-management-achievements/EmployeeManagementAchievements';

import './styles.css';

function EmployeeManagementAchievementsCard({ agentachievementdata }) {
	return (
		<div className='employee-management-suggestions-layout'>
			<h4 className='employee-management-suggestions-heading'>Achievements</h4>
			<EmployeeManagementAchievements
				agentachievementdata={agentachievementdata}
			/>
		</div>
	);
}

export default EmployeeManagementAchievementsCard;
