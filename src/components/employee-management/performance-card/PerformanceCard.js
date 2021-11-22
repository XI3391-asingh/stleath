import React from 'react';

import { Card, Divider, Typography } from '@mui/material';

import PerformanceFilters from '../../filters/performance-filters/PerformanceFilters';

import './styles.css';
import PerformanceCardRating from '../performance-card-rating/PerformanceCardRating';
import PerformanceCardSentiment from '../performance-card-sentiment/PerformanceCardSentiment';
import PerformanceCardImprove from '../performance-card-improve/PerformanceCardImprove';
import PerformanceCardExcellence from '../performance-card-excellence/PerformanceCardExcellence';
import EmployeeManagementFeedback from '../employee-management-feedback/EmployeeManagementFeedback';

function PerformanceCard() {
	return (
		<Card className='performance-card-layout'>
			<div className='performance-card-header'>
				<Typography variant='h6'>
					Viewing Rajat Bansal's Performance:
				</Typography>
				<PerformanceFilters />
			</div>
			{/* <Divider /> */}
			{/* <div>
				<Typography
					variant='subtitle2'
					className='performance-card-filter-result'
				>
					Last 30 days
				</Typography>
			</div> */}
			{/* <div className='performance-card-tag-group-list'> */}
			<div className='performance-card-tag-group'>
				<PerformanceCardRating />
				<PerformanceCardSentiment />
				<PerformanceCardImprove />
				<PerformanceCardExcellence />
			</div>
			{/* <div className='performance-card-received-feedback-layout'>
				<Typography
					variant='h6'
					className='performance-card-received-feedback-header'
				>
					feedbacks Received:
				</Typography>
				<EmployeeManagementFeedback />
			</div> */}
			{/* </div> */}
		</Card>
	);
}

export default PerformanceCard;
