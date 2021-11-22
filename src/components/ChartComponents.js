import React from 'react';

import AgentDispositionCompositionCard from './chart-cards/agent-disposition-composition-card/AgentDispositionCompositionCard';
import AgentRankingCard from './chart-cards/agent-ranking-card/AgentRankingCard';
import AgentRuleComplianceCard from './chart-cards/agent-rule-compliance-card/AgentRuleComplianceCard';
import CallCategoriesCard from './chart-cards/call-categories-card/CallCategoriesCard';
import CallCompositionCard from './chart-cards/call-composition-card/CallCompositionCard';
import DispositionCodeMixCard from './chart-cards/disposition-code-mix-card/DispositionCodeMixCard';
import SentimentCard from './chart-cards/sentiment-card/SentimentCard';
import SilenceDetectionCountChartCard from './chart-cards/silence-detection-count-chart-card/SilenceDetectionCountChartCard';
import VoiceEnergyDeviationCountCard from './chart-cards/voice-energy-deviation-count-card/VoiceEnergyDeviationCountCard';
import DashboardTable from './shared-components/tables/dashboard-table/DashboardTable';

import './style.css';

function ChartComponents() {
	return (
		<div>
			<div className='chartCardContainer'>
				<DispositionCodeMixCard />
				<SentimentCard />
				<CallCategoriesCard />
			</div>
			<div>
				<AgentDispositionCompositionCard />
			</div>
			<div className='detctionChart'>
				<SilenceDetectionCountChartCard />
				<VoiceEnergyDeviationCountCard />
			</div>
			<div>
				<AgentRankingCard />
			</div>
			<div className='ruleCompliance'>
				<AgentRuleComplianceCard />
			</div>
			<div>
				<CallCompositionCard />
				<DashboardTable />
			</div>
		</div>
	);
}

export default ChartComponents;
