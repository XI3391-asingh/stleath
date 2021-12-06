import React, { useEffect, useState } from 'react';

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
	const [emotions, setEmotions] = useState({
		Fear: 0,
		Disappointed: 0,
		Angry: 0,
		Happy: 0,
		Surprise: 0,
	});

	const [sentiment, setSentiment] = useState({});

	useEffect(() => {
		getReport();
		getEmotionReport();
	}, []);

	const getEmotionReport = () => {
		fetch('http://13.127.135.117:8080/api/get-count-call-emotions', {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((result) => {
				if (result?.code === 200) {
					let feeddata = result?.data?.emotions;
					if (feeddata) {
						setEmotions(feeddata);
					}
				}
			})
			.catch((error) => console.log('error', error));
	};

	const getReport = () => {
		fetch('http://13.127.135.117:8080/api/get-report', {
			method: 'GET',
		})
			.then((response) => response.json())
			.then(async (result) => {
				if (result?.code === 200) {
					let feeddata = result?.data;
					if (feeddata?.length) {
						let feedbackdata = [];
						feeddata.map((data) => {
							if (data['feedback']) {
								feedbackdata.push(data['feedback']);
							}
						});
						let sentimentdata = await getUniqueDataCount(feedbackdata);
						setSentiment(sentimentdata);
					}
				}
			})
			.catch((error) => console.log('error', error));
	};

	function getUniqueDataCount(objArr) {
		var uniqueList = [...new Set(objArr)];

		var dataSet = {};
		for (var i = 0; i < uniqueList.length; i++) {
			dataSet[uniqueList[i]] = objArr.filter((x) => x == uniqueList[i]).length;
		}

		return dataSet;
	}

	return (
		<div>
			<div className='chartCardContainer'>
				<DispositionCodeMixCard data={emotions} />
				<SentimentCard data={sentiment} />
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
			<div style={{ display: 'flex' }}>
				<DashboardTable />
				<CallCompositionCard />
			</div>
		</div>
	);
}

export default ChartComponents;
