import React from 'react';

import Select from 'react-select';

const issues = {
	id: '2',
	label: 'Agent Disposition',
	options: [
		{ value: '1', label: 'Already Purchased' },
		{ value: '2', label: 'Follow Up' },
		{ value: '2', label: 'Language Barrier' },
	],
};

function SidebarAgentDispositionDropdown({ label }) {
	return (
		<div>
			<div>
				<h6 className='sidebar-filter-dropdowns'>{label}</h6>
				<Select className='sidebar-filter' options={issues.options} />
			</div>
		</div>
	);
}

export default SidebarAgentDispositionDropdown;
