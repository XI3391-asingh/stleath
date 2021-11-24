import React from 'react';

import { Card } from '@mui/material';

import SideBar from '../../components/side-bar/SideBar';
import CardComponents from '../../components/CardComponents';
import ChartComponents from '../../components/ChartComponents';

import './styles.css';

function Dashboard() {
	return (
		<div className='dashboard-page-layout'>
			<Card className='dashboard-page-card'>
				<div className='dashboard-page-card-list'>
					<div>
						<SideBar />
					</div>
					<div>
						<div className='dashboard-page-call-details'>40 of 100 Calls</div>
						<hr className='dashboard-page-divider' />
						<div className='dashboard-page-components'>
							<CardComponents />
							<ChartComponents />
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default Dashboard;
