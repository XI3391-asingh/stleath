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
		{ value: '160', label: '160' },
		{ value: '180', label: '180' },
		{ value: '200', label: '200' },
		{ value: '220', label: '220' },
		{ value: '240', label: '240' },
		{ value: '260', label: '260' },
		{ value: '280', label: '280' },
		{ value: '300', label: '300' },
		{ value: '320', label: '320' },
		{ value: '340', label: '340' },
		{ value: '360', label: '360' },
		{ value: '380', label: '380' },
		{ value: '400', label: '400' },
		{ value: '420', label: '420' },
		{ value: '440', label: '440' },
		{ value: '460', label: '460' },
		{ value: '480', label: '480' },
		{ value: '500', label: '500' },
		{ value: '520', label: '520' },
		{ value: '540', label: '540' },
		{ value: '560', label: '560' },
		{ value: '580', label: '580' },
		{ value: '600', label: '600' },
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
