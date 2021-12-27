import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { Card } from '@mui/material';
import React, { useRef, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { WaveSurfer, WaveForm } from 'wavesurfer-react';
import { CLEAR_CALL_VISUALIZER } from '../../../store/type';

import './styles.css';

function AudioVisualizer({ path }) {
	const audioRef = React.useRef(null);
	const dispatch = useDispatch();
	// const wavesurferRef = useRef();

	useEffect(() => {
		return () => {
			// stop();
			dispatch({ type: CLEAR_CALL_VISUALIZER });
		};
	}, []);

	// const handleWSMount = (waveSurfer) => {
	// 	console.log('Path-1: ', path);
	// 	wavesurferRef.current = waveSurfer;
	// 	if (wavesurferRef.current) {
	// 		console.log('...2');
	// 		wavesurferRef.current.load(path);
	// 		wavesurferRef.current.on('ready', () => {
	// 			console.log('WaveSurfer is ready');
	// 		});
	// 		wavesurferRef.current.on('loading', (data) => {
	// 			console.log('loading --> ', data);
	// 		});
	// 		if (window) {
	// 			window.surferidze = wavesurferRef.current;
	// 		}
	// 	}
	// };

	// const play = useCallback(() => {
	// 	wavesurferRef.current.playPause();
	// 	wavesurferRef.current.skipBackward();
	// }, []);

	// const seekBack = useCallback(() => {
	// 	wavesurferRef.current.skipBackward();
	// });

	// const seekTo = useCallback(() => {
	// 	wavesurferRef.current.skipForward();
	// });

	// const seek = useCallback(() => {
	// 	wavesurferRef.current.seekTo(1);
	// });

	// const stop = useCallback(() => {
	// 	wavesurferRef.current.stop();
	// });

	return (
		<div>
			<Card className='audio-visualizer-card-layout'>
				<Typography variant='h5'>Audio Visualizer</Typography>
				<audio
					style={{ width: '100%', ariaLabel: 'small' }}
					controls
					src={path}
					ref={audioRef}
					type='audio'
				/>
				{/* <Card className='audio-visualizer-wave-card'>
					<Typography variant='body2'>Agent</Typography>
					<WaveSurfer onMount={handleWSMount}>
						<WaveForm id='waveform'></WaveForm>
					</WaveSurfer>
				</Card> */}
				{/* <div>
					<ButtonGroup
						variant='contained'
						aria-label='outlined primary button group'
					>
						<Button
							onClick={() => {
								play();
							}}
							className='audio-visualizer-card-button'
						>
							Play / Pause
						</Button>
						<Button
							onClick={() => {
								seekBack();
								seek();
							}}
							className='audio-visualizer-card-button'
						>
							Rewind
						</Button>
						<Button
							onClick={() => {
								seekTo();
							}}
							className='audio-visualizer-card-button'
						>
							Forward
						</Button>
						<Button
							onClick={() => {
								stop();
							}}
							className='audio-visualizer-card-button'
						>
							Stop
						</Button>
					</ButtonGroup>
				</div> */}
			</Card>
		</div>
	);
}
export default AudioVisualizer;
