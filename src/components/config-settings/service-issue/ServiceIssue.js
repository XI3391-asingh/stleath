import React from 'react';

import { Card, Typography } from '@mui/material';

import './styles.css';
import ServiceIssuesSettings from './ServiceIssuesSettings';

function ServiceIssue({ title }) {
	return (
		<Card className='service-issue-card-layout'>
			<div>
				<Typography variant='h6'>{title}</Typography>
			</div>
			<div className='service-issue-card-settings'>
				<ServiceIssuesSettings />
			</div>
		</Card>
	);
}

export default ServiceIssue;
