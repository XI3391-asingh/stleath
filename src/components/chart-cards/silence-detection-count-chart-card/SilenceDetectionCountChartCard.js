import { Card, CardHeader, Divider } from '@mui/material';
import React from 'react';
import { Bar } from 'react-chartjs-2';

function SilenceDetectionCountChartCard() {
	const dataValues = [
		{ x: 1, y: 50 },
		{ x: 2, y: 20 },
		{ x: 3, y: 44 },
		{ x: 4, y: 21 },
		{ x: 5, y: 10 },
		{ x: 6, y: 3 },
		{ x: 7, y: 17 },
	];
	const dataLabels = [1, 2, 3, 4, 5, 6, 7];
	const data = {
		labels: dataLabels,
		datasets: [
			{
				label: 'Silence Detection',
				data: dataValues,
				backgroundColor: '#B5CDA3',
				barPercentage: 0.5,
				categoryPercentage: 0.5,
			},
		],
	};
	return (
		<div className='chart-detectionCardLayout'>
			<Card>
				<CardHeader title='Silence Detection' className='chart-cardHeader' />
				<Divider />
				<div className='chart-position'>
					<Bar
						data={data}
						options={{
							scales: {
								xAxes: [
									{
										display: false,
										type: 'linear',
										offset: true,
										grid: { offset: false },
										ticks: { stepSize: 2, max: 3 },
										title: { display: false, text: 'Hours' },
									},
									{ display: true, ticks: { autoSkip: false, max: 4 } },
								],
								yAxes: [{ display: false }],
							},
						}}
					/>
				</div>
			</Card>
		</div>
	);
}

export default SilenceDetectionCountChartCard;
