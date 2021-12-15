import React from 'react';

import { Typography } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';

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
		<div style={{ width: '220px', height: '220px', position: 'relative' }}>
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
