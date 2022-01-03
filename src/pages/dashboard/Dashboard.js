import React from 'react';

import { Card } from '@mui/material';

import SideBar from '../../components/side-bar/SideBar';
import CardComponents from '../../components/CardComponents';
import ChartComponents from '../../components/ChartComponents';

import './styles.css';
import DashboardDetails from '../../components/dashboard/details/DashboardDetails';
import DashboardScrollbar from '../../components/dashboard/dashboard-scrollbar/DashboardScrollbar';

function Dashboard() {
	return (
		<div className='dashboard-page-layout'>
			<Card className='dashboard-page-card'>
				<div className='dashboard-page-card-list'>
					<div>
						<SideBar />
					</div>
					<div>
						<DashboardDetails />
						<hr className='dashboard-page-divider' />
						<div className='dashboard-page-scroller'>
							<DashboardScrollbar />
						</div>
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
