import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardHeader, Divider } from '@mui/material';

function CallCompositionCard() {
	const data = {
		labels: ['Vishal', 'Priya', 'Nikhil', 'Neha', 'Abhinav', 'Chetan'],
		agentDisposition1: {
			label: 'TotalOpening',
			dataSet: [25, 15, 30, 10, 5, 13],
		},
		agentDisposition2: {
			label: 'TotalClosing',
			dataSet: [15, 20, 9, 17, 25, 17],
		},
		agentDisposition3: {
			label: 'TotalEscalation',
			dataSet: [19, 15, 20, 13, 20, 15],
		},
		agentDisposition4: {
			label: 'TotalPricing',
			dataSet: [11, 25, 10, 25, 15, 10],
		},
		agentDisposition5: {
			label: 'TotalCompliance',
			dataSet: [19, 15, 21, 30, 20, 25],
		},
		agentDisposition6: {
			label: 'TotalCompetitor',
			dataSet: [11, 10, 10, 5, 15, 20],
		},
	};
	return (
		<div className='chart-callCompositionLayout'>
			<Card>
				<CardHeader
					title='Call Composition (beta)'
					className='chart-cardHeader'
				/>
				<Divider />
				<div className='chart-position'>
					<Bar
						data={{
							data,
							labels: data.labels,
							responsive: true,
							offset: true,
							datasets: [
								{
									label: 'TotalOpening',
									data: data.agentDisposition1.dataSet,
									categoryPercentage: 1,
									pointStyle: 'rectRounded',
									stack: 'Stack 0',
									backgroundColor: 'rgba(0, 200, 55,1)',
								},
								{
									label: 'TotalClosing',
									data: data.agentDisposition2.dataSet,
									categoryPercentage: 1,
									pointStyle: 'triangle',
									stack: 'Stack 0',
									backgroundColor: 'rgba(50, 20, 55,1)',
								},
								{
									label: 'TotalEscalation',
									data: data.agentDisposition3.dataSet,
									categoryPercentage: 1,
									pointStyle: 'triangle',
									stack: 'Stack 0',
									backgroundColor: 'rgba(250, 200, 55,1)',
								},
								{
									label: 'TotalPricing',
									data: data.agentDisposition4.dataSet,
									categoryPercentage: 1,
									pointStyle: 'triangle',
									stack: 'Stack 0',
									backgroundColor: 'rgba(153, 0, 153,1)',
								},
								{
									label: 'TotalCompliance',
									data: data.agentDisposition5.dataSet,
									categoryPercentage: 1,
									pointStyle: 'triangle',
									stack: 'Stack 0',
									backgroundColor: 'rgba(153, 255, 153,1)',
								},
								{
									label: 'TotalCompetitor',
									data: data.agentDisposition6.dataSet,
									categoryPercentage: 1,
									pointStyle: 'triangle',
									stack: 'Stack 0',
									backgroundColor: 'rgba(100, 200, 153,1)',
								},
							],
						}}
						height={220}
						options={{
							indexAxis: 'y',
							drawTicks: true,
							responsive: true,
							maintainAspectRatio: false,
							legend: {
								display: true,
								align: 'start',
								labels: {
									usePointStyle: true,
								},
							},
							scales: {
								xAxes: [
									{
										stacked: true,
										display: false,
										categoryPercentage: 1,
										barPercentage: 1,
									},
								],
								yAxes: [
									{
										stacked: true,
										display: false,
										categoryPercentage: 1,
										barPercentage: 1,
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

export default CallCompositionCard;
