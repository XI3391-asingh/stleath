import React from 'react';

import Select from 'react-select';

const options = {
	id: '1',
	label: 'Agent Name',
	options: [
		{ value: '1', label: 'Jayant Raja' },
		{ value: '2', label: 'Wasi Muka' },
		{ value: '3', label: 'Rajat Bansal' },
	],
};

function SidebarAgentDropdown({ label }) {
	return (
		<div>
			<div>
				<h6 className='sidebar-filter-dropdowns'>{label}</h6>
				<Select className='sidebar-filter' options={options.options} />
			</div>
		</div>
	);
}

export default SidebarAgentDropdown;
