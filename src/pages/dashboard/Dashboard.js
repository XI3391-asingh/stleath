import React, { useState } from 'react';

import { Card } from '@mui/material';

import CardComponents from '../../components/CardComponents';
import ChartComponents from '../../components/ChartComponents';

import './styles.scss';
import DashboardDetails from '../../components/dashboard/details/DashboardDetails';
import SidebarFilters from '../../components/filters/sidebar-filters/SidebarFilters';
import DashboardScrollbar from '../../components/dashboard/dashboard-scrollbar/DashboardScrollbar';
import { useSelector } from 'react-redux';

function Dashboard() {
	let [triggerRefresh, setTriggerRefresh] = useState(1);
	const sidebar_filter = useSelector((store) => store.filter);
	const refreshDashboard = () => {
		setTriggerRefresh(++triggerRefresh);
	};
	return (
		<div className='dashboard-page-layout'>
			<Card className='dashboard-page-card'>
				<div className='dashboard-page-card-list'>
					<div className='dashboard-left-content'>
						<SidebarFilters
							setTriggerRefresh={refreshDashboard}
							start_date={sidebar_filter?.fromDate}
							to_date={sidebar_filter?.toDate}
							agent_name={sidebar_filter?.agentName}
							product_issue={sidebar_filter?.isProductIssue}
							service_issue={sidebar_filter?.isServiceIssue}
							call_opened={sidebar_filter?.isCallOpenedWithCompliance}
							call_closed={sidebar_filter?.isCallClosedWithCompliance}
							total_compliance={sidebar_filter?.isTotalCompliance}
						/>
					</div>
					<div className='dashboard-right-content'>
						<DashboardDetails />
						<hr className='dashboard-page-divider' />
						<div className='dashboard-page-scroller'>
							<DashboardScrollbar />
						</div>
						<div className='dashboard-page-components'>
							<CardComponents triggerRefresh={triggerRefresh} />
							<ChartComponents triggerRefresh={triggerRefresh} />
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default Dashboard;
