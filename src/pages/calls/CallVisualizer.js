import React from 'react';

import { Card, Typography } from '@material-ui/core';
import { useDemoData } from '@mui/x-data-grid-generator';

import Comments from '../../components/calls/comments/Comments';
import Moments from '../../components/calls/moments/Moments';
import Transcription from '../../components/calls/transcription/Transcription';
import WavesurferAudioVisualizer from '../../components/calls/wavesurfer-visualizer/WavesurferAudioVisualizer';

import './styles.css';

function CallVisualizer() {
	const { data } = useDemoData({
		dataSet: 'Commodity',
		rowLength: 100,
		maxColumns: 6,
	});
	return (
		<div className='calls-page-layout'>
			<div>
				<Card className='calls-visualizer-details-card'>
					<Typography variant='h5'>Call Details</Typography>
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
