import React, { useEffect, useState } from 'react';
import SidebarAgentDispositionDropdown from './SidebarAgentDispositionDropdown';
import SidebarAgentDropdown from './SidebarAgentDropdown';
import SidebarClosingCheckDropdown from './SidebarClosingCheckDropdown';
import SidebarDatepicker from './SidebarDatepicker';
import SidebarOpeningCheckDropdown from './SidebarOpeningCheckDropdown';
import SidebarPIDropdown from './SidebarPIDropdown';
import SidebarSIDropdown from './SidebarSIDropdown';
import SidebarTotalComplianceDropdown from './SidebarTotalComplianceDropdown';

import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_FILTERS, SET_FILTER } from '../../../store/type';

function SidebarFilters({
	setTriggerRefresh,
	start_date,
	to_date,
	agent_name,
	product_issue,
	service_issue,
	call_opened,
	call_closed,
	total_compliance,
}) {
	const dispatch = useDispatch();
	const [fromDate, setFromDate] = useState(start_date);
	const [toDate, setToDate] = useState(to_date);
	const [agentName, setAgentName] = useState(agent_name);
	const [isProductIssue, setIsProductIssue] = useState(product_issue);
	const [isServiceIssue, setIsServiceIssue] = useState(service_issue);
	const [isCallOpenedWithCompliance, setIsCallOpenedWithCompliance] =
		useState(call_opened);
	const [isCallClosedWithCompliance, setIsCallClosedWithCompliance] =
		useState(call_closed);
	const [isTotalCompliance, setIsTotalCompliance] = useState(total_compliance);

	useEffect(() => {
		setFromDateOnStore();
		setToDateOnStore();
		setAgentNameOnStore();
		setIsProductIssueOnStore();
		setIsServiceIssueOnStore();
		setIsCallOpenedWithComplianceOnStore();
		setIsCallClosedWithComplianceOnStore();
		setIsTotalComplianceOnStore();
	}, []);

	const setFromDateOnStore = () => {
		dispatch({
			type: SET_FILTER,
			payload: { fromDate },
		});
	};
	const setToDateOnStore = () => {
		dispatch({
			type: SET_FILTER,
			payload: { toDate },
		});
	};
	const setAgentNameOnStore = () => {
		dispatch({
			type: SET_FILTER,
			payload: { agentName },
		});
	};
	const setIsProductIssueOnStore = () => {
		dispatch({
			type: SET_FILTER,
			payload: { isProductIssue },
		});
	};
	const setIsServiceIssueOnStore = () => {
		dispatch({
			type: SET_FILTER,
			payload: { isServiceIssue },
		});
	};
	const setIsCallOpenedWithComplianceOnStore = () => {
		dispatch({
			type: SET_FILTER,
			payload: { isCallOpenedWithCompliance },
		});
	};
	const setIsCallClosedWithComplianceOnStore = () => {
		dispatch({
			type: SET_FILTER,
			payload: { isCallClosedWithCompliance },
		});
	};
	const setIsTotalComplianceOnStore = () => {
		dispatch({
			type: SET_FILTER,
			payload: { isTotalCompliance },
		});
	};

	const clearAllFilters = () => {
		setFromDate(new Date('01-01-2010'));
		setToDate(new Date());
		setAgentName('All');
		setIsServiceIssue('');
		setIsProductIssue('');
		setIsCallOpenedWithCompliance('');
		setIsCallClosedWithCompliance('');
		setIsTotalCompliance('');
		refreshDashboard();
		dispatch(
			{
				type: CLEAR_FILTERS,
			},
			() => {
				// console.log(isProductIssue);
			}
		);
	};

	const refreshDashboard = () => {
		setFromDateOnStore();
		setToDateOnStore();
		setAgentNameOnStore();
		setIsProductIssueOnStore();
		setIsServiceIssueOnStore();
		setIsCallOpenedWithComplianceOnStore();
		setIsCallClosedWithComplianceOnStore();
		setIsTotalComplianceOnStore();
		setTriggerRefresh();
	};

	return (
		<div className='sidebar-filters-layout'>
			<h4>Filters</h4>
			<SidebarDatepicker
				fromDate={fromDate}
				toDate={toDate}
				setFromDate={setFromDate}
				setToDate={setToDate}
			/>
			<SidebarAgentDropdown
				label='Agents'
				agentName={agentName}
				setAgentName={setAgentName}
			/>
			<SidebarPIDropdown
				label='Product Issues'
				isProductIssue={isProductIssue}
				setIsProductIssue={setIsProductIssue}
			/>
			<SidebarSIDropdown
				label='Service Issues'
				isServiceIssue={isServiceIssue}
				setIsServiceIssue={setIsServiceIssue}
			/>
			<SidebarOpeningCheckDropdown
				label='Opening Check'
				isCallOpenedWithCompliance={isCallOpenedWithCompliance}
				setIsCallOpenedWithCompliance={setIsCallOpenedWithCompliance}
			/>
			<SidebarClosingCheckDropdown
				label='Closing Check'
				isCallClosedWithCompliance={isCallClosedWithCompliance}
				setIsCallClosedWithCompliance={setIsCallClosedWithCompliance}
			/>
			<SidebarTotalComplianceDropdown
				label='Total Compliance'
				isTotalCompliance={isTotalCompliance}
				setIsTotalCompliance={setIsTotalCompliance}
			/>
			<SidebarAgentDispositionDropdown label='Agent Disposition' />
			<br />
			<div className='sidebar-filters-buttons'>
				<button className='sidebar-clear-btn' onClick={clearAllFilters}>
					Clear All
				</button>
				<button
					variant='contained'
					className='sidebar-filter-btn'
					onClick={refreshDashboard}
				>
					Filter
				</button>
			</div>
		</div>
	);
}

export default SidebarFilters;
