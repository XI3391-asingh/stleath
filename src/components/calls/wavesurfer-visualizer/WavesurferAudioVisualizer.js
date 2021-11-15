import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { Card } from '@mui/material';
import React, { useRef, useCallback } from 'react';
import { WaveSurfer, WaveForm } from 'wavesurfer-react';

import './styles.css';

function Visualizer() {
	const wavesurferRef = useRef();
	const wavesurferRef2 = useRef();

	const handleWSMount = (waveSurfer) => {
		console.log('...');
		wavesurferRef.current = waveSurfer;
		if (wavesurferRef.current) {
			console.log('...2');
			wavesurferRef.current.load(
				'/audio/melodic-techno-03-extended-version-moogify-9867.mp3'
			);
			wavesurferRef.current.on('ready', () => {
				console.log('WaveSurfer is ready');
			});
			wavesurferRef.current.on('loading', (data) => {
				console.log('loading --> ', data);
			});
			if (window) {
				window.surferidze = wavesurferRef.current;
			}
		}
	};

	const handleWSMount2 = (waveSurfer) => {
		console.log('...');
		wavesurferRef2.current = waveSurfer;
		if (wavesurferRef2.current) {
			console.log('...2');
			wavesurferRef2.current.load(
				'/audio/melodic-techno-03-extended-version-moogify-9867.mp3'
			);
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
					<ButtonGroup
						variant='contained'
						aria-label='outlined primary button group'
					>
						<Button
							onClick={() => {
								play();
								play2();
							}}
							className='audio-visualizer-card-button'
						>
							Play / Pause
						</Button>
						<Button
							onClick={() => {
								seekBack();
								seekBack2();
								seek();
								seek2();
							}}
							className='audio-visualizer-card-button'
						>
							Rewind
						</Button>
						<Button
							onClick={() => {
								seekTo();
								seekTo2();
							}}
							className='audio-visualizer-card-button'
						>
							Forward
						</Button>
						<Button
							onClick={() => {
								stop();
								stop2();
							}}
							className='audio-visualizer-card-button'
						>
							Stop
						</Button>
					</ButtonGroup>
				</div>
			</Card>
		</div>
	);
}
export default Visualizer;
