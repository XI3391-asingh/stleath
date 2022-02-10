import React from 'react';
import { useSelector } from 'react-redux';

import { Typography } from '@material-ui/core';
import { Card } from '@mui/material';

import CallTranscriptionSpeech from './CallTranscriptionSpeech';

import '../styles.css';

function Transcription({ time, isaudioplaying }) {
	const { comments } = useSelector((store) => store.call);
	return (
		<div>
			<Card className='transcriptions-card'>
				<div className='transcriptions-card-heading'>
					<Typography variant='h5'>Transcription</Typography>
				</div>
				<hr className='transcriptions-card-divider' />
				<CallTranscriptionSpeech
					transcript={comments && comments?.transcript}
					currentTime={time}
					isplaying={isaudioplaying}
				/>
			</Card>
		</div>
	);
}

export default Transcription;
