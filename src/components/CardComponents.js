import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AnalysisCard from './analysis-cards/AnalysisCard';

import { GET_CALL_COUNT_FOR_CARDS } from '../store/type';
import indexService from '../service/index';

import './style.css';

function CardComponents() {
	const dispatch = useDispatch();
	const { callcountforcards } = useSelector((store) => store.dashboard);

	useEffect(() => {
		getCallCountforcards();
		const interval = setInterval(() => {
			getCallCountforcards();
		}, 60000);
		return () => clearInterval(interval);
	}, []);

	const getCallCountforcards = () => {
		indexService.getCallCountForCards().then((resp) => {
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
