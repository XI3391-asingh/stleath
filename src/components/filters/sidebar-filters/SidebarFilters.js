import React from 'react';
// import SidebarDatePicker from '../../date-picker/SidebarDatePicker';
import SidebarAgentDispositionDropdown from './SidebarAgentDispositionDropdown';
import SidebarAgentDropdown from './SidebarAgentDropdown';
import SidebarDatepicker from './SidebarDatepicker';
import SidebarOpeningCheckDropdown from './SidebarOpeningCheckDropdown';
import SidebarPIDropdown from './SidebarPIDropdown';
import SidebarSIDropdown from './SidebarSIDropdown';

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
			<SidebarAgentDispositionDropdown label='Agent Disposition' />
		</div>
	);
}

export default SidebarFilters;
