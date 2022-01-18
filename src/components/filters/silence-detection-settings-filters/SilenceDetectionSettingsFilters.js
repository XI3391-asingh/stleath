import React from 'react';

import Select from 'react-select';

import './styles.css';

const options = {
	id: '1',
	label: 'Agent Name',
	options: [
		{ value: '0.05', label: '5 sec' },
		{ value: '0.10', label: '10 sec' },
		{ value: '0.15', label: '15 sec' },
		{ value: '0.20', label: '20 sec' },
		{ value: '0.25', label: '25 sec' },
		{ value: '0.30', label: '30 sec' },
	],
};

function SilenceDetectionSettingsFilters() {
	return (
		<div>
			<Select
				options={options.options}
				className='silence-detection-settings-filters'
			/>
		</div>
	);
}

export default SilenceDetectionSettingsFilters;
