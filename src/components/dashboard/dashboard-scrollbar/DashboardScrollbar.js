import React, { useEffect } from 'react';

import { Typography } from '@mui/material';

import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { GET_NEGATIVE_CALL_COUNT } from '../../../store/type';
import indexService from '../../../service/index';

function DashboardScrollbar() {
	const dispatch = useDispatch();
	const { negativecallcount } = useSelector((store) => store.dashboard);

	console.log(negativecallcount);

	useEffect(() => {
		getNegativeCallCount();
		const interval = setInterval(() => {
			getNegativeCallCount();
		}, 60000);
		return () => clearInterval(interval);
	}, []);

	const getNegativeCallCount = () => {
		indexService.getNegativeCallCount().then((resp) => {
			if (resp.isSuccess) {
				dispatch({
					type: GET_NEGATIVE_CALL_COUNT,
					payload: resp?.data,
				});
			}
		});
	};

	const negativecount = (value = 0) =>
		`Your ${value} calls were marked as Negative in last 7 days.`;

	return (
		<div>
			<p className='marquee'>
				<span>
					{negativecount(
						negativecallcount?.length && negativecallcount[0].totalCall
					)}
				</span>
			</p>
		</div>
	);
}

export default DashboardScrollbar;
