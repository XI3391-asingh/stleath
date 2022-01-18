import React from 'react';

import { Card, Typography } from '@mui/material';

import './styles.css';
import SilenceDetectionSettings from './SilenceDetectionSettings';

function SilenceDetection({ title }) {
	return (
		<Card className='silence-detection-card-layout'>
			<div>
				<Typography variant='h6'>{title}</Typography>
			</div>
			<div className='silence-detection-card-settings'>
				<SilenceDetectionSettings />
			</div>
		</Card>
	);
}

export default SilenceDetection;
