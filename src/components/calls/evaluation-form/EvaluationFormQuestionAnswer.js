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

function EvaluationFormQuestionAnswer({ questionsanswersdata }) {
	const dispatch = useDispatch();
	const [showComment, setShowComment] = useState(false);
	const [question, setQuestion] = useState([]);
	const [snackbar, setSnackbar] = useState(false);

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

	const discardAnswer = () => {};

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
														{!showComment ? (
															<button
																className='evaluation-form-add-comments-button'
																onClick={() => setShowComment(true)}
															>
																Add Comment
															</button>
														) : (
															<button
																className='evaluation-form-add-comments-button'
																onClick={() => setShowComment(false)}
															>
																Hide Comment
															</button>
														)}
													</div>
													{showComment ? (
														<Box component='form' noValidate autoComplete='off'>
															<div>
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
															</div>
														</Box>
													) : null}
												</div>
											</div>
											<Divider className='evaluation-form-divider' />
										</>
									);
								})}
						</div>
					</div>
					<div>
						<label>
							<Typography
								variant='body1'
								className='evaluation-form-overall-feedback-label'
							>
								Overall Feedback:
							</Typography>
						</label>
						<InputBase
							id='outlined-textarea'
							placeholder='Overall Feedback'
							multiline
							variant='outlined'
							className='evaluation-form-inputbase evaluation-form-overall-feedback'
							// defaultValue={data?.comment}
							// value={data?.comment}
							// onChange={(e) => updateTextFieldChanged(index, e.target.value)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EvaluationFormQuestionAnswer;
