import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AnalysisCard from './analysis-cards/AnalysisCard';

import { GET_CALL_COUNT_FOR_CARDS } from '../store/type';
import indexService from '../service/index';

import './style.css';
import moment from 'moment';

function CardComponents({ triggerRefresh }) {
	const dispatch = useDispatch();
	const { callcountforcards } = useSelector((store) => store.dashboard);
	const { filter } = useSelector((store) => store);
	useEffect(() => {
		getCallCountforcards();
		const interval = setInterval(() => {
			getCallCountforcards();
		}, 60000);
		return () => clearInterval(interval);
	}, [triggerRefresh]);

	const generatePayload = () => {
		const payload = {};
		if (filter) {
			if (filter.fromDate && filter.fromDate.length !== 0) {
				payload['from_date'] = moment(filter.fromDate).format('YYYY-MM-DD'); //"2021-02-23",
			}
			if (filter.toDate && filter.toDate.length !== 0) {
				payload['to_date'] = moment(filter.toDate).format('YYYY-MM-DD'); //"2021-02-23",
			}
			if (
				filter.isCallOpenedWithCompliance !== null &&
				filter.isCallOpenedWithCompliance?.length !== 0
			) {
				payload['is_call_opened_with_compliance'] =
					filter.isCallOpenedWithCompliance;
			}
			if (
				filter.isCallClosedWithCompliance !== null &&
				filter.isCallClosedWithCompliance?.length !== 0
			) {
				payload['is_call_closed_with_compliance'] =
					filter.isCallClosedWithCompliance;
			}
			if (
				filter.isTotalCompliance !== null &&
				filter.isTotalCompliance?.length !== 0
			) {
				payload['is_compliance_call'] = filter.isTotalCompliance;
			}
			if (
				filter.isServiceIssue !== null &&
				filter.isServiceIssue?.length !== 0
			) {
				payload['service_issue'] = filter.isServiceIssue;
			}
			if (
				filter.isProductIssue !== null &&
				filter.isProductIssue?.length !== 0
			) {
				payload['product_issue'] = filter.isProductIssue;
			}
			if (filter.agentName && filter.agentName !== 'All') {
				payload['agent_name'] = filter.agentName;
			}
			return payload;
		}
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
