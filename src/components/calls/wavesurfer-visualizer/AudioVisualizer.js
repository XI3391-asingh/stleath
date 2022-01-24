import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { Card } from '@mui/material';
import React, { useRef, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { WaveSurfer, WaveForm } from 'wavesurfer-react';
import { CLEAR_CALL_VISUALIZER } from '../../../store/type';

import './styles.css';

function AudioVisualizer({ path, currentTime, isplayaudio, transcript }) {
	const audioRef = React.useRef(null);
	const dispatch = useDispatch();
	const [ audioDuration, setAudioDuration ]= useState(0);
	const pageWidth = document.getElementById('audioVisualizerAgent') ? document.getElementById('audioVisualizerAgent').scrollWidth : 0;
	// const pageWidth = 1230;
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
		console.log(document.getElementById('audioVisualizerAgent').scrollWidth);
		console.log('page width'+pageWidth);
		// setSeekValue(
		//   (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
		// );
	};
	const onAudioPlayerLoad = () => {
		setAudioDuration(audioRef.current.duration);
		console.log('audio duration:' + audioRef.current.duration);
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
						<div className='audio-visualizer-agent' id='audioVisualizerAgent'>
							{/* <div style={{ 'display': 'flex','justify-content':'space-between','min-width': '100%'}}> */}
						
						{	transcript?.length > 0 &&
							transcript?.map((data, index, localTranscript) => {

								// let prevNode = (index === 0) ? null : (index === 1 ? localTranscript[index -1] : localTranscript[index -2]);
								let prevNode = (index === 0) ? null : localTranscript[index -1];

								if(!document.getElementById('audioVisualizerAgent') || !document.getElementById('audioVisualizerAgent').scrollWidth){
									return <></>;
								}

								return data.speaker === 'Agent' ?
								<>
									{/* { prevNode && <div className={`audio-visualizer-box transparent w-${data.start_time - prevNode.end_time}`}></div> } */}
									{ prevNode && <div className={`audio-visualizer-box transparent`} style={{width:(pageWidth / audioDuration) * (data.start_time - prevNode.end_time)}}></div> }
									{/* <div className={`audio-visualizer-box customer w-${data.end_time - data.start_time}`}></div> */}
									<div className={`audio-visualizer-box agent`} style={{width:(pageWidth / audioDuration) * (data.end_time - data.start_time)}}></div>
								</>
								: <>
									{/* { prevNode && <div className={`audio-visualizer-box transparent w-${Math.abs(data.start_time - prevNode.end_time)}`}></div> } */}
									{ prevNode && <div className={`audio-visualizer-box transparent`} style={{width:(pageWidth / audioDuration) * (Math.abs(data.start_time - prevNode.end_time))}}></div> }
									{/* <div className={`audio-visualizer-box transparent w-${data.end_time - data.start_time}`}></div> */}
									<div className={`audio-visualizer-box transparent`} style={{width:(pageWidth / audioDuration) * (data.end_time - data.start_time)}}></div>
								</>;
							})
						}
						{/* </div> */}
							
						</div>
					</div>
					<div className='audio-visualizer-block'>
						<div className='audio-visualizer-box'></div>
					</div>
					<div className='audio-visualizer-type mb-20'>
						<div className='audio-visualizer-customer-text'>Customer</div>
						{/* <hr className='audio-visualizer-customer-divider' /> */}
						<div className='audio-visualizer-customer'>
						{	transcript?.length > 0 &&
							transcript?.map((data, index, localTranscript) => {

								// let prevNode = (index === 0) ? null : (index === 1 ? localTranscript[index -1] : localTranscript[index -2]);
								let prevNode = (index === 0) ? null : localTranscript[index -1];

								if(!document.getElementById('audioVisualizerAgent') || !document.getElementById('audioVisualizerAgent').scrollWidth) {
									return <></>;
								}

								return data.speaker === 'Customer' ?
								<>
									{/* { prevNode && <div className={`audio-visualizer-box transparent w-${data.start_time - prevNode.end_time}`}></div> } */}
									{ prevNode && <div className={`audio-visualizer-box transparent`} style={{width:(pageWidth / audioDuration) * (data.start_time - prevNode.end_time)}}></div> }
									{/* <div className={`audio-visualizer-box customer w-${data.end_time - data.start_time}`}></div> */}
									<div className={`audio-visualizer-box customer`} style={{width:(pageWidth / audioDuration) * (data.end_time - data.start_time)}}></div>
								</>
								: <>
									{/* { prevNode && <div className={`audio-visualizer-box transparent w-${Math.abs(data.start_time - prevNode.end_time)}`}></div> } */}
									{ prevNode && <div className={`audio-visualizer-box transparent`} style={{width:(pageWidth / audioDuration) * (Math.abs(data.start_time - prevNode.end_time))}}></div> }
									{/* <div className={`audio-visualizer-box transparent w-${data.end_time - data.start_time}`}></div> */}
									<div className={`audio-visualizer-box transparent`} style={{width:(pageWidth / audioDuration) * (data.end_time - data.start_time)}}></div>
								</>;
							})
						}
						</div>
					</div>
					<audio
						style={{ width: '100%', ariaLabel: 'small' }}
						controls
						src={path}
						ref={audioRef}
						type='audio'
						onTimeUpdate={onPlaying}
						onLoadedData={onAudioPlayerLoad}
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
