import React, { useEffect, useState } from 'react';

import { Card, Typography } from '@material-ui/core';
import { useDemoData } from '@mui/x-data-grid-generator';

import Comments from '../../components/calls/comments/Comments';
import Moments from '../../components/calls/moments/Moments';
import Transcription from '../../components/calls/transcription/Transcription';
import WavesurferAudioVisualizer from '../../components/calls/wavesurfer-visualizer/WavesurferAudioVisualizer';

import './styles.css';
import moment from 'moment';
import { useLocation } from 'react-router-dom';

function CallVisualizer() {
	let dateTime = moment().format('LLL');
	// let dateTime2 = moment().format('LLL');
	let duration = moment().set({ minute: 20, second: 33 });
	const { data } = useDemoData({
		dataSet: 'Commodity',
		rowLength: 100,
		maxColumns: 6,
	});

	const path = useLocation();
	let query = new URLSearchParams(path?.search);
	let callidquery = query.get('id');
	const [call, setCall] = useState({});

	useEffect(() => {
		getCall();
	}, [callidquery]);

	const getCall = () => {
		fetch('http://13.127.135.117:8080/api/get-report', {
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
						let calldata = feeddata.filter(
							(resp) => resp.id === parseInt(callidquery)
						);
						if (calldata?.length) {
							console.log(calldata);
							setCall(calldata[0]);
						}
					}
				}
			})
			.catch((error) => console.log('error', error));
	};

	return (
		<div className='calls-page-layout'>
			<div>
				<Card className='calls-visualizer-details-card'>
					<Typography
						variant='button'
						className='calls-visualizer-details-text'
					>
						Rajat Bansal on {dateTime} for 30:37 minutes
					</Typography>
					<Typography
						variant='button'
						className='calls-visualizer-call-id-text'
					>
						Call Id: {call?.id}
					</Typography>
				</Card>
			</div>
			<div>
				{Object?.keys(call)?.length && (
					<WavesurferAudioVisualizer path={call?.path} />
				)}
			</div>
			<div className='calls-visualizer-card-list'>
				<div className='calls-visualizer-moments-card'>
					<Moments />
				</div>
				<div className='calls-visualizer-transcription-card'>
					<Transcription />
				</div>
				<div className='calls-visualizer-comments-card-layout'>
					<Card>
						<Comments callid={callidquery} agent_name={call?.agent_name} />
					</Card>
				</div>
			</div>
		</div>
	);
}

export default CallVisualizer;
