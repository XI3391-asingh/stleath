import React from 'react';

import Select from 'react-select';

import './styles.css';

const optionsOne = {
	id: '1',
	label: 'Agent Name',
	options: [
		{ value: '1', label: 'Jayant Raja' },
		{ value: '2', label: 'Wasi Muka' },
		{ value: '3', label: 'Rajat Bansal' },
		{ value: '4', label: 'Servashree L' },
	],
};

const optionsTwo = {
	id: '2',
	label: 'Note',
	options: [
		{ value: '1', label: 'Opening Note' },
		{ value: '2', label: 'Closing Note' },
	],
};

function AgentRuleComplianceFilters({ labelOne, labelTwo }) {
	return (
		<div className='agent-rule-compliance-filters-layout'>
			<div className='agent-rule-compliance-filters-dropdown-layout'>
				<h6 className='agent-rule-compliance-filter-dropdown'>{labelOne}</h6>
				<Select
					className='agent-rule-compliance-filter'
					options={optionsOne.options}
				/>
			</div>
			<div className='agent-rule-compliance-filters-dropdown-layout'>
				<h6 className='agent-rule-compliance-filter-dropdown'>{labelTwo}</h6>
				<Select
					className='agent-rule-compliance-filter'
					options={optionsTwo.options}
				/>
			</div>
		</div>
	);
}

export default AgentRuleComplianceFilters;
