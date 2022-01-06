import { Typography } from '@material-ui/core';
import React from 'react';
import CallTranscription from './CallTranscription';

function CallTranscriptionSpeech({ transcript, currentTime, isplaying }) {
	//   const callTranscriptionData = [
	//     {
	//       id: 1,
	//       time: "00:01 min",
	//       data: "Hello sir, thank you for calling HDFC bank, my name is Rajat, how may I help you today?",
	//       type: "Agent",
	//       path: "",
	//     },
	//     {
	//       id: 2,
	//       time: "00:06 min",
	//       data: "Hi Rajat, my name is Ashish, I called you as I wanted to gather some information regarding your lifetime free credit card.",
	//       type: "Customer",
	//       path: "",
	//     },
	//     {
	//       id: 3,
	//       time: "00:12 min",
	//       data: "Sure sir, may I please know where did you get this information from so that I can put the same in my notes?",
	//       type: "Agent",
	//       path: "",
	//     },
	//     {
	//       id: 4,
	//       time: "00:18 min",
	//       data: "Yes, I read the same in a newspaper this morning.",
	//       type: "Customer",
	//       path: "",
	//     },
	//     {
	//       id: 5,
	//       time: "00:12 min",
	//       data: "Thank you for the confirmation. Yes, sir, the offer is going on right now where we are providing a lifetime free credit card with no joining fee or yearly fee. The bill is generated on the 1st of every month which needs to be paid by the 15th of every month.",
	//       type: "Agent",
	//       path: "",
	//     },
	//     {
	//       id: 6,
	//       time: "00:18 min",
	//       data: "Great, that’s so good to know, will you be able to explain to me any more features of this credit card such as reward points and cashback offers.",
	//       type: "Customer",
	//       path: "",
	//     },
	//     {
	//       id: 7,
	//       time: "00:12 min",
	//       data: "Sure sir, just a moment, please. Yes, so there are various offers applicable on this card right now such as complimentary airport lounge access, 5% cashback at the restaurants, and zero surcharges on the fuel.",
	//       type: "Agent",
	//       path: "",
	//     },
	//     {
	//       id: 8,
	//       time: "00:18 min",
	//       data: "Thanks for the information, how can I further proceed with this?",
	//       type: "Customer",
	//       path: "",
	//     },
	//     {
	//       id: 9,
	//       time: "00:12 min",
	//       data: "Let me help you with that, so I need to ask you for some information to process your application from here and then our bank representative will contact you to collect a couple of documents from you.",
	//       type: "Agent",
	//       path: "",
	//     },
	//     {
	//       id: 10,
	//       time: "00:18 min",
	//       data: "Sure, please tell me.",
	//       type: "Customer",
	//       path: "",
	//     },
	//     {
	//       id: 11,
	//       time: "00:12 min",
	//       data: "Please confirm whether you are salaried or self-employed?",
	//       type: "Agent",
	//       path: "",
	//     },
	//     {
	//       id: 12,
	//       time: "00:18 min",
	//       data: "Salaried",
	//       type: "Customer",
	//       path: "",
	//     },
	//     {
	//       id: 13,
	//       time: "00:12 min",
	//       data: "May I please know your monthly income?",
	//       type: "Agent",
	//       path: "",
	//     },
	//     {
	//       id: 14,
	//       time: "00:18 min",
	//       data: "Thirty thousand rupees.",
	//       type: "Customer",
	//       path: "",
	//     },
	//     {
	//       id: 15,
	//       time: "00:12 min",
	//       data: "Which City are you living in?",
	//       type: "Agent",
	//       path: "",
	//     },
	//     {
	//       id: 16,
	//       time: "00:18 min",
	//       data: "Chandigarh",
	//       type: "Customer",
	//       path: "",
	//     },
	//     {
	//       id: 17,
	//       time: "00:12 min",
	//       data: "Can you please confirm the PIN code of the area where you are currently living.",
	//       type: "Agent",
	//       path: "",
	//     },
	//     {
	//       id: 18,
	//       time: "00:18 min",
	//       data: "It’s 160009",
	//       type: "Customer",
	//       path: "",
	//     },
	//     {
	//       id: 19,
	//       time: "00:12 min",
	//       data: "Thank you, sir, our bank representative will call you within the next 24 hours to collect copies of the PAN card and Aadhar card. After the collection, you will receive the credit card at your residential address within 7 working days.",
	//       type: "Agent",
	//       path: "",
	//     },
	//     {
	//       id: 20,
	//       time: "00:18 min",
	//       data: "Thanks Rajat.",
	//       type: "Customer",
	//       path: "",
	//     },
	//     {
	//       id: 21,
	//       time: "00:12 min",
	//       data: "My please sir, is there anything that I can help you with?",
	//       type: "Agent",
	//       path: "",
	//     },
	//     {
	//       id: 22,
	//       time: "00:18 min",
	//       data: "No Rajat, thanks for all your help, that will be all for now.",
	//       type: "Customer",
	//       path: "",
	//     },
	//     {
	//       id: 23,
	//       time: "00:12 min",
	//       data: "Thank you sir, thanks for calling HDFC bank, have a great day.",
	//       type: "Agent",
	//       path: "",
	//     },
	//     {
	//       id: 24,
	//       time: "00:18 min",
	//       data: "you too, thanks",
	//       type: "Customer",
	//       path: "",
	//     },
	//   ];
	return (
		<div className='transcriptions-main-layout'>
			{transcript?.length > 0 &&
				transcript?.map((data, index) => {
					return (
						<>
							{data.speaker === 'Agent' ? (
								<div className='transcription-layout' key={index}>
									<CallTranscription
										calltime={data.start_time}
										speaker={data.speaker}
										id={index}
									/>
									<Typography
										variant='body2'
										className='transcription-agent-speech'
										style={{
											backgroundColor:
												currentTime >= data?.start_time &&
												isplaying &&
												transcript[index + 1] &&
												currentTime <= transcript[index + 1]['start_time'] - 1
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
									/>
									<Typography
										variant='body2'
										className='transcription-customer-speech'
										style={{
											backgroundColor:
												currentTime >= data?.start_time &&
												isplaying &&
												transcript[index + 1] &&
												currentTime <= transcript[index + 1]['start_time'] - 1
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
