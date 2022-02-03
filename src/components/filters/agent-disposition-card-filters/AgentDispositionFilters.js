import React from 'react';

import Select from 'react-select';

import './styles.css';

const options = {
	id: '1',
	label: 'Agent Name',
	options: [
		{ value: '1', label: 'Jayant Raja' },
		{ value: '2', label: 'Wasi Muka' },
		{ value: '3', label: 'Rajat Bansal' },
		{ value: '4', label: 'Servashree L' },
	],
};

function AgentDispositionFilters({ label }) {
	return (
		<div>
			<div className='agent-disposition-filter-dropdown-layout'>
				<h6 className='agent-disposition-filter-dropdown-label'>{label}</h6>
				<Select
					className='agent-disposition-filter'
					options={options.options}
				/>
			</div>
		</div>
	);
}

export default AgentDispositionFilters;
