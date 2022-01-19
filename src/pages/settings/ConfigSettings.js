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
					<CompetitorAnalysis title='Escalation' />
				</div>
				<div className='config-page-settings-cards'>
					<ServiceIssue
						title='Service Issue'
						data={[
							'Called so many times',
							'Issue is still not resolved',
							'Raised this problem again and again',
							'Facing this issue again',
						]}
						defaultdata={[
							'Called so many times',
							'Issue is still not resolved',
							'Raised this problem again and again',
							'Facing this issue again',
						]}
					/>
					<ServiceIssue
						title='Product Issue'
						data={[
							'card stops working',
							'Not able to make any transactions',
							'charges are more',
						]}
						defaultdata={[
							'card stops working',
							'Not able to make any transactions',
							'charges are more',
						]}
					/>
				</div>
				<div className='config-page-settings-cards'>
					<ServiceIssue
						title='Hold Time Violations'
						data={[]}
						defaultdata={[]}
					/>
					<ServiceIssue
						title='Repeat Calls Volume'
						data={['Stop calling me', 'Why are you calling again and again']}
						defaultdata={[
							'Stop calling me',
							'Why are you calling again and again',
						]}
					/>
				</div>
				<div className='config-page-settings-cards'>
					<ServiceIssue title='Opening Call' data={[]} defaultdata={[]} />
					<ServiceIssue
						title='Closing Call'
						data={[
							'Thank you',
							'Is there anything that I can help you with?',
							'Thank you for calling',
							'Thank you for your valuable time',
							'I hope I was able to solve your problem',
							'I hope I was able to solve your query',
						]}
						defaultdata={[
							'Thank you',
							'Is there anything that I can help you with?',
							'Thank you for calling',
						]}
					/>
				</div>
				<div className='config-page-settings-cards'>
					<ServiceIssue
						title='Warranty & Others'
						data={['Out of warranty']}
						defaultdata={['Out of warranty']}
					/>
					<ServiceIssue title='Pricing' data={[]} defaultdata={[]} />
				</div>
				<div className='config-page-settings-cards'>
					<VoiceEnergyCard title='Voice Energy' />
					<SilenceDetection title='Silence Detection' />
				</div>
				<div className='config-page-settings-cards'>
					<ServiceIssue
						title='Agent Identification'
						data={[]}
						defaultdata={[]}
					/>
				</div>
				<div>
					<button className='config-page-settings-save-button'>SAVE</button>
				</div>
			</Card>
		</div>
	);
}

export default ConfigSettings;
