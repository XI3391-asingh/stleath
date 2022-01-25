import React from 'react';
// import SidebarDatePicker from '../../date-picker/SidebarDatePicker';
import SidebarAgentDispositionDropdown from './SidebarAgentDispositionDropdown';
import SidebarAgentDropdown from './SidebarAgentDropdown';
import SidebarClosingCheckDropdown from './SidebarClosingCheckDropdown';
import SidebarDatepicker from './SidebarDatepicker';
import SidebarOpeningCheckDropdown from './SidebarOpeningCheckDropdown';
import SidebarPIDropdown from './SidebarPIDropdown';
import SidebarSIDropdown from './SidebarSIDropdown';
import SidebarTotakComplianceDropdown from './SidebarTotalComplianceDropdown';

import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import './styles.css';

function SidebarFilters() {
	return (
		<div className='sidebar-filters-layout'>
			<h4>Filters</h4>
			{/* <SidebarDatePicker /> */}
			<SidebarDatepicker />
			<SidebarAgentDropdown label='Agents' />
			<SidebarPIDropdown label='Product Issues' />
			<SidebarSIDropdown label='Service Issues' />
			<SidebarOpeningCheckDropdown label='Opening Check' />
			<SidebarClosingCheckDropdown label='Closing Check' />
			<SidebarTotakComplianceDropdown label='Total Compliance' />
			<SidebarAgentDispositionDropdown label='Agent Disposition' />
			<br/>
			<Button variant="outlined" className="sidebar-clear-filters" startIcon={<HighlightOffIcon />}>
				Clear All
			</Button>
		</div>
	);
}

export default SidebarFilters;
