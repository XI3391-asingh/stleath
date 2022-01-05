import { Typography } from '@material-ui/core';
import { Card } from '@mui/material';
import React, { useRef, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { WaveSurfer, WaveForm } from 'wavesurfer-react';
import { CLEAR_CALL_VISUALIZER } from '../../../store/type';

import './styles.css';

function Visualizer({ path, currentTime }) {
	const dispatch = useDispatch();
	const wavesurferRef = useRef();
	const wavesurferRef2 = useRef();

	useEffect(() => {
		return () => {
			stop();
			stop2();
			dispatch({ type: CLEAR_CALL_VISUALIZER });
		};
	}, []);

	const handleWSMount = (waveSurfer) => {
		console.log('Path-1: ', path);
		wavesurferRef.current = waveSurfer;
		if (wavesurferRef.current) {
			console.log('...2');
			wavesurferRef.current.load(path);
			wavesurferRef.current.on('ready', () => {
				console.log('WaveSurfer is ready');
			});
			wavesurferRef.current.on('loading', (data) => {
				console.log('loading --> ', data);
			});
			wavesurferRef.current.on('audioprocess', () => {
				if (wavesurferRef.current.isPlaying()) {
					//   let nowtime = millisToMinutesAndSeconds(
					//     Math.round(wavesurferRef.current.getCurrentTime() * 1000)
					//   );
					let nowtime = Math.round(
						wavesurferRef.current.getCurrentTime() * 1000
					);
					currentTime(nowtime);
					//   console.log(nowtime);
				}
			});
			if (window) {
				window.surferidze = wavesurferRef.current;
			}
		}
	};

	// function millisToMinutesAndSeconds(millis) {
	// 	var minutes = Math.floor(millis / 60000);
	// 	var seconds = ((millis % 60000) / 1000).toFixed(0);
	// 	return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
	// }

	const handleWSMount2 = (waveSurfer) => {
		console.log('Path-2: ', path);
		wavesurferRef2.current = waveSurfer;
		if (wavesurferRef2.current) {
			console.log('...2');
			// wavesurferRef2.current.load('/audio/Simple Call.mov');
			wavesurferRef2.current.load(path);
			wavesurferRef2.current.on('ready', () => {
				console.log('WaveSurfer is ready');
			});
			wavesurferRef2.current.on('loading', (data) => {
				console.log('loading --> ', data);
			});
			if (window) {
				window.surferidze2 = wavesurferRef2.current;
			}
		}
	};

	const play = useCallback(() => {
		wavesurferRef.current.playPause();
		wavesurferRef.current.skipBackward();
	}, []);

	const play2 = useCallback(() => {
		wavesurferRef2.current.playPause();
		wavesurferRef2.current.skipBackward();
	}, []);

	const seekBack = useCallback(() => {
		wavesurferRef.current.skipBackward();
	});

	const seekBack2 = useCallback(() => {
		wavesurferRef2.current.skipBackward();
	});

	const seekTo = useCallback(() => {
		wavesurferRef.current.skipForward();
	});

	const seekTo2 = useCallback(() => {
		wavesurferRef2.current.skipForward();
	});

	const seek = useCallback(() => {
		wavesurferRef.current.seekTo(1);
	});

	const seek2 = useCallback(() => {
		wavesurferRef2.current.seekTo(1);
	});

	const stop = useCallback(() => {
		wavesurferRef.current.stop();
	});

	const stop2 = useCallback(() => {
		wavesurferRef2.current.stop();
	});

	return (
		<div>
			<Card className='audio-visualizer-card-layout'>
				<Typography variant='h5'>Audio Visualizer</Typography>
				<Card className='audio-visualizer-wave-card'>
					<Typography variant='body2'>Agent</Typography>
					<WaveSurfer onMount={handleWSMount}>
						<WaveForm id='waveform'></WaveForm>
					</WaveSurfer>
				</Card>
				<Card className='audio-visualizer-wave-card'>
					<Typography variant='body2'>Customer</Typography>
					<WaveSurfer onMount={handleWSMount2}>
						<WaveForm id='waveform2'></WaveForm>
					</WaveSurfer>
				</Card>
				<div>
					{/* <ButtonGroup
						variant='contained'
						aria-label='outlined primary button group'
					> */}
					<button
						onClick={() => {
							play();
							play2();
						}}
						className='audio-visualizer-card-button'
					>
						Play / Pause
					</button>
					<button
						onClick={() => {
							seekBack();
							seekBack2();
							seek();
							seek2();
						}}
						className='audio-visualizer-card-button'
					>
						Rewind
					</button>
					<button
						onClick={() => {
							seekTo();
							seekTo2();
						}}
						className='audio-visualizer-card-button'
					>
						Forward
					</button>
					<button
						onClick={() => {
							stop();
							stop2();
						}}
						className='audio-visualizer-card-button'
					>
						Stop
					</button>
					{/* </ButtonGroup> */}
				</div>
			</Card>
		</div>
	);
}
export default Visualizer;
