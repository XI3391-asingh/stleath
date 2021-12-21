import React from 'react';

import { Chip, IconButton, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddCommentIcon from '@mui/icons-material/AddComment';
import CallTranscriptionSpeech from './CallTranscriptionSpeech';

function CallTranscription() {
	return (
		<div>
			<div className='call-transcription-layout'>
				<div>
					<Typography
						variant='caption'
						className='call-transcription-timing-profile'
					>
						00:01 min
					</Typography>
					<Typography
						variant='caption'
						className='call-transcription-timing-profile'
					>
						Agent
					</Typography>
					<Chip
						label='Display Patience and Courtesy'
						variant='outlined'
						className='call-transcription-chip'
					/>
				</div>
				<div>
					<IconButton className='call-transcription-comment'>
						<Button className='call-transcription-comment-button'>
							<AddCommentIcon className='call-transcription-add-comment' />
						</Button>
					</IconButton>
					<button className='call-transcription-play-button'>
						<PlayArrowIcon className='call-transcription-play-icon' />
						Play
					</button>
				</div>
			</div>
			{/* <div className='call-transcription-dialogue'>
				<CallTranscriptionSpeech />
			</div> */}
		</div>
	);
}

export default CallTranscription;
