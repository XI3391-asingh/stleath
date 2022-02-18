import React, { useEffect, useState } from 'react';

import { Card, Typography } from '@material-ui/core';
import { useDemoData } from '@mui/x-data-grid-generator';

import Comments from '../../components/calls/comments/Comments';
import Moments from '../../components/calls/moments/Moments';
import Transcription from '../../components/calls/transcription/Transcription';
import WavesurferAudioVisualizer from '../../components/calls/wavesurfer-visualizer/WavesurferAudioVisualizer';

import './styles.css';
import moment from 'moment';
import { useLocation } from 'react-router-dom';

import indexService from '../../service/index';
import { useDispatch, useSelector } from 'react-redux';
import {
	GET_CALL_VISUALIZER,
	GET_ALL_COMMENTS,
	GET_QUESTIONS,
	GET_ANSWERS,
	GET_QUESTIONS_ANSWERS,
	GET_MANAGER_QUESTIONS_ANSWERS,
} from '../../store/type';
import AudioVisualizer from '../../components/calls/wavesurfer-visualizer/AudioVisualizer';
import EvaluationForm from '../../components/calls/evaluation-form/EvaluationForm';

function CallVisualizer() {
	let dateTime = moment().format('LLL');
	const path = useLocation();
	let query = new URLSearchParams(path?.search);
	let callidquery = query.get('id');
	const dispatch = useDispatch();
	const [nowTime, setNowTime] = useState(0);
	const [isplaying, setIsplaying] = useState(false);
	const [questionsanswersdata, setquestionsanswersdata] = useState([]);
	const [managerqueans, setmanagerqueans] = useState([]);
	const [visualizerWidth, setvisualizerWidth] = useState('100%');
	const { visualizer } = useSelector((store) => store.call);
	const { comments, questionsanswers } = useSelector((store) => store.call);

	const { data } = useDemoData({
		dataSet: 'Commodity',
		rowLength: 100,
		maxColumns: 6,
	});

	useEffect(() => {
		getCall();
		getCallDetails();
		getQAQuestionsAnswers();
		getManagerQuestionsAnswers();
		const interval = setInterval(() => {
			getCallDetails();
			// getCall();
		}, 30000);
		return () => clearInterval(interval);
	}, [callidquery, visualizerWidth]);

	const getCallDetails = () => {
		indexService.getCallDetails(callidquery).then((resp) => {
			if (resp.isSuccess) {
				dispatch({
					type: GET_ALL_COMMENTS,
					payload: resp?.data,
				});
			}
		});
	};

	const getCall = () => {
		indexService.getReport().then((resp) => {
			if (resp.isSuccess) {
				let feeddata = resp?.data;
				if (feeddata?.length) {
					let calldata = feeddata.filter(
						(resp) => resp.id === parseInt(callidquery)
					);
					if (calldata?.length) {
						dispatch({
							type: GET_CALL_VISUALIZER,
							payload: calldata[0],
						});
					}
				}
			}
		});
	};

	const getQAQuestionsAnswers = () => {
		getQuestionsAnswers('QA').then((data) => {
			setquestionsanswersdata(data);
			dispatch({
				type: GET_QUESTIONS_ANSWERS,
				payload: data,
			});
		});
	};

	const getManagerQuestionsAnswers = () => {
		getQuestionsAnswers('manager').then((data) => {
			setmanagerqueans(data);
			dispatch({
				type: GET_MANAGER_QUESTIONS_ANSWERS,
				payload: data,
			});
		});
	};

	const getQuestionsAnswers = (type) => {
		return Promise.all([
			indexService.getQuestions(type),
			indexService.getAnswers(callidquery),
		])
			.then((values) => {
				let questions = [];
				let answers = [];
				if (
					values.length &&
					values[0] &&
					values[0].data &&
					values[0].data.length
				) {
					questions = values[0].data;
				}
				if (
					values.length &&
					values[0] &&
					values[0].data &&
					values[0].data.length
				) {
					answers = values[1].data;
				}
				const questionsanswers = questions.map((question) => {
					let answer = {};
					let answerdata = answers.find(
						(answer) => question.id == answer.question_id
					);
					if (answerdata) {
						answer = answerdata;
						// answer.iscomment = answerdata.comment ? true : false;
						answer.iscomment = false;
					} else {
						answer = {
							call_id: callidquery,
							comment: '',
							option_selected: '',
							question_id: question.id,
							iscomment: false,
						};
					}
					return {
						...question,
						...answer,
					};
				});
				return questionsanswers;
			})
			.catch((err) => {
				console.log(err);
			});
		// indexService.getQuestions().then((resp) => {
		//   if (resp.isSuccess) {
		//     dispatch({
		//       type: GET_QUESTIONS,
		//       payload: resp?.data,
		//     });

		//     indexService.getAnswers(callidquery).then((resp) => {
		//       if (resp.isSuccess) {
		//         dispatch({
		//           type: GET_ANSWERS,
		//           payload: resp?.data,
		//         });
		//       }
		//     });
		//   }
		// });
	};

	const handleEvaluationFormCallback = () => {
		setquestionsanswersdata([]);
		setmanagerqueans([]);
		getQAQuestionsAnswers();
		getManagerQuestionsAnswers();
	};

	return (
		<div className='calls-page-layout' style={{ width: visualizerWidth }}>
			<div>
				<Card className='calls-visualizer-details-card'>
					<Typography
						variant='button'
						className='calls-visualizer-details-text'
					>
						{visualizer?.agent_name} on {visualizer?.createdAt}
						{/* for 30:37 minutes */}
					</Typography>
					<Typography
						variant='button'
						className='calls-visualizer-call-id-text'
					>
						Call Id: {visualizer?.id}
					</Typography>
					<EvaluationForm
						controlWidth={setvisualizerWidth}
						questionsanswersdata={questionsanswersdata}
						managerqueans={managerqueans}
						evaluationFormCallback={() => handleEvaluationFormCallback()}
					/>
				</Card>
			</div>
			<div>
				{Object?.keys(visualizer)?.length && (
					// <WavesurferAudioVisualizer path={visualizer?.path} />
					<AudioVisualizer
						path={visualizer?.path}
						currentTime={(data) => setNowTime(data)}
						isplayaudio={(data) => setIsplaying(data)}
						transcript={comments && comments?.transcript}
					/>
				)}
			</div>
			<div className='calls-visualizer-card-list'>
				<div className='calls-visualizer-moments-card'>
					<Moments callDetails={comments} />
				</div>
				<div className='calls-visualizer-transcription-card'>
					<Transcription time={nowTime} isaudioplaying={isplaying} />
				</div>
				<div className='calls-visualizer-comments-card-layout'>
					<Card>
						<Comments
							callid={callidquery}
							agent_name={visualizer?.agent_name}
						/>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default CallVisualizer;
