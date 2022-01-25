import React from 'react';

import Select from 'react-select';

const issues = {
	id: '2',
	label: 'Closing Check',
	options: [
		{ value: '1', label: 'Compliant' },
		{ value: '2', label: 'Non-Compliant' },
	],
};

function SidebarClosingCheckDropdown({ label }) {
	return (
		<div>
			<div>
				<h6 className='sidebar-filter-dropdowns'>{label}</h6>
				<Select className='sidebar-filter' options={issues.options} />
			</div>
		</div>
	);
}

export default SidebarClosingCheckDropdown;
