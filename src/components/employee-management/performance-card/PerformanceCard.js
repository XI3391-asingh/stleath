import React from 'react';

import { Card, Divider, Typography } from '@mui/material';

import PerformanceCardFilters from '../../filters/performance-card-filters/PerformanceCardFilters';

import './styles.css';
import PerformanceCardRating from '../performance-card-rating/PerformanceCardRating';
import PerformanceCardSentiment from '../performance-card-sentiment/PerformanceCardSentiment';
import PerformanceCardImprove from '../performance-card-improve/PerformanceCardImprove';
import PerformanceCardExcellence from '../performance-card-excellence/PerformanceCardExcellence';
import PerformanceCardProvideFeedback from '../performance-card-provide-feedback-button/PerformanceCardProvideFeedback';
import { useSelector } from 'react-redux';

function PerformanceCard() {
	const { performance, selectedUser } = useSelector((store) => store.user);
	return (
		<Card className='performance-card-layout'>
			<div className='performance-card-header'>
				<Typography variant='h6'>
					Viewing {selectedUser?.name || localStorage.getItem('username')}{' '}
					Performance:
				</Typography>
				{localStorage.getItem('email') === 'rajat.bansal@xebia.com' && (
					<PerformanceCardProvideFeedback />
				)}
				<PerformanceCardFilters />
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
				<PerformanceCardSentiment score={performance?.percentage} />
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
