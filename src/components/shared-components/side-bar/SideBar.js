import React from 'react';

import SidebarDatePicker from '../date-picker/SidebarDatePicker';
import Dropdown from '../Dropdown';

import '../styles.css';

function SideBar() {
	return (
		<div className='sidebar-layout'>
			<h4 className='sidebar-heading'>FILTERS</h4>
			<h5>Date Filters</h5>
			<SidebarDatePicker />
			<Dropdown />
			<Dropdown />
			<Dropdown />
			<Dropdown />
			<Dropdown />
			<Dropdown />
			<Dropdown />
			<Dropdown />
			<Dropdown />
			<Dropdown />
		</div>
	);
}

export default SideBar;
