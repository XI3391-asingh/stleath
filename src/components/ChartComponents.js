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
	const [callCountByDuration, setCallCountByDuration] = useState({});
	// const [agent_name, setAgent_name] = useState({});
	// const [totalCall, setTotalCall] = useState({});
	// const [data, setData] = useState(data)

	// useEffect(() => {
	// 	getReport();
	// 	getEmotionReport();
	// }, []);

	useEffect(() => {
		getReport();
		getEmotionReport();
		// getCallReport();
		getCallCountByDuration();
		const interval = setInterval(() => {
			getReport();
			getEmotionReport();
			// getCallReport();
			getCallCountByDuration();
		}, 60000);
		return () => clearInterval(interval);
	}, []);

	const getEmotionReport = () => {
		fetch('http://13.127.135.117:8080/api/get-count-call-emotions', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('access_token'),
			},
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

	// const getCallReport = () => {
	// fetch('http://13.127.135.117:8080/api/get-call-count', {
	// 	method: 'GET',
	// })
	// 	.then((response) => response.json())
	// 	.then((result) => {
	// 		if (result?.code === 200) {
	// 			let callcount = result?.data;
	// 			if (callcount) {
	// 				setTotalCall(callcount);
	// 			}
	// 		}
	// 	});
	// .catch((error) => console.log('error', error));
	// 	var requestOptions = {
	// 		method: 'POST',
	// 		redirect: 'follow',
	// 	};

	// 	fetch('http://13.127.135.117:8080/api/get-call-count', requestOptions)
	// 		.then((response) => response.json())
	// 		.then((result) => {
	// 			// if (result?.code === 200) {
	// 				// let callcount = result?.data;
	// 				// if (callcount) {
	// 				// 	setTotalCall(callcount);
	// 				// }
	// 				// setAgent_name([result?.data]);
	// 				// setTotalCall([result?.data]);
	// 				setAgent_name(result?.data);
	// 				setTotalCall(result?.data);
	// 			// }
	// 		})
	// 		.catch((error) => console.log('error', error));
	// };

	const getReport = () => {
		fetch('http://13.127.135.117:8080/api/get-report', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('access_token'),
			},
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

	const getCallCountByDuration = () => {
		fetch('http://13.127.135.117:8080/api/get-call-count-by-duration', {
			method: 'post',
		})
			.then((response) => response.json())
			.then((result) => {
				if (result?.code === 200) {
					setCallCountByDuration(result?.data);
				}
			})
			.catch((error) => console.log('error', error));
	};

	return (
		<div>
			<div className='chartCardContainer'>
				<SentimentCard data={sentiment} />
				<DispositionCodeMixCard data={emotions} />
				<CallCategoriesCard data={callCountByDuration} />
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
				<DashboardTable
				// data={(totalCall, agent_name)}
				/>
				<CallCompositionCard />
			</div>
		</div>
	);
}

export default ChartComponents;
