import React from 'react';
import { Bar } from 'react-chartjs-2';

function EventTypesLogistics() {
	const data = {
		labels: [
			'FollowUp',
			'Already Purchased',
			'Customer Picked Up',
			'Auto Wrap Up',
			'Language Barrier',
			'Commercial Vehicle',
			'Car Not Finalized',
		],
		datasets: [
			{
				label: 'Data',
				data: [650, 438, 578, 377, 100, 30, 0],
				fill: true,
				backgroundColor: 'rgba(0, 0, 183,1)',
			},
		],
	};
	return (
		<div>
			<h5>Event Types Logistics</h5>
			<div>
				<Bar data={data} />
			</div>
		</div>
	);
}

export default EventTypesLogistics;
