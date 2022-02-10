import React from 'react';
import { useHistory } from 'react-router-dom';

import { Card, CardHeader, Divider } from '@mui/material';
import { Bar } from 'react-chartjs-2';

import '../styles.css';

function CallCategoriesCard(props) {
	let history = useHistory();
	const data = {
		labels: Object.keys(props.data),
		datasets: [
			{
				label: 'Data',
				data: Object.values(props.data),
				fill: true,
				backgroundColor: '#B5CDA3',
			},
		],
	};
	return (
		<div className='chart-cardLayout'>
			<Card className='chart-card'>
				<CardHeader title='Call Categories' className='chart-cardHeader' />
				<Divider />
				<div className='chart-call-categories-body'>
					<Bar
						data={data}
						options={{
							// layout: { padding: { left: '1rem' } },
							onClick: (e, element) => {
								if (element.length > 0) {
									history.push(
										`/calls?call_duration=${data?.labels[element[0]?.index]}`
									);
								}
							},
							indexAxis: 'y',
						}}
					/>
				</div>
			</Card>
		</div>
	);
}

export default CallCategoriesCard;
