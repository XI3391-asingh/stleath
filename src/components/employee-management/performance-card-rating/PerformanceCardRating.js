import React from 'react';

import { Rating, Typography } from '@mui/material';

import './styles.css';
import { useSelector } from 'react-redux';

function PerformanceCardRating() {
	const {performance} = useSelector(store => store.user);
	return (
		<div className='performance-card-rating-tag'>
			<Rating name='half-rating' value={performance?.rating} precision={0.1} readOnly />
			<Typography variant='body1' className='performance-card-rating-number'>
				{performance?.rating}
			</Typography>
			<Typography variant='body1' className='performance-card-rating-text'>
				Good
			</Typography>
		</div>
	);
}

export default PerformanceCardRating;
