import React from 'react';
import { useHistory } from 'react-router-dom';

import { Bar } from 'react-chartjs-2';
import { Card, CardHeader, Divider } from '@mui/material';

import ChartMetaIcons from '../../icons/chart-metaicons/ChartMetaIcons';
import AgentDispositionFilters from '../../filters/agent-disposition-card-filters/AgentDispositionFilters';

import '../styles.css';

const data = {
	labels: [
		'Aarthi Sen',
		'Amit Kumar',
		'Jayanth',
		'Wasi',
		'Rajat',
		'Shankar',
		'Mohit',
		'Preeti',
		'Majid Khan',
		'Jyoti',
	],
	agentDisposition1: {
		label: 'FollowUp',
		dataSet: [5, 7, 10, 3, 7, 1, 0, 8, 3, 18],
	},
	agentDisposition2: {
		label: 'AlreadyPurchased',
		dataSet: [15, 17, 6, 7, 7, 10, 10, 8, 13, 8],
	},
	agentDisposition3: {
		label: 'CustomerPickedUp',
		dataSet: [9, 5, 1, 3, 7, 9, 2, 8, 6, 9],
	},
	agentDisposition4: {
		label: 'AutoWrapUp',
		dataSet: [2, 8, 10, 5, 3, 1, 0, 3, 9, 8],
	},
};

function AgentDispositionCompositionCard() {
	let history = useHistory();
	return (
		<div className='chart-compositionCardLayout'>
			<Card>
				<div className='chart-cardDiv'>
					<CardHeader
						title='Agent Disposition Composition'
						className='chart-compositionCardHeader'
					/>
					<ChartMetaIcons />
				</div>
				<div style={{ margin: '0.5rem 0 0 1rem', textAlign: 'justify' }}>
					<AgentDispositionFilters label='Agent Name' />
				</div>
				<Divider />
				<div className='chart-position'>
					<Bar
						data={{
							labels: data.labels,
							datasets: [
								{
									label: 'FollowUp',
									data: data.agentDisposition1.dataSet,
									categoryPercentage: 1,
									pointStyle: 'rectRounded',
									stack: 'Stack 0',
									backgroundColor: '#C9E4C5',
								},
								{
									label: 'AlreadyPurchased',
									data: data.agentDisposition2.dataSet,
									categoryPercentage: 1,
									pointStyle: 'triangle',
									stack: 'Stack 0',
									backgroundColor: '#B5DEFF',
								},
								{
									label: 'CustomerPickedUp',
									data: data.agentDisposition3.dataSet,
									categoryPercentage: 1,
									pointStyle: 'triangle',
									stack: 'Stack 0',
									backgroundColor: '#FCFFA6',
								},
								{
									label: 'AutoWrapUp',
									data: data.agentDisposition4.dataSet,
									categoryPercentage: 1,
									pointStyle: 'triangle',
									stack: 'Stack 0',
									backgroundColor: '#CAB8FF',
								},
							],
						}}
						height={220}
						options={{
							onClick: (e) => {
								history.push('/calls');
							},
							maintainAspectRatio: false,
							legend: {
								display: true,
								position: 'right',
								align: 'start',
								labels: {
									usePointStyle: true,
								},
							},
							scales: {
								xAxes: [
									{
										stacked: true,
									},
								],
								yAxes: [
									{
										stacked: true,
									},
								],
							},
						}}
					/>
				</div>
			</Card>
		</div>
	);
}

export default AgentDispositionCompositionCard;
