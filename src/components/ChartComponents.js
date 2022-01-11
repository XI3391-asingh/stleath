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
import indexService from '../service/index';
import { useDispatch, useSelector } from 'react-redux';
import {
	GET_CALL_REPORT,
	GET_COUNT_CALL_EMOTION,
	GET_CALL_COUNT_BY_DURATION,
	GET_CALL_COUNT_BY_HOLD_VIOLATION,
	GET_CALL_COMPOSITION,
} from '../store/type';

function ChartComponents() {
	const dispatch = useDispatch();
	const {
		emotions,
		sentiment,
		callcountbyduration,
		callcountbyholdviolation,
		callcomposition,
	} = useSelector((store) => store.dashboard);
	useEffect(() => {
		getReport();
		getEmotionReport();
		getCallCountByDuration();
		getCallCountByHoldViolation();
		getCallCountCompliance();
		const interval = setInterval(() => {
			getReport();
			getEmotionReport();
			getCallCountByDuration();
			getCallCountByHoldViolation();
			getCallCountCompliance();
		}, 60000);
		return () => clearInterval(interval);
	}, []);

	const getEmotionReport = () => {
		indexService.getEmotionReport().then((resp) => {
			if (resp.isSuccess) {
				dispatch({
					type: GET_COUNT_CALL_EMOTION,
					payload: resp?.data?.emotions,
				});
			}
		});
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
		indexService.getReport().then(async (resp) => {
			if (resp.isSuccess) {
				let feeddata = resp?.data;
				if (feeddata?.length) {
					let feedbackdata = [];
					feeddata.map((data) => {
						if (data['feedback']) {
							feedbackdata.push(data['feedback']);
						}
					});
					let sentimentdata = await getUniqueDataCount(feedbackdata);
					dispatch({
						type: GET_CALL_REPORT,
						payload: sentimentdata,
					});
				}
			}
		});
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
		indexService.getCallCountByDuration().then((resp) => {
			if (resp.isSuccess) {
				dispatch({
					type: GET_CALL_COUNT_BY_DURATION,
					payload: resp?.data,
				});
			}
		});
	};

	const getCallCountByHoldViolation = () => {
		indexService.getCallCountByHoldViolation().then((resp) => {
			if (resp.isSuccess) {
				dispatch({
					type: GET_CALL_COUNT_BY_HOLD_VIOLATION,
					payload: resp?.data,
				});
			}
		});
	};

	const getCallCountCompliance = () => {
		indexService.getCallCountCompliance().then((resp) => {
			if (resp.isSuccess) {
				dispatch({
					type: GET_CALL_COMPOSITION,
					payload: resp?.data,
				});
			}
		});
	};

	return (
		<div>
			<div className='chartCardContainer'>
				<SentimentCard data={sentiment} />
				<DispositionCodeMixCard data={emotions} />
				<CallCategoriesCard data={callcountbyduration} />
			</div>
			<div style={{ display: 'flex' }}>
				<DashboardTable
				// data={(totalCall, agent_name)}
				/>
				<CallCompositionCard callcompositiondata={callcomposition} />
			</div>
			<div>
				<AgentDispositionCompositionCard />
			</div>
			<div className='detctionChart'>
				<SilenceDetectionCountChartCard data={callcountbyholdviolation} />
				<VoiceEnergyDeviationCountCard />
			</div>
			<div>
				<AgentRankingCard />
			</div>
			<div className='ruleCompliance'>
				<AgentRuleComplianceCard />
			</div>
		</div>
	);
}

export default ChartComponents;
