import React from 'react';

import { Card, CardHeader, Divider } from '@mui/material';
import { Bar } from 'react-chartjs-2';

import '../styles.css';

function CallCategoriesCard() {
	const data = {
		labels: ['Talk Greater Than', 'Talk Time 10 to 60 seconds', ''],
		datasets: [
			{
				label: 'Data',
				data: [650, 438, 0],
				fill: true,
				backgroundColor: 'rgba(0, 0, 203,1)',
			},
		],
	};
	return (
		<div className='chart-cardLayout'>
			<Card className='chart-card'>
				<CardHeader title='Call Categories' className='chart-cardHeader' />
				<Divider />
				<div>
					<Bar data={data} options={{ indexAxis: 'y' }} />
				</div>
			</Card>
		</div>
	);
}

export default CallCategoriesCard;
