import React from 'react';

import Select from 'react-select';

const issues = {
	id: '2',
	label: 'Opening Check',
	options: [
		{ value: true, label: 'Compliant' },
		{ value: false, label: 'Non-Compliant' },
	],
};

function SidebarOpeningCheckDropdown({
	label,
	isCallOpenedWithCompliance,
	setIsCallOpenedWithCompliance,
}) {
	return (
		<div>
			<div>
				<h6 className='sidebar-filter-dropdowns'>{label}</h6>
				<Select
					className='sidebar-filter'
					options={issues.options}
					value={issues.options.filter(
						(option) => option.value === isCallOpenedWithCompliance
					)}
					onChange={(option) => setIsCallOpenedWithCompliance(option.value)}
				/>
			</div>
		</div>
	);
}

export default SidebarOpeningCheckDropdown;
