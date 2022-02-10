import React from 'react';

import { Chip, Typography } from '@material-ui/core';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import moment from 'moment';

function CallTranscription({ calltime, speaker, id, feedback }) {
	const handleTime = (time) => {
		var formatted = moment.utc(time * 1000).format('mm:ss');
		return formatted;
	};

	const feedbackType = (data) => {
		switch (data) {
			case 'Positive':
				return 'green';
			case 'Negative':
				return 'red';
			case 'Neutral':
				return 'yellow';
			default:
				return `lightgrey`;
		}
	};

	return (
		<div>
			<div className='call-transcription-layout'>
				<div>
					<Typography
						variant='caption'
						className='call-transcription-timing-profile'
					>
						{handleTime(calltime)} min
					</Typography>
					<Typography
						variant='caption'
						className='call-transcription-timing-profile'
					>
						{speaker}
					</Typography>
					{(feedback === 'Positive' ||
						feedback === 'Negative' ||
						feedback === 'Neutral') && (
						<Chip
							label={feedback}
							variant='outlined'
							className='call-transcription-chip'
							style={{
								color: feedbackType(feedback),
							}}
						>
							{feedback}
						</Chip>
					)}
				</div>
				<div>
					<button className='call-transcription-play-button'>
						<PlayArrowIcon className='call-transcription-play-icon' />
						Play
					</button>
				</div>
			</div>
		</div>
	);
}

export default CallTranscription;
