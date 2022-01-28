import React from 'react';

import { Card, CardHeader, Divider } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';

import '../styles.css';
import { Link, useHistory } from 'react-router-dom';
import Calls from '../../../pages/calls/Calls';

function SentimentCard(props) {
	const state = {
		labels: ['Positive', 'Neutral', 'Negative'],
		datasets: [
			{
				label: 'Sentiments',
				backgroundColor: [
					'rgba(0, 255, 0, 0.5)',
					'rgba(255, 255, 0, 0.5)',
					'rgba(255, 0, 0, 0.5)',
				],
				hoverBackgroundColor: [
					'rgba(0, 255, 0, 1)',
					'rgba(255, 255, 0, 1)',
					'rgba(255, 0, 0, 1)',
				],
				data: [
					props.data['Positive Feedback'],
					props.data['Neutral Feedback'],
					props.data['Negative Feedback'],
				],
			},
		],
	};

	let history = useHistory();
	return (
		<div className='chart-cardLayout'>
			<Card className='chart-card'>
				<CardHeader title='Sentiments' className='chart-cardHeader' />
				<Divider />
				<div className='sentiment-space'>
					<Doughnut
						className='sentiment-graph'
						data={state}
						options={{
							// onClick: (e) => {
							// 	history.push('/calls');
							// },
							onClick: (e, element) => {
								if (element.length > 0) {
									history.push(
										`/calls?feedback=${state.labels[element[0]?.index]}`
									);
								}
							},
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
