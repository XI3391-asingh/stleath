import React from 'react';

import { Chip, Typography } from '@material-ui/core';
import { Card } from '@mui/material';
import AddCommentIcon from '@mui/icons-material/AddComment';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

import image from '../../../assets/images/image.png';

import '../styles.css';

function Transcription() {
	return (
		<div>
			<Card className='transcriptions-card'>
				<div className='transactions-card-heading'>
					<Typography variant='h5'>Transcription</Typography>
				</div>
				<div className='transcriptions-card-chip-list'>
					<div>
						<Chip label='2:37' variant='outlined' />
					</div>
					<div>
						<Chip label='Agent' variant='outlined' />
					</div>
					<div>
						<Chip label='Positive' variant='outlined' />
					</div>
					<div className='transcriptions-card-icons'>
						<AddCommentIcon />
					</div>
					<div className='transcriptions-card-icons'>
						<PlayArrowRoundedIcon />
					</div>
				</div>
				<hr />
				<img
					src={image}
					alt='transcription'
					className='transcriptions-card-image'
				/>
			</Card>
		</div>
	);
}

export default Transcription;
