import React, { useState } from 'react';

import { Card, Typography } from '@mui/material';

import './styles.css';
import CompetitorAnalysisSettings from './CompetitorAnalysisSettings';
import AddMoreButton from '../../buttons/add-more-button/AddMoreButton';

function CompetitorAnalysis({ title }) {
	return (
		<Card className='competitor-card-layout'>
			<Typography variant='h6' className='competitor-card-heading'>
				{title}
			</Typography>
			<div className='competitor-card-settings'>
				<CompetitorAnalysisSettings />
				<CompetitorAnalysisSettings />
				<CompetitorAnalysisSettings />
				<CompetitorAnalysisSettings />
				<CompetitorAnalysisSettings />
			</div>
			{/* <AddMoreButton /> */}
			<div>
				<button
					className='competitor-card-button'
					// onClick={() => handleAddFields()}
				>
					+ ADD MORE
				</button>
			</div>
		</Card>
	);
}

export default CompetitorAnalysis;
