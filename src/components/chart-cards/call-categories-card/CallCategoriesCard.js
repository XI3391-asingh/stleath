import React from 'react';
import { useHistory } from 'react-router-dom';

import { Card, CardHeader, Divider } from '@mui/material';
import { Bar } from 'react-chartjs-2';

import '../styles.css';

function CallCategoriesCard() {
	let history = useHistory();
	const data = {
		labels: ['Talk Greater Than', 'Talk Time 10 to 60 seconds', ''],
		datasets: [
			{
				label: 'Data',
				data: [650, 438, 0],
				fill: true,
				backgroundColor: '#B5CDA3',
			},
		],
	};
	return (
		<div className='chart-cardLayout'>
			<Card className='chart-card'>
				<CardHeader title='Call Categories' className='chart-cardHeader' />
				<Divider />
				<div>
					<Bar
						data={data}
						options={{
							onClick: (e) => {
								history.push('/calls');
							},
							indexAxis: 'y',
						}}
					/>
				</div>
			</Card>
		</div>
	);
}

export default CallCategoriesCard;
