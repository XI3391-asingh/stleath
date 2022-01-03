import React from 'react';

import Select from 'react-select';

const issues = {
	id: '2',
	label: 'Product Issues',
	options: [
		{ value: '1', label: 'Yes' },
		{ value: '2', label: 'No' },
	],
};

function SidebarPIDropdown({ label }) {
	return (
		<div>
			<div>
				<h6 className='sidebar-filter-dropdowns'>{label}</h6>
				<Select className='sidebar-filter' options={issues.options} />
			</div>
		</div>
	);
}

export default SidebarPIDropdown;
