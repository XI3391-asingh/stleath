import React from 'react';

import { Card, CardHeader, Divider } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';

import '../styles.css';
// import { Link } from 'react-router-dom';
// import Calls from '../../../pages/calls/Calls';

const state = {
	labels: ['Positive', 'Negative'],
	datasets: [
		{
			label: 'Sentiments',
			backgroundColor: ['rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
			hoverBackgroundColor: ['rgba(0, 255, 0, 1)', 'rgba(255, 0, 0, 1)'],
			data: [1504, 743],
		},
	],
};

function SentimentCard() {
	return (
		<div className='chart-cardLayout'>
			<Card className='chart-card'>
				<CardHeader title='Sentiments' className='chart-cardHeader' />
				<Divider />
				<div className='sentiment-space'>
					<Doughnut
						data={state}
						options={{
							// onClick: (e) => {
							// 	alert('one click');
							// 	console.log('calls');
							// 	<Link to='/calls'>{state.data}</Link>;
							// },
							circumference: 180,
							rotation: 270,
							radius: '100%',
							maintainAspectRatio: false,

							title: { display: true, text: 'Review', fontSize: 20 },
							legend: { display: true, position: 'right' },
							plugins: {
								datalabels: {
									formatter: (value) => {
										return value + '%';
									},
								},
							},
						}}
					/>
				</div>
			</Card>
		</div>
	);
}

export default SentimentCard;
