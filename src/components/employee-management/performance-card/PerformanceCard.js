import React from 'react';

import { Card, Typography } from '@mui/material';

import './styles.css';
import PerformanceCardRating from '../performance-card-rating/PerformanceCardRating';
import PerformanceCardSentiment from '../performance-card-sentiment/PerformanceCardSentiment';
import PerformanceCardImprove from '../performance-card-improve/PerformanceCardImprove';
import PerformanceCardExcellence from '../performance-card-excellence/PerformanceCardExcellence';
import { useSelector } from 'react-redux';
import TeamData from '../../../data/team.json';

function PerformanceCard() {
	const { performance, selectedUser } = useSelector((store) => store.user);
	const viewName = () => {
		if (selectedUser?.name) {
			return selectedUser?.name + "'s";
		}
		// else if(localStorage.getItem('username')){
		// 	return localStorage.getItem('username') + "'s";
		// }
		else {
			return localStorage.getItem('userable_type').toLowerCase() === 'manager'
				? TeamData[0].name + "'s"
				: localStorage.getItem('username') + "'s";
		}
	};
	return (
		<Card className='performance-card-layout'>
			<div className='performance-card-header'>
				<Typography variant='h6'>Viewing {viewName()} Performance:</Typography>
				{/* {localStorage.getItem('userable_type').toLowerCase() === 'manager' && (
					<PerformanceCardProvideFeedback />
				)} */}
				{/* <PerformanceCardFilters /> */}
			</div>
			<div className='performance-card-tag-group'>
				<PerformanceCardRating />
				<PerformanceCardSentiment score={performance?.percentage} />
				<PerformanceCardImprove />
				<PerformanceCardExcellence />
			</div>
		</Card>
	);
}

export default PerformanceCard;
