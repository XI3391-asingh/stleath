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

function PerformanceCardFilters() {
	return (
		<div className='performance-filter-layout'>
			<Select className='performance-filter-select' options={options.options} />
		</div>
	);
}

export default PerformanceCardFilters;
