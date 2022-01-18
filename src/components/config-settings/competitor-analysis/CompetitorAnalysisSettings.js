import React, { useState } from 'react';

import Select from 'react-select';

import { Typography } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import './styles.css';

const rate = {
	id: '1',
	label: 'Rate',
	options: [
		{ value: '1', label: 5 },
		{ value: '2', label: 10 },
		{ value: '3', label: 15 },
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
					options={rate.options}
				/>
				<HighlightOffIcon className='dashboard-details-dropdown-delete-button' />
			</div>
		</div>
	);
}

export default CompetitorAnalysisSettings;
