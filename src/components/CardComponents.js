import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AnalysisCard from './analysis-cards/AnalysisCard';

import { GET_CALL_COUNT_FOR_CARDS } from '../store/type';
import indexService from '../service/index';

import './style.css';
import moment from 'moment';

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
