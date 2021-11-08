import { Card, CardHeader, Divider } from '@mui/material';
import React from 'react';
import { Bar } from 'react-chartjs-2';

function VoiceEnergyDeviationCountCard() {
	const dataLabels = [50, 20, 44, 21, 10, 10, 17];
	const dataValues = [1, 2, 3, 4, 5, 6, 7];
	const data = {
		labels: dataValues,
		datasets: [
			{
				label: 'Silence Detection',
				data: dataLabels,
				backgroundColor: 'rgba(153,0,153,0.8)',
				barPercentage: 0.5,
				categoryPercentage: 0.5,
			},
		],
	};
	return (
		<div className='chart-detectionCardLayout'>
			<Card>
				<CardHeader
					title='Voice Energy Deviation Count'
					className='chart-cardHeader'
				/>
				<Divider />
				<div className='chart-position'>
					<Bar
						data={data}
						options={{
							indexAxis: 'y',

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

export default VoiceEnergyDeviationCountCard;
