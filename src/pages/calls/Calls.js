import React, { useEffect, useState } from 'react';

import { Card } from '@mui/material';

import SideBar from '../../components/side-bar/SideBar';
import CallsTable from '../../components/shared-components/tables/calls-table/CallsTable';

import './styles.css';
import { useLocation } from 'react-router-dom';

function Calls() {
	const path = useLocation();
	let query = new URLSearchParams(path?.search);
	let feedbackquery = query.get('feedback');
	const [call, setCall] = useState({
		total: 0,
		filter: 0,
		data: [],
	});
	console.log(feedbackquery);

	useEffect(() => {
		query.get('call_emotion') ? getCallEmotion() : getCall();
	}, []);

	const getCall = () => {
		fetch('http://35.200.228.197:4000/api/get-report', {
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
						let calldata = [];
						if (feedbackquery) {
							calldata = feeddata.filter(
								(resp) => resp.feedback === `${feedbackquery} Feedback`
							);
						} else {
							calldata = feeddata;
						}

						setCall({
							total: feeddata?.length,
							filter: calldata?.length,
							data: calldata,
						});
					}
				}
			})
			.catch((error) => console.log('error', error));
	};

	const getCallEmotion = () => {
		fetch(
			'http://35.200.228.197:4000/api/get-report?call_emotion=' +
				query.get('call_emotion'),
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + localStorage.getItem('access_token'),
				},
			}
		)
			.then((response) => response.json())
			.then(async (result) => {
				if (result?.code === 200) {
					let feeddata = result?.data;
					if (feeddata?.length) {
						setCall({
							total: feeddata?.length,
							filter: feeddata?.length,
							data: feeddata,
						});
					}
				}
			})
			.catch((error) => console.log('error', error));
	};

	return (
		<div className='calls-page-layout'>
			<Card className='calls-page-card-body-layout'>
				<div className='calls-page-card-body-design'>
					<div>
						<SideBar />
					</div>
					<div className='calls-page-card-main-body'>
						<div className='calls-page-call-details'>
							{call?.filter} of {call?.total} Calls
						</div>
						<hr className='calls-page-divider' />
						<div className='calls-page-table-layout'>
							<CallsTable data={call?.data} />
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default Calls;
