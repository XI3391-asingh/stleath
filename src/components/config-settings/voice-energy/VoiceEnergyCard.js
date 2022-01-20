import { Card, Typography } from '@mui/material';
import React from 'react';
import VoiceEnergySettingsFilters from '../../filters/voice-energy-settings-filters/VoiceEnergySettingsFilters';

import './styles.css';

function VoiceEnergyCard({ title }) {
	return (
		<Card className='voice-energy-card-layout'>
			<Typography variant='h6'>{title}</Typography>
			<div className='voice-energy-card-dropdown'>
				<VoiceEnergySettingsFilters />
			</div>
		</Card>
	);
}

export default VoiceEnergyCard;
