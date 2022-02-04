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
import moment from 'moment';

function ChartComponents({
	triggerRefresh,
	start_date,
	to_date,
	agent_name,
	product_issue,
	service_issue,
	call_opened,
	call_closed,
	total_compliance,
}) {
	const dispatch = useDispatch();

	const {
		emotions,
		sentiment,
		callcountbyduration,
		callcountbyholdviolation,
		callcomposition,
		callcountvoiceenergydeviation,
	} = useSelector((store) => store.dashboard);
	const { filter } = useSelector((store) => store);

	// Fetching filter store
	// const {
	// 	fromDate,
	// 	toDate,
	// 	agentName,
	// 	isProductIssue,
	// 	isServiceIssue,
	// 	isCallOpenedWithCompliance,
	// 	isCallClosedWithCompliance,
	// 	isTotalCompliance,
	// } = useSelector((store) => store.filter);

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
	}, [triggerRefresh]);

	const generatePayload = () => {
		/*	const payload = {
			from_date: new Date(start_date).toISOString().slice(0, 10), //"2021-02-23",
			to_date: new Date(to_date).toISOString().slice(0, 10), //"2021-03-23",
			// "agent_name": agentName,
			// is_call_opened_with_compliance: call_opened ? 1 : 0,
			// is_call_closed_with_compliance: call_closed ? 1 : 0,
			// is_compliance_call: total_compliance ? 1 : 0,
			// service_issue: service_issue ? 1 : 0,
			// product_issue: product_issue ? 1 : 0,
		};
		if (agent_name !== 'All') {
			payload['agent_name'] = agent_name;
		}

		if (filter.is_call_opened_with_compliance) {
			payload.is_call_opened_with_compliance =
				filter.is_call_opened_with_compliance;
		}

		if (filter.is_call_closed_with_compliance) {
			payload.is_call_closed_with_compliance =
				filter.is_call_closed_with_compliance;
		}

		if (filter.is_compliance_call) {
			payload.is_compliance_call = filter.is_compliance_call;
		}

		if (filter.service_issue) {
			payload.service_issue = filter.service_issue;
		}

		if (filter.product_issue) {
			payload.product_issue = filter.product_issue;
		}	*/
		const payload = {};
		if (start_date && start_date.length !== 0) {
			payload['from_date'] = moment(start_date).format('YYYY-MM-DD'); //"2021-02-23",
			//   payload["from_date"] = new Date(start_date).toISOString().slice(0, 10); //"2021-02-23",
		}
		if (to_date && to_date.length !== 0) {
			payload['to_date'] = moment(to_date).format('YYYY-MM-DD'); //"2021-02-23",
		}
		if (call_opened.length !== 0) {
			payload['is_call_opened_with_compliance'] = call_opened;
		}
		if (call_closed.length !== 0) {
			payload['is_call_closed_with_compliance'] = call_closed;
		}
		if (total_compliance.length !== 0) {
			payload['is_compliance_call'] = total_compliance;
		}
		if (service_issue.length !== 0) {
			payload['service_issue'] = service_issue;
		}
		if (product_issue.length !== 0) {
			payload['product_issue'] = product_issue;
		}
		if (agent_name !== 'All') {
			payload['agent_name'] = agent_name;
		}
		return payload;
	};

	const getEmotionReport = () => {
		indexService.getEmotionReport(generatePayload()).then((resp) => {
			if (resp.isSuccess) {
				dispatch({
					type: GET_COUNT_CALL_EMOTION,
					payload: resp?.data?.emotions,
				});
			}
		});
	};

	const getReport = () => {
		indexService.getReport(generatePayload()).then(async (resp) => {
			if (resp.isSuccess) {
				let feeddata = resp?.data;
				let sentimentdata = {};
				if (feeddata?.length) {
					let feedbackdata = [];
					feeddata.map((data) => {
						if (data['feedback']) {
							feedbackdata.push(data['feedback']);
						}
					});
					sentimentdata = await getUniqueDataCount(feedbackdata);
				}
				dispatch({
					type: GET_CALL_REPORT,
					payload: sentimentdata,
				});
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
		indexService.getCallCountByDuration(generatePayload()).then((resp) => {
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
				<VoiceEnergyDeviationCountCard data={callcountvoiceenergydeviation} />
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
