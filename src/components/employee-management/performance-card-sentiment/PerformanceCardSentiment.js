import React from 'react';

import { Typography } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';

import './styles.css';

function PerformanceCardSentiment(props) {
	const state = {
		labels: [],
		datasets: [
			{
				label: 'Review',
				backgroundColor: ['rgba(0, 255, 0, 0.5)'],
				data: [props.score],
			},
		],
	};
	return (
		<div className='performance-card-sentiment-layout'>
			<Doughnut
				data={state}
				options={{
					circumference: 180,
					rotation: 270,
					cutout: 100,
					radius: '100%',
				}}
			/>
			<Typography
				variant='button'
				className='performance-card-sentiment-percentage'
				style={{
					position: 'absolute',
					transform: 'translate(-50%, 0)',
					fontSize: '1.5rem',
					bottom: '4rem',
				}}
			>
				{`${props.score}%` || '89%'}
			</Typography>
		</div>
	);
}

export default PerformanceCardSentiment;
