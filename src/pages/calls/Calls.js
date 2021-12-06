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
		getCall();
	}, []);

	const getCall = () => {
		fetch('http://13.127.135.117:8080/api/get-report', {
			method: 'GET',
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
