import React, { useEffect } from 'react';
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
	GET_CALL_COUNT_FOR_VOICE_ENERGY_DEVIATION,
} from '../store/type';
import { Grid } from '@mui/material';

function ChartComponents() {
	const dispatch = useDispatch();
	const {
		emotions,
		sentiment,
		callcountbyduration,
		callcountbyholdviolation,
		callcomposition,
		callcountvoiceenergydeviation,
	} = useSelector((store) => store.dashboard);

	useEffect(() => {
		getReport();
		getEmotionReport();
		getCallCountByDuration();
		getCallCountByHoldViolation();
		getCallCountCompliance();
		getCallCountVoiceEnergyDeviation();
		const interval = setInterval(() => {
			getReport();
			getEmotionReport();
			getCallCountByDuration();
			getCallCountByHoldViolation();
			getCallCountCompliance();
			getCallCountVoiceEnergyDeviation();
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
				let callcountcompliancedata = resp?.data;

				if (callcountcompliancedata?.length) {
					for (let i = 0; i < callcountcompliancedata.length; i++) {
						callcountcompliancedata[i].totalCallCompliance = (
							(callcountcompliancedata[i].totalCallCompliance /
								callcountcompliancedata[i].totalCall) *
							100
						).toFixed(2);
						callcountcompliancedata[i].totalClosingCompliance = (
							(callcountcompliancedata[i].totalClosingCompliance /
								callcountcompliancedata[i].totalCall) *
							100
						).toFixed(2);
						callcountcompliancedata[i].totalEscalation = (
							(callcountcompliancedata[i].totalEscalation /
								callcountcompliancedata[i].totalCall) *
							100
						).toFixed(2);
						callcountcompliancedata[i].totalOpeningCompliance = (
							(callcountcompliancedata[i].totalOpeningCompliance /
								callcountcompliancedata[i].totalCall) *
							100
						).toFixed(2);
					}
					dispatch({
						type: GET_CALL_COMPOSITION,
						payload: callcountcompliancedata,
					});
				}
			}
		});
	};

	const getCallCountVoiceEnergyDeviation = () => {
		indexService.getCallCountForVoiceEnergyDeviation().then((resp) => {
			if (resp.isSuccess) {
				dispatch({
					type: GET_CALL_COUNT_FOR_VOICE_ENERGY_DEVIATION,
					payload: resp?.data,
				});
			}
		});
	};

	return (
		<div>
			<Grid container spacing={2}>
				<Grid item xs={9}>
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
						<VoiceEnergyDeviationCountCard
							data={callcountvoiceenergydeviation}
						/>
					</div>
					<div>
						<AgentRankingCard />
					</div>
					<div className='ruleCompliance'>
						<AgentRuleComplianceCard />
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default ChartComponents;
