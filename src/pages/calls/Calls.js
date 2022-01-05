import React, { useEffect, useState } from 'react';

import { Card } from '@mui/material';

import CallsTable from '../../components/shared-components/tables/calls-table/CallsTable';

import './styles.css';
import { useLocation } from 'react-router-dom';

import indexService from '../../service/index';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_CALLS } from '../../store/type';
import SidebarFilters from '../../components/filters/sidebar-filters/SidebarFilters';

function Calls() {
	const path = useLocation();
	const dispatch = useDispatch();
	const { calls } = useSelector((store) => store.call);
	let query = new URLSearchParams(path?.search);
	let feedbackquery = query.get('feedback');

	useEffect(() => {
		getCall();
	}, []);

	const getCall = () => {
		indexService
			.getReport(query.get('call_emotion') ? query.get('call_emotion') : '')
			.then((resp) => {
				if (resp.isSuccess) {
					let feeddata = resp?.data;
					if (feeddata?.length) {
						let calldata = [];
						if (feedbackquery) {
							calldata = feeddata.filter(
								(resp) => resp.feedback === `${feedbackquery} Feedback`
							);
						} else {
							calldata = feeddata;
						}
						dispatch({
							type: GET_ALL_CALLS,
							payload: {
								total: feeddata?.length,
								filter: calldata?.length,
								data: calldata,
							},
						});
					}
				}
			});
	};

	return (
		<div className='calls-page-layout'>
			<Card className='calls-page-card-body-layout'>
				<div className='calls-page-card-body-design'>
					<div>
						<SidebarFilters />
					</div>
					<div className='calls-page-card-main-body'>
						<div className='calls-page-call-details'>
							{calls?.filter} of {calls?.total} Calls
						</div>
						<hr className='calls-page-divider' />
						<div className='calls-page-table-layout'>
							{calls?.data?.length && <CallsTable data={calls?.data} />}
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default Calls;
