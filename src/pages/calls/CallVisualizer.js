import React from 'react';

import { Card, Typography } from '@material-ui/core';
import { useDemoData } from '@mui/x-data-grid-generator';
// import WavePlayer from 'waveplayer';

import Comments from '../../components/calls/comments/Comments';
import Moments from '../../components/calls/moments/Moments';
import Transcription from '../../components/calls/transcription/Transcription';
import Visualizer from '../../components/calls/visualizer/Visualizer';

import './styles.css';

function CallVisualizer() {
	// let wavePlayer = new WavePlayer({
	// 	container: '#waveform',
	// 	barWidth: 4,
	// 	barGap: 1,
	// 	height: 128,
	// });

	// wavePlayer.load('url-to-some-audio-file.mp3').then(() => wavePlayer.play());

	// wavePlayer.createPlaylist(['1.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3']);
	// wavePlayer.on('waveplayer:playlist:ready', (me) => {
	// 	me.play();
	// });

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
				<Visualizer />
				{/* <WavePlayer /> */}
				{/* <AudioVisualizer /> */}
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
