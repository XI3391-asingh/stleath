import React from 'react';

import Select from 'react-select';

import './styles.css';

const options = {
	id: '1',
	label: 'Agent Name',
	options: [
		{ value: '1', label: 'Monthly' },
		{ value: '2', label: 'Quarterly' },
		{ value: '3', label: 'Yearly' },
	],
};

function PerformanceFilters() {
	return (
		<div>
			<div className='agent-disposition-filter-dropdown-layout'>
				{/* <h6 className='agent-disposition-filter-dropdown-label'>{label}</h6> */}
				<Select
					className='performance-filter-select'
					options={options.options}
				/>
			</div>
		</div>
	);
}

export default PerformanceFilters;
