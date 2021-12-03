import React from 'react';
import { useHistory } from 'react-router-dom';

import { Card, CardHeader, Divider } from '@mui/material';
import { Bar } from 'react-chartjs-2';

function AgentRankingCard() {
	let history = useHistory();
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
				data: [600, 480, 450, 377, 100, 30, 0],
				fill: true,
				backgroundColor: '#B5DEFF',
			},
		],
	};
	return (
		<div className='chart-compositionCardLayout'>
			<Card>
				<CardHeader title='Agent Ranking' className='chart-cardHeader' />
				<Divider />
				<div>
					<Bar
						data={data}
						options={{
							onClick: (e) => {
								history.push('/calls');
							},
							responsive: true,
							maintainAspectRatio: false,
						}}
					/>
				</div>
			</Card>
		</div>
	);
}

export default AgentRankingCard;
