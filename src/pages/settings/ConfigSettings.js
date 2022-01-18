import React from 'react';

import { Card, Typography } from '@mui/material';

import './styles.css';
import CompetitorAnalysis from '../../components/config-settings/competitor-analysis/CompetitorAnalysis';
import ServiceIssue from '../../components/config-settings/service-issue/ServiceIssue';
import VoiceEnergyCard from '../../components/config-settings/voice-energy/VoiceEnergyCard';
import SilenceDetection from '../../components/config-settings/silence-detection/SilenceDetection';

function ConfigSettings() {
	return (
		<div className='config-settings-page-layout'>
			<Card className='config-page-card-layout'>
				<Typography variant='h5'>Configuration Settings</Typography>
				<div className='config-page-settings-cards'>
					<CompetitorAnalysis title='Competitor Analysis' />
					<ServiceIssue title='Service Issue' />
				</div>
				<div className='config-page-settings-cards'>
					<ServiceIssue title='Product Issue' />
					<ServiceIssue title='Warranty & Others' />
				</div>
				<div className='config-page-settings-cards'>
					<ServiceIssue title='Hold Time Violations' />
					<ServiceIssue title='Repeat Calls Volume' />
				</div>
				<div className='config-page-settings-cards'>
					<ServiceIssue title='Opening Call' />
					<ServiceIssue title='Closing Call' />
				</div>
				<div className='config-page-settings-cards'>
					<ServiceIssue title='Escalation' />
					<ServiceIssue title='Pricing' />
				</div>
				<div className='config-page-settings-cards'>
					<VoiceEnergyCard title='Voice Energy' />
					<SilenceDetection title='Silence Detection' />
				</div>
			</Card>
		</div>
	);
}

export default ConfigSettings;
