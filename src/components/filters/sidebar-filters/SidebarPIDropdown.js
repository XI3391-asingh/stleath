import React from 'react';

import Select from 'react-select';

const issues = {
	id: '2',
	label: 'Product Issues',
	options: [
		{ value: true, label: 'Yes' },
		{ value: false, label: 'No' },
	],
};

function SidebarPIDropdown({ label, isProductIssue, setIsProductIssue }) {
	return (
		<div>
			<div>
				<h6 className='sidebar-filter-dropdowns'>{label}</h6>
				<Select
					className='sidebar-filter'
					options={issues.options}
					value={issues.options.filter(
						(option) => option.value === isProductIssue
					)}
					onChange={(option) => setIsProductIssue(option.value)}
				/>
			</div>
		</div>
	);
}

export default SidebarPIDropdown;
