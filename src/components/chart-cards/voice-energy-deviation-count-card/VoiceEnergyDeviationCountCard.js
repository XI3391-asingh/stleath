import React from 'react';
import { useHistory } from 'react-router-dom';

import { Card, CardHeader, Divider } from '@mui/material';
import { Bar } from 'react-chartjs-2';

function VoiceEnergyDeviationCountCard(props) {
	let history = useHistory();

	const data = {
		labels: props.data.length && props.data.map((item) => item.agent_name),
		datasets: [
			{
				label: 'Voice Energy Deviation',
				data: props.data.length && props.data.map((item) => item.totalCall),
				backgroundColor: '#C1AC95',
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
							onClick: (e) => {
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

export default VoiceEnergyDeviationCountCard;
