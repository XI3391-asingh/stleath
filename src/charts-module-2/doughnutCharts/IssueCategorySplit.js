import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function IssueCategorySplit() {
	const data = {
		labels: ['Red', 'Green', 'Yellow'],
		datasets: [{ label: 'Data', data: [10, 40, 50], fill: true }],
	};
	return (
		<div>
			<h5>Issue Category Split</h5>
			<div>
				<Doughnut
					data={data}
					options={{ radius: 150, maintainAspectRatio: true }}
				/>
			</div>
		</div>
	);
}

export default IssueCategorySplit;
