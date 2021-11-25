import React from 'react';

import { Card, Typography } from '@material-ui/core';
import { useDemoData } from '@mui/x-data-grid-generator';

import Comments from '../../components/calls/comments/Comments';
import Moments from '../../components/calls/moments/Moments';
import Transcription from '../../components/calls/transcription/Transcription';
import WavesurferAudioVisualizer from '../../components/calls/wavesurfer-visualizer/WavesurferAudioVisualizer';

import './styles.css';
import moment from 'moment';

function CallVisualizer() {
	let dateTime = moment().format('LLL');
	// let dateTime2 = moment().format('LLL');
	let duration = moment().set({ minute: 20, second: 33 });
	const { data } = useDemoData({
		dataSet: 'Commodity',
		rowLength: 100,
		maxColumns: 6,
	});
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
				</Card>
			</div>
			<div>
				<WavesurferAudioVisualizer />
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
						<Comments />
					</Card>
				</div>
			</div>
		</div>
	);
}

export default CallVisualizer;
