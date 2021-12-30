import React from 'react';

import { Chip, Typography } from '@material-ui/core';
import { Card } from '@mui/material';
import AddCommentIcon from '@mui/icons-material/AddComment';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

import image from '../../../assets/images/image.png';

import '../styles.css';
import CallTranscription from './CallTranscription';
import CallTranscriptionSpeech from './CallTranscriptionSpeech';
import { useSelector } from 'react-redux';

function Transcription({ time }) {
	const { comments } = useSelector((store) => store.call);
	return (
		<div>
			<Card className='transcriptions-card'>
				<div className='transcriptions-card-heading'>
					<Typography variant='h5'>Transcription</Typography>
				</div>
				{/* <div className='transcriptions-card-chip-list'>
					<div>
						<Chip label='Agent' variant='outlined' />
					</div>
					</div>*/}
				<hr className='transcriptions-card-divider' />
				{/* {comments?.transcript?.length && ( */}
				<CallTranscriptionSpeech
					currentTime={time}
					// speaker={comments?.transcript}
					// speaker1={comments?.transcript && comments?.transcript[0]}
					// speaker2={comments?.transcript && comments?.transcript[1]}
				/>
				{/* )} */}
				{/* <img
          src={image}
          alt="transcription"
          className="transcriptions-card-image"
        /> */}
			</Card>
		</div>
	);
}

export default Transcription;
