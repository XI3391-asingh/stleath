import React from 'react';

import { Card, Typography } from '@mui/material';

import './styles.css';

function EmployeeManagementFeedback() {
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
					A.I
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
					Monthly
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
					11/19/2021 11:00 AM
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
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</Typography>
			</div>
		</Card>
	);
}

export default EmployeeManagementFeedback;
