import {
	Box,
	Divider,
	FormControlLabel,
	Radio,
	RadioGroup,
	Typography,
	InputBase,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import indexService from '../../../service/index';
import { ADD_ANSWERS } from '../../../store/type';

function EvaluationFormQuestionAnswer({
	questionsanswersdata,
	evaluationFormCallback,
}) {
	const dispatch = useDispatch();
	const [question, setQuestion] = useState([]);
	const [snackbar, setSnackbar] = useState(false);
	const [isaddcomment, setisaddcomment] = useState(false);

	useEffect(() => {
		setQuestion(questionsanswersdata);
	}, []);

	const updateFieldChanged = (index, value) => {
		question[index]['option_selected'] = value;
		setQuestion(question);
	};

	const updateTextFieldChanged = (index, value) => {
		question[index]['comment'] = value;
		setQuestion(question);
	};

	const discardAnswer = () => {
		evaluationFormCallback();
	};

	const saveAnswer = () => {
		let newquestionanswer = [...question];
		const questionsanswers = newquestionanswer.map((question) => {
			return {
				call_id: question.call_id,
				option_selected: question.option_selected,
				question_id: question.question_id,
				comment: question.comment,
			};
		});
		indexService
			.saveAnswers({
				answers: questionsanswers,
			})
			.then((resp) => {
				if (resp.isSuccess) {
					dispatch({
						type: ADD_ANSWERS,
						payload: resp?.data,
					});
					setSnackbar(true);
					setTimeout(() => {
						handleSnackbarClose();
					}, 2000);
				}
			});
	};

	const handleSnackbarClose = () => {
		setSnackbar(false);
	};

	const addCommentShow = (index) => {
		question[index]['iscomment'] = question[index]['iscomment'] ? false : true;
		setQuestion(question);
		setisaddcomment(isaddcomment ? false : true);
	};

	return (
		<div>
			<div className='evaluation-form-buttons'>
				<button
					className='evaluation-form-discard-button'
					type='button'
					onClick={() => discardAnswer()}
				>
					Discard
				</button>
				<button
					className='evaluation-form-submit-button'
					type='button'
					onClick={() => saveAnswer()}
				>
					Submit
				</button>
			</div>
			<Divider />
			{snackbar && (
				<div className='evaluation-form-layout'>
					<Typography variant='body1'>answer save successfully</Typography>
				</div>
			)}
			<div>
				<div className='evaluation-form-layout'>
					<div className='evaluation-form-header'>
						<Typography variant='body1'>Items</Typography>
					</div>
					<Divider />
					<div className='evaluation-form-content'>
						<div>
							{question?.length > 0 &&
								question?.map((data, index) => {
									return (
										<>
											<div>
												<div className='evaluation-form-question-answer-block'>
													<div className='evaluation-form-question-layout'>
														<Typography
															variant='caption'
															className='evaluation-form-astreisk'
														>
															*
														</Typography>
														<Typography
															variant='body1'
															className='evaluation-form-question'
														>
															{index + 1}. {data.title}
														</Typography>
													</div>
													<div className='evaluation-form-answer'>
														<RadioGroup
															// value={data?.option_selected}
															onChange={(e) =>
																updateFieldChanged(index, e.target.value)
															}
															defaultValue={data?.option_selected}
															aria-labelledby='demo-radio-buttons-group-label'
															name='radio-buttons-group'
															className='evaluation-form-radio-group'
														>
															{data?.options?.map((item, index) => {
																return (
																	<FormControlLabel
																		value={item}
																		control={
																			<Radio className='evaluation-form-radio-button' />
																		}
																		label={item}
																	/>
																);
															})}
														</RadioGroup>
													</div>
												</div>
												<div className='evaluation-form-comments-section'>
													<div className='evaluation-form-buttons'>
														<button
															className='evaluation-form-add-comments-button'
															onClick={() => addCommentShow(index)}
														>
															{!data?.iscomment
																? 'Add Comment'
																: 'Hide Comment'}
														</button>
														{/* // <button
                              //   className="evaluation-form-add-comments-button"
                              //   onClick={() => addCommentShow(index, false)}
                              // >
                              //  Hide Comment 
                              // </button> */}
													</div>
													<Box component='form' noValidate autoComplete='off'>
														<div>
															{data?.iscomment && (
																<InputBase
																	id='outlined-textarea'
																	placeholder='Add Comment'
																	multiline
																	variant='outlined'
																	fullWidth
																	className='evaluation-form-inputbase'
																	defaultValue={data?.comment}
																	// value={data?.comment}
																	onChange={(e) =>
																		updateTextFieldChanged(
																			index,
																			e.target.value
																		)
																	}
																/>
															)}
														</div>
													</Box>
												</div>
											</div>
											<Divider className='evaluation-form-divider' />
										</>
									);
								})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EvaluationFormQuestionAnswer;
