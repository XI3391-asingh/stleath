import React from 'react';

import { Rating, Typography } from '@mui/material';

import './styles.css';

function PerformanceCardRating() {
	return (
		<div className='performance-card-rating-tag'>
			<Rating name='half-rating' precision={0.1} readOnly />
			<Typography variant='body1' className='performance-card-rating-number'>
				4.70
			</Typography>
			<Typography variant='body1' className='performance-card-rating-text'>
				Good
			</Typography>
		</div>
	);
}

export default PerformanceCardRating;
