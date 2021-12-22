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

import indexService from '../../service/index';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CALL_VISUALIZER, GET_ALL_COMMENTS } from '../../store/type';

function CallVisualizer() {
	let dateTime = moment().format('LLL');
	const path = useLocation();
	let query = new URLSearchParams(path?.search);
	let callidquery = query.get('id');
	const dispatch = useDispatch();
	const { visualizer } = useSelector((store) => store.call);
	const { data } = useDemoData({
		dataSet: 'Commodity',
		rowLength: 100,
		maxColumns: 6,
	});

	useEffect(() => {
		getCall();
		getCallDetails();
		const interval = setInterval(() => {
			getCallDetails();
			getCall();
		}, 30000);
		return () => clearInterval(interval);
	}, [callidquery]);

	const getCallDetails = () => {
		indexService.getCallDetails(callidquery).then((resp) => {
			if (resp.isSuccess) {
				dispatch({
					type: GET_ALL_COMMENTS,
					payload: resp?.data,
				});
			}
		});
	};

	const getCall = () => {
		indexService.getReport().then((resp) => {
			if (resp.isSuccess) {
				let feeddata = resp?.data;
				if (feeddata?.length) {
					let calldata = feeddata.filter(
						(resp) => resp.id === parseInt(callidquery)
					);
					if (calldata?.length) {
						dispatch({
							type: GET_CALL_VISUALIZER,
							payload: calldata[0],
						});
					}
				}
			}
		});
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
						Call Id: {visualizer?.id}
					</Typography>
				</Card>
			</div>
			<div>
				{Object?.keys(visualizer)?.length && (
					<WavesurferAudioVisualizer path={visualizer?.path} />
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
						<Comments
							callid={callidquery}
							agent_name={visualizer?.agent_name}
						/>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default CallVisualizer;
