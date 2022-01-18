import { Card, Typography } from '@mui/material';
import React from 'react';
import VoiceEnergySettingsFilters from '../../filters/voice-energy-settings-filters/VoiceEnergySettingsFilters';

import './styles.css';

function VoiceEnergyCard({ title }) {
	return (
		<Card className='voice-energy-card-layout'>
			<Typography variant='h6'>{title}</Typography>
			<VoiceEnergySettingsFilters />
		</Card>
	);
}

export default VoiceEnergyCard;
