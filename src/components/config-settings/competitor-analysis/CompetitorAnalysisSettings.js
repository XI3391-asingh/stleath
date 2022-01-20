import React, { useState } from 'react';

import Select from 'react-select';

import { Typography } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import './styles.css';

const rate = {
	id: '1',
	label: 'Rate',
	options: [
		{ value: '0.05', label: 5 },
		{ value: '0.10', label: 10 },
		{ value: '0.15', label: 15 },
		{ value: '0.20', label: 20 },
		{ value: '0.25', label: 25 },
		{ value: '0.30', label: 30 },
		{ value: '0.35', label: 35 },
		{ value: '0.40', label: 40 },
		{ value: '0.45', label: 45 },
		{ value: '0.50', label: 50 },
		{ value: '0.55', label: 55 },
		{ value: '0.60', label: 60 },
		{ value: '0.65', label: 65 },
		{ value: '0.70', label: 70 },
		{ value: '0.75', label: 75 },
		{ value: '0.80', label: 80 },
		{ value: '0.85', label: 85 },
		{ value: '0.90', label: 90 },
		{ value: '0.95', label: 95 },
		{ value: '1', label: 100 },
	],
};

function CompetitorAnalysisSettings() {
	return (
		<div className='competitor-analysis-portion'>
			<div className='competitor-analysis-layout'>
				<Typography variant='subtitle2' className='competitor-analysis-label'>
					Labels & Threshold:
				</Typography>
				<input type='text' className='competitor-analysis-input'></input>
				<Select
					menuPlacement='auto'
					className='competitor-analysis-filter'
					options={rate.options.label}
				/>
				<HighlightOffIcon className='dashboard-details-dropdown-delete-button' />
			</div>
		</div>
	);
}

export default CompetitorAnalysisSettings;
