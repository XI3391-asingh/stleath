import React from 'react';

import Select from 'react-select';

const issues = {
	id: '2',
	label: 'Service Issues',
	options: [
		{ value: '1', label: 'Yes' },
		{ value: '2', label: 'No' },
	],
};

function SidebarSIDropdown({ label }) {
	return (
		<div>
			<div>
				<h6 className='sidebar-filter-dropdowns'>{label}</h6>
				<Select className='sidebar-filter' options={issues.options} />
			</div>
		</div>
	);
}

export default SidebarSIDropdown;
