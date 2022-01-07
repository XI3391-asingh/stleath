import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { Card } from '@mui/material';
import React, { useRef, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { WaveSurfer, WaveForm } from 'wavesurfer-react';
import { CLEAR_CALL_VISUALIZER } from '../../../store/type';

import './styles.css';

function AudioVisualizer({ path, currentTime, isplayaudio }) {
	const audioRef = React.useRef(null);
	const dispatch = useDispatch();
	// const wavesurferRef = useRef();

	useEffect(() => {
		// Everything around if statement
		if (audioRef && audioRef.current) {
			audioRef.current.addEventListener('play', () => {
				isplayaudio(true);
			});
			audioRef.current.addEventListener('ended', () => {
				isplayaudio(false);
			});

			return () => {
				// audioRef.current.removeEventListener(...)
			};
		}
	});

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

	const onPlaying = () => {
		let nowtime = Math.round(audioRef.current.currentTime);
		currentTime(nowtime);
		// setSeekValue(
		//   (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
		// );
	};

	return (
		<div>
			<Card className='audio-visualizer-card-layout'>
				<Typography variant='h5'>Audio Visualizer</Typography>
				<div>
					<div className='audio-visualizer-type mt-25'>
						<div className='audio-visualizer-agent-text'>Agent</div>
						<div className='audio-visualizer-agent'>
							<div className='audio-visualizer-box-agent w-4'></div>&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-2'></div>&nbsp;
							<div className='audio-visualizer-box-agent w-4'></div>&nbsp;
							<div className='audio-visualizer-box-agent w-2'></div>&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-4'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-20'></div>
							&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-10'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-2'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-4'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-6'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-20'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-10'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='w-100'></div>
							<div className=' w-50'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-2'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-4'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-6'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className=' w-12'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className=' w-14'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-16'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-12'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-14'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-50'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-10'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-2'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-4'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-100'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-10'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-2'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-20'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-100'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-2'></div>
							&nbsp;
							<div className='audio-visualizer-box-agent w-2'></div>
							&nbsp;
							<div className='audio-visualizer-box-agent w-2'></div>
							&nbsp;
							<div className='audio-visualizer-box-agent w-10'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-agent w-10'></div>
						</div>
					</div>
					<div className='audio-visualizer-block'>
						<div className='audio-visualizer-box'></div>
					</div>
					<div className='audio-visualizer-type mb-20'>
						<div className='audio-visualizer-customer-text'>Customer</div>
						{/* <hr className='audio-visualizer-customer-divider' /> */}
						<div className='audio-visualizer-customer'>
							<div className='audio-visualizer-box-customer w-2'></div>
							&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-4'></div>&nbsp;
							<div className='audio-visualizer-box-customer w-2'></div>&nbsp;
							<div className='audio-visualizer-box-customer w-4'></div>
							&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-4'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-30'></div>
							&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-20'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-2'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-4'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-6'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-20'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-10'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='w-100'></div>
							<div className=' w-50'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-2'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-4'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-6'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className=' w-12'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className=' w-14'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-16'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-12'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-14'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-10'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-10'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-2'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-4'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-50'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-10'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-2'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-20'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-50'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-2'></div>
							&nbsp;
							<div className='audio-visualizer-box-customer w-2'></div>
							&nbsp;
							<div className='audio-visualizer-box-customer w-2'></div>
							&nbsp;
							<div className='audio-visualizer-box-customer w-10'></div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='audio-visualizer-box-customer w-100'></div>
						</div>
					</div>
					<audio
						style={{ width: '100%', ariaLabel: 'small' }}
						controls
						src={path}
						ref={audioRef}
						type='audio'
						onTimeUpdate={onPlaying}
					/>
				</div>
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
