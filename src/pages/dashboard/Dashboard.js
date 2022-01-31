import React, { useState } from 'react';

import { Card } from '@mui/material';

import CardComponents from '../../components/CardComponents';
import ChartComponents from '../../components/ChartComponents';

import './styles.css';
import DashboardDetails from '../../components/dashboard/details/DashboardDetails';
import SidebarFilters from '../../components/filters/sidebar-filters/SidebarFilters';
import DashboardScrollbar from '../../components/dashboard/dashboard-scrollbar/DashboardScrollbar';
import { useSelector } from 'react-redux';

function Dashboard() {
	let [triggerRefresh, setTriggerRefresh] = useState(1);
	const {
		fromDate,
		toDate,
		agentName,
		isProductIssue,
		isServiceIssue,
		isCallOpenedWithCompliance,
		isCallClosedWithCompliance,
		isTotalCompliance,
	} = useSelector((store) => store.filter);

	const refreshDashboard = () => {
		setTriggerRefresh(++triggerRefresh);
	};

	return (
		<div className='dashboard-page-layout'>
			<Card className='dashboard-page-card'>
				<div className='dashboard-page-card-list'>
					<div>
						<SidebarFilters
							setTriggerRefresh={refreshDashboard}
							start_date={fromDate}
							to_date={toDate}
							agent_name={agentName}
							product_issue={isProductIssue}
							service_issue={isServiceIssue}
							call_opened={isCallOpenedWithCompliance}
							call_closed={isCallClosedWithCompliance}
							total_compliance={isTotalCompliance}
						/>
					</div>
					<div className='dashboard-right-content'>
						<DashboardDetails />
						<hr className='dashboard-page-divider' />
						<div className='dashboard-page-scroller'>
							<DashboardScrollbar />
						</div>
						<div className='dashboard-page-components'>
							<CardComponents
								triggerRefresh={triggerRefresh}
								start_date={fromDate}
								to_date={toDate}
								agent_name={agentName}
								product_issue={isProductIssue}
								service_issue={isServiceIssue}
								call_opened={isCallOpenedWithCompliance}
								call_closed={isCallClosedWithCompliance}
								total_compliance={isTotalCompliance}
							/>
							<ChartComponents
								triggerRefresh={triggerRefresh}
								start_date={fromDate}
								to_date={toDate}
								agent_name={agentName}
								product_issue={isProductIssue}
								service_issue={isServiceIssue}
								call_opened={isCallOpenedWithCompliance}
								call_closed={isCallClosedWithCompliance}
								total_compliance={isTotalCompliance}
							/>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default Dashboard;
