import React from 'react';

import Select from 'react-select';

const issues = {
	id: '2',
	label: 'Total Compliance',
	options: [
		{ value: true, label: 'Compliant' },
		{ value: false, label: 'Non-Compliant' },
	],
};

function SidebarTotalComplianceDropdown({
	label,
	isTotalCompliance,
	setIsTotalCompliance,
}) {
	return (
		<div>
			<div>
				<h6 className='sidebar-filter-dropdowns'>{label}</h6>
				<Select
					className='sidebar-filter'
					options={issues.options}
					value={issues.options.filter(
						(option) => option.value === isTotalCompliance
					)}
					onChange={(option) => setIsTotalCompliance(option.value)}
				/>
			</div>
		</div>
	);
}

export default SidebarTotalComplianceDropdown;
