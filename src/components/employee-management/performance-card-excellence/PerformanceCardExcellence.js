import { Chip, Typography } from '@mui/material';
import React from 'react';
import './styles.css';

function PerformanceCardExcellence() {
	return (
		<div className='performance-card-excellence-tag'>
			<Typography>Areas of Excellence</Typography>
			<div>
				<Chip
					variant='outlined'
					color='success'
					size='small'
					label='Hold'
					className='performance-card-chip'
				/>
				<Chip
					variant='outlined'
					color='success'
					size='small'
					label='Greeting'
					className='performance-card-chip'
				/>
				<Chip
					variant='outlined'
					color='success'
					size='small'
					label='Aggressive'
					className='performance-card-chip'
				/>
			</div>
		</div>
	);
}

export default PerformanceCardExcellence;
