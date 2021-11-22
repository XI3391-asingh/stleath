import { Chip, Typography } from '@mui/material';
import React from 'react';
import './styles.css';

function PerformanceCardImprove() {
	return (
		<div className='performance-card-improve-tag'>
			<Typography>Areas To Improve</Typography>
			<div>
				<Chip
					variant='outlined'
					color='error'
					size='small'
					label='Hold'
					className='performance-card-chip'
				/>
				<Chip
					variant='outlined'
					color='error'
					size='small'
					label='Greeting'
					className='performance-card-chip'
				/>
				<Chip
					variant='outlined'
					color='error'
					size='small'
					label='Aggressive'
					className='performance-card-chip'
				/>
			</div>
		</div>
	);
}

export default PerformanceCardImprove;
