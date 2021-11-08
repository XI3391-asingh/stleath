import React from 'react';

import { Card, CardHeader, Divider } from '@mui/material';
import { Bar } from 'react-chartjs-2';

import '../styles.css';

function DispositionCodeMixCard() {
	const data = {
		labels: [
			'FollowUp',
			'Already Purchased',
			'Customer Picked Up',
			'Auto Wrap Up',
			'Language Barrier',
			'Commercial Vehicle',
			'Car Not Finalized',
		],
		datasets: [
			{
				label: 'Data',
				data: [650, 438, 578, 377, 100, 30, 0],
				fill: true,
				backgroundColor: 'rgba(0, 0, 183,1)',
			},
		],
	};
	return (
		<div className='chart-cardLayout'>
			<Card className='chart-card'>
				<CardHeader title='Disposition Code Mix' className='chart-cardHeader' />
				<Divider />
				<div>
					<Bar data={data} options={{ indexAxis: 'y' }} />
				</div>
			</Card>
		</div>
	);
}

export default DispositionCodeMixCard;
