import React from 'react';

import { Card, Typography } from '@mui/material';

import EmployeeManagementFeedback from '../employee-management-feedback/EmployeeManagementFeedback';

import './styles.css';

function EmployeeFeedbackCard() {
	return (
		<div>
			<div className='employee-feedback-card-title'>
				<Typography variant='subtitle1'>Feedbacks Received:</Typography>
			</div>
			<EmployeeManagementFeedback />
			<EmployeeManagementFeedback />
			<EmployeeManagementFeedback />
		</div>
	);
}

export default EmployeeFeedbackCard;
