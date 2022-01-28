import React from 'react';

import { Card, Grid } from '@mui/material';

import CardComponents from '../../components/CardComponents';
import ChartComponents from '../../components/ChartComponents';

import './styles.css';
import DashboardDetails from '../../components/dashboard/details/DashboardDetails';
import SidebarFilters from '../../components/filters/sidebar-filters/SidebarFilters';
import DashboardScrollbar from '../../components/dashboard/dashboard-scrollbar/DashboardScrollbar';

function Dashboard() {
	return (
		<div className='dashboard-page-layout'>
			<Card className='dashboard-page-card'>
				<div className='dashboard-page-card-list'>
					<Grid container spacing={2}>
						<Grid item xs={3}>
							<div>
								<SidebarFilters />
							</div>
						</Grid>
						<Grid item xs={9}>
							<div className='dashboard-right-content'>
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
						</Grid>
					</Grid>
				</div>
			</Card>
		</div>
	);
}

export default Dashboard;
