import React from 'react';
import Select from 'react-select';
import './styles.css';

const options = {
	id: '1',
	label: 'Agent Name',
	options: [
		{ value: '100', label: '100' },
		{ value: '120', label: '120' },
		{ value: '140', label: '140' },
		{ value: '140', label: '140' },
		{ value: '160', label: '160' },
		{ value: '180', label: '180' },
		{ value: '200', label: '200' },
		{ value: '220', label: '220' },
		{ value: '240', label: '240' },
		{ value: '260', label: '260' },
	],
};

function VoiceEnergySettingsFilters() {
	return (
		<div>
			<Select
				options={options.options}
				className='voice-energy-settings-filters'
			/>
		</div>
	);
}

export default VoiceEnergySettingsFilters;
