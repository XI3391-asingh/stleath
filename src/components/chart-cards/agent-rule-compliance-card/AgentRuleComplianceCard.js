import React from 'react';
import { useHistory } from 'react-router-dom';

import { Card, CardHeader, Divider, Grid } from '@mui/material';
import { Bar } from 'react-chartjs-2';

import ChartFiltersDropdown from '../../dropdowns/ChartFiltersDropdown';

function AgentRuleComplianceCard() {
	let history = useHistory();
	const data = {
		labels: [
			'FollowUp',
			'Already Purchased',
			'Customer Picked Up',
			'Auto Wrap Up',
			'Language Barrier',
			'Commercial Vehicle',
			'Car Not Finalized',
			'Customer Interested But Will Buy Later',
			'Customer Picked Up But No Conversation',
			'Customer Says Call Back Later',
			'Exploring Websites/Process',
			'Not Contacted',
		],
		datasets: [
			{
				label: 'Data',
				data: [600, 480, 300, 165, 476, 90, 0, 500, 377, 100, 150, 10],
				fill: true,
				backgroundColor: '#CAB8FF',
			},
		],
	};
	return (
		<div className='chart-ruleComplianceCardLayout'>
			<Card className='chart-ruleComplianceCard'>
				<CardHeader
					title='Agent Rule Compliance'
					className='chart-compositionCardHeader'
				/>
				<Grid item lg={12} md={12} xs={12}>
					<div>
						<ChartFiltersDropdown />
					</div>
					<Divider />
				</Grid>
				<div className='detectionCard-chart'>
					<Bar
						data={data}
						options={{
							onClick: (e) => {
								// alert('one click');
								// console.log('calls');
								history.push('/calls');
							},
							maintainAspectRatio: false,
						}}
						height={220}
					/>
				</div>
			</Card>
		</div>
	);
}

export default AgentRuleComplianceCard;
