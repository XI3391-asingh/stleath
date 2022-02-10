import React from 'react';

import { Typography } from '@material-ui/core';

import CallTranscription from './CallTranscription';

function CallTranscriptionSpeech({ transcript, currentTime, isplaying }) {
	return (
		<div className='transcriptions-main-layout'>
			{transcript?.length > 0 &&
				transcript?.map((data, index) => {
					return (
						<>
							{data.speaker === 'Agent' || data.speaker === 'speaker 1' ? (
								<div className='transcription-layout' key={index}>
									<CallTranscription
										calltime={data.start_time}
										speaker={data.speaker}
										id={index}
										feedback={data.feedback}
									/>
									<Typography
										variant='body2'
										className='transcription-agent-speech'
										style={{
											backgroundColor:
												currentTime >= data?.start_time &&
												isplaying &&
												currentTime <= data.end_time
													? 'lightgrey'
													: 'darkgrey',
										}}
									>
										{data.sentence}
									</Typography>
								</div>
							) : (
								<div className='transcription-layout'>
									<CallTranscription
										calltime={data.start_time}
										speaker={data.speaker}
										id={index}
										feedback={data.feedback}
									/>
									<Typography
										variant='body2'
										className='transcription-customer-speech'
										style={{
											backgroundColor:
												currentTime >= data?.start_time &&
												isplaying &&
												currentTime <= data.end_time
													? 'lightgrey'
													: 'darkgrey',
										}}
									>
										{data.sentence}
									</Typography>
								</div>
							)}
						</>
					);
				})}
		</div>
	);
}

export default CallTranscriptionSpeech;
