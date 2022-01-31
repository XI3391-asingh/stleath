import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AnalysisCard from './analysis-cards/AnalysisCard';

import { GET_CALL_COUNT_FOR_CARDS } from '../store/type';
import indexService from '../service/index';

import './style.css';

function CardComponents({
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
	const { callcountforcards } = useSelector((store) => store.dashboard);

	// Fetching filter store
	//   const {
	//     fromDate,
	//     toDate,
	//     agentName,
	//     isProductIssue,
	//     isServiceIssue,
	//     isCallOpenedWithCompliance,
	//     isCallClosedWithCompliance,
	//     isTotalCompliance,
	//   } = useSelector((store) => store.filter);

	useEffect(() => {
		getCallCountforcards();
		const interval = setInterval(() => {
			getCallCountforcards();
		}, 60000);
		return () => clearInterval(interval);
	}, [triggerRefresh]);

	const generatePayload = () => {
		const payload = {
			from_date: new Date(start_date).toISOString().slice(0, 10), //"2021-02-23",
			to_date: new Date(to_date).toISOString().slice(0, 10), //"2021-03-23",
			// "agent_name": agentName,
			is_call_opened_with_compliance: call_opened ? 1 : 0,
			is_call_closed_with_compliance: call_closed ? 1 : 0,
			is_compliance_call: total_compliance ? 1 : 0,
			service_issue: service_issue ? 1 : 0,
			product_issue: product_issue ? 1 : 0,
		};
		if (agent_name !== 'All') {
			payload['agent_name'] = agent_name;
		}
		return payload;
	};

	const getCallCountforcards = () => {
		indexService.getCallCountForCards(generatePayload()).then((resp) => {
			if (resp.isSuccess) {
				dispatch({
					type: GET_CALL_COUNT_FOR_CARDS,
					payload: resp?.data,
				});
			}
		});
	};

	return (
		<div>
			<div className='container'>
				<AnalysisCard data={callcountforcards} />
			</div>
		</div>
	);
}

export default CardComponents;
