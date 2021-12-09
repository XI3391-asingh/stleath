import React from 'react';
import { useHistory } from 'react-router-dom';

import { Card, CardHeader, Divider, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';

import '../styles.css';

function DispositionCodeMixCard(props) {
	let history = useHistory();
	const data = {
		// labels: [
		// 'FollowUp',
		// 'Already Purchased',
		// 'Customer Picked Up',
		// 'Auto Wrap Up',
		// 'Language Barrier',
		// 'Commercial Vehicle',
		// 'Car Not Finalized',
		// 'Sad',
		// 'Fear',
		// 'Happy',
		// ],
		labels: Object.keys(props.data),
		datasets: [
			{
				label: 'Emotions',
				// data: [650, 438, 578, 30, 0],
				data: Object.values(props.data),
				fill: true,
				backgroundColor: '#B5DEFF',
			},
		],
	};

	return (
		<div className='chart-cardLayout'>
			<Card className='chart-card'>
				<CardHeader title='Emotions' className='chart-cardHeader' />
				<Divider />
				<div>
					<Bar
						data={data}
						options={{
							// onClick: (e) => {
							// 	history.push('/calls');
							// },
							onClick: (e, element) => {
								// history.push("/calls");
								if (element.length > 0) {
									history.push(
										`/calls?call_emotion=${data?.labels[element[0]?.index]}`
									);
								}
							},
							indexAxis: 'y',
							// scales: {
							// 	x: [
							// 		{
							// 			title: {
							// 				display: true,
							// 				text: 'No. of Calls',
							// 			},
							// 		},
							// 	],
							// },
							// title: {
							// 	display: true,
							// 	text: 'No. of Calls',
							// },
							// scales: {
							// 	xAxes: [
							// 		{
							// 			scaleLabel: {
							// 				display: true,
							// 				labelString: 'Number of Calls',
							// 			},
							// 		},
							// 	],
							// },
						}}
					/>
					<Typography variant='caption'>Number of Calls</Typography>
				</div>
			</Card>
		</div>
	);
}

export default DispositionCodeMixCard;
