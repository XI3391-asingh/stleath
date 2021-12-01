import React from 'react';
import { useHistory } from 'react-router-dom';

import { Card, CardHeader, Divider } from '@mui/material';
import { Bar } from 'react-chartjs-2';

function SilenceDetectionCountChartCard() {
	let history = useHistory();
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

	// const barClickHandler = (data) => {
	// 	if (data[0] !== undefined) {
	// 		let item = data[0];
	// 		let type = item._model.label;
	// 		console.log('type of the bar is: ', type);
	// 	}
	// };

	return (
		<div className='chart-detectionCardLayout'>
			<Card>
				<CardHeader title='Silence Detection' className='chart-cardHeader' />
				<Divider />
				<div className='chart-position'>
					<Bar
						data={data}
						// onElementsClick={barClickHandler}
						options={{
							onClick: (e) => {
								// alert('one click');
								// console.log('calls');
								history.push('/calls');
							},
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
