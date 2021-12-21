import { Typography } from '@material-ui/core';
import React from 'react';
import CallTranscription from './CallTranscription';

function CallTranscriptionSpeech() {
	return (
		<div>
			<div className='transcription-layout'>
				<CallTranscription />
				<Typography variant='body2' className='transcription-agent-speech'>
					This is Agent speaking.
				</Typography>
			</div>
			<div className='transcription-layout'>
				<CallTranscription />
				<Typography variant='body2' className='transcription-customer-speech'>
					This is Customer speaking on the call id: 1. Lorem Ipsum is simply
					dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an
					unknown printer took a galley of type and scrambled it to make a type
					specimen book.
				</Typography>
			</div>
		</div>
	);
}

export default CallTranscriptionSpeech;
