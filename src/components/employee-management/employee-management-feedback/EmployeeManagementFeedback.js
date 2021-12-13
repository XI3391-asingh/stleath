import React from 'react';

import { Card, Typography } from '@mui/material';

import './styles.css';

function EmployeeManagementFeedback(props) {
	return (
		<Card className='employee-management-feedback-card-layout'>
			<div className='employee-management-feedback-card-call-details'>
				<Typography
					variant='subtitle1'
					className='employee-management-feedback-card-call-details-key'
				>
					Given By:
				</Typography>
				<Typography
					variant='body1'
					className='employee-management-feedback-card-call-details-value'
				>
					{props.sender_id}
				</Typography>
			</div>
			<div style={{ display: 'flex' }}>
				<Typography
					variant='subtitle1'
					className='employee-management-feedback-card-call-details-key'
				>
					Feedback Type:
				</Typography>
				<Typography
					variant='body1'
					className='employee-management-feedback-card-call-details-value'
				>
					{props.feedback_type}
				</Typography>
			</div>
			<div style={{ display: 'flex' }}>
				<Typography
					variant='subtitle1'
					className='employee-management-feedback-card-call-details-key'
				>
					Date and Time:
				</Typography>
				<Typography
					variant='body1'
					className='employee-management-feedback-card-call-details-value'
				>
					{props.createdAt}
				</Typography>
			</div>
			{/* <div style={{ display: 'flex' }}>
				<Typography
					variant='subtitle1'
					className='employee-management-feedback-card-call-details-key'
				>
					Duration:
				</Typography>
				<Typography
					variant='body1'
					className='employee-management-feedback-card-call-details-value'
				>
					87 Minutes
				</Typography>
			</div> */}
			<div style={{ display: 'flex' }}>
				<Typography
					variant='subtitle1'
					className='employee-management-feedback-card-call-details-key'
				>
					Comments:
				</Typography>
				<Typography
					variant='body1'
					className='employee-management-feedback-card-call-details-value'
				>
					{props.feedback}
				</Typography>
			</div>
		</Card>
	);
}

export default EmployeeManagementFeedback;
