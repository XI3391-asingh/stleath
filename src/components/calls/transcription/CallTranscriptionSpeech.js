import { Typography } from '@material-ui/core';
import React from 'react';
import CallTranscription from './CallTranscription';

function CallTranscriptionSpeech({ speaker }) {
	console.log(speaker);
	return (
		<div>
			{speaker?.length > 0 &&
				speaker?.map((data, index) => {
					return (
						<div className='transcription-layout' key={index}>
							<CallTranscription calltime={data[1]} />
							<Typography
								variant='body2'
								className='transcription-agent-speech'
							>
								{data[0]}
							</Typography>
						</div>
					);
				})}
			{/* <div className="transcription-layout">
        <CallTranscription calltime={speaker2 && speaker2[1]} speaker={true} />
        <Typography variant="body2" className="transcription-customer-speech">
          {speaker2 && speaker2[0]}
        </Typography>
      </div> */}
		</div>
	);
}

export default CallTranscriptionSpeech;
