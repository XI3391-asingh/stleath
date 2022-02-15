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

function EvaluationFormQuestionAnswer() {
	const [questionOne, setQuestionOne] = useState('');
	const [questionTwo, setQuestionTwo] = useState('');
	const [questionThree, setQuestionThree] = useState('');
	const [questionFour, setQuestionFour] = useState('');
	const [questionFive, setQuestionFive] = useState('');
	const [questionSix, setQuestionSix] = useState('');

	return (
		<div>
			<div>
				<div className='evaluation-form-question-answer-block'>
					<div className='evaluation-form-question-layout'>
						<Typography variant='caption' className='evaluation-form-astreisk'>
							*
						</Typography>
						<Typography variant='body1' className='evaluation-form-question'>
							1. Did the agent verify the customer?
						</Typography>
					</div>
					<div className='evaluation-form-answer'>
						<RadioGroup
							value={questionOne}
							onChange={(e) => setQuestionOne(e.target.value)}
							aria-labelledby='demo-radio-buttons-group-label'
							defaultValue=''
							name='radio-buttons-group'
							className='evaluation-form-radio-group'
						>
							<FormControlLabel
								value='Yes'
								control={<Radio className='evaluation-form-radio-button' />}
								label='Yes'
							/>
							<FormControlLabel
								value='No'
								control={<Radio className='evaluation-form-radio-button' />}
								label='No '
							/>
							<FormControlLabel
								value='N/A'
								control={<Radio className='evaluation-form-radio-button' />}
								label='N/A'
							/>
						</RadioGroup>
					</div>
				</div>
				<div className='evaluation-form-comments-section'>
					<div className='evaluation-form-buttons'>
						{/* {!comment ? ( */}
						<button className='evaluation-form-add-comments-button'>
							Add Comment
						</button>
						{/* ) : ( */}
						<button className='evaluation-form-add-comments-button'>
							Hide Comment
						</button>
						{/* )} */}
					</div>
					<Box component='form' noValidate autoComplete='off'>
						<div>
							<InputBase
								id='outlined-textarea'
								placeholder='Add Comment'
								multiline
								variant='outlined'
								fullWidth
								className='evaluation-form-inputbase'
								// value={value}
								// onChange={(e) => setValue(e.target.value)}
							/>
						</div>
					</Box>
				</div>
			</div>
			<Divider className='evaluation-form-divider' />
			<div>
				<div className='evaluation-form-question-answer-block'>
					<div className='evaluation-form-question-layout'>
						<Typography variant='caption' className='evaluation-form-astreisk'>
							*
						</Typography>
						<Typography variant='body1' className='evaluation-form-question'>
							2. Was there a Hold Time Violation on this call?
						</Typography>
					</div>
					<div className='evaluation-form-answer'>
						<RadioGroup
							value={questionTwo}
							onChange={(e) => setQuestionTwo(e.target.value)}
							aria-labelledby='demo-radio-buttons-group-label'
							defaultValue=''
							name='radio-buttons-group'
							className='evaluation-form-radio-group'
						>
							<FormControlLabel
								value='Yes'
								control={<Radio className='evaluation-form-radio-button' />}
								label='Yes'
							/>
							<FormControlLabel
								value='No'
								control={<Radio className='evaluation-form-radio-button' />}
								label='No '
							/>
							<FormControlLabel
								value='N/A'
								control={<Radio className='evaluation-form-radio-button' />}
								label='N/A'
							/>
						</RadioGroup>
					</div>
				</div>
				<div className='evaluation-form-comments-section'>
					<div className='evaluation-form-buttons'>
						{/* {!comment ? ( */}
						<button className='evaluation-form-add-comments-button'>
							Add Comment
						</button>
						{/* ) : ( */}
						<button className='evaluation-form-add-comments-button'>
							Hide Comment
						</button>
						{/* )} */}
					</div>
					<Box component='form' noValidate autoComplete='off'>
						<div>
							<InputBase
								id='outlined-textarea'
								placeholder='Add Comment'
								multiline
								variant='outlined'
								fullWidth
								className='evaluation-form-inputbase'
								// value={value}
								// onChange={(e) => setValue(e.target.value)}
							/>
						</div>
					</Box>
				</div>
			</div>
			<Divider className='evaluation-form-divider' />
			<div>
				<div className='evaluation-form-question-answer-block'>
					<div className='evaluation-form-question-layout'>
						<Typography variant='caption' className='evaluation-form-astreisk'>
							*
						</Typography>
						<Typography variant='body1' className='evaluation-form-question'>
							3. Did the agent express patience and courtesy anywhere on the
							call?
						</Typography>
					</div>
					<div className='evaluation-form-answer'>
						<RadioGroup
							value={questionThree}
							onChange={(e) => setQuestionThree(e.target.value)}
							aria-labelledby='demo-radio-buttons-group-label'
							defaultValue=''
							name='radio-buttons-group'
							className='evaluation-form-radio-group'
						>
							<FormControlLabel
								value='Yes'
								control={<Radio className='evaluation-form-radio-button' />}
								label='Yes'
							/>
							<FormControlLabel
								value='No'
								control={<Radio className='evaluation-form-radio-button' />}
								label='No '
							/>
							<FormControlLabel
								value='N/A'
								control={<Radio className='evaluation-form-radio-button' />}
								label='N/A'
							/>
						</RadioGroup>
					</div>
				</div>
				<div className='evaluation-form-comments-section'>
					<div className='evaluation-form-buttons'>
						{/* {!comment ? ( */}
						<button className='evaluation-form-add-comments-button'>
							Add Comment
						</button>
						{/* ) : ( */}
						<button className='evaluation-form-add-comments-button'>
							Hide Comment
						</button>
						{/* )} */}
					</div>
					<Box component='form' noValidate autoComplete='off'>
						<div>
							<InputBase
								id='outlined-textarea'
								placeholder='Add Comment'
								multiline
								variant='outlined'
								fullWidth
								className='evaluation-form-inputbase'
								// value={value}
								// onChange={(e) => setValue(e.target.value)}
							/>
						</div>
					</Box>
				</div>
			</div>
			<Divider className='evaluation-form-divider' />
			<div>
				<div className='evaluation-form-question-answer-block'>
					<div className='evaluation-form-question-layout'>
						<Typography variant='caption' className='evaluation-form-astreisk'>
							*
						</Typography>
						<Typography variant='body1' className='evaluation-form-question'>
							4. Was the customer upset at any point?
						</Typography>
					</div>
					<div className='evaluation-form-answer'>
						<RadioGroup
							value={questionFour}
							onChange={(e) => setQuestionFour(e.target.value)}
							aria-labelledby='demo-radio-buttons-group-label'
							defaultValue=''
							name='radio-buttons-group'
							className='evaluation-form-radio-group'
						>
							<FormControlLabel
								value='Yes'
								control={<Radio className='evaluation-form-radio-button' />}
								label='Yes'
							/>
							<FormControlLabel
								value='No'
								control={<Radio className='evaluation-form-radio-button' />}
								label='No '
							/>
							<FormControlLabel
								value='N/A'
								control={<Radio className='evaluation-form-radio-button' />}
								label='N/A'
							/>
						</RadioGroup>
					</div>
				</div>
				<div className='evaluation-form-comments-section'>
					<div className='evaluation-form-buttons'>
						{/* {!comment ? ( */}
						<button className='evaluation-form-add-comments-button'>
							Add Comment
						</button>
						{/* ) : ( */}
						<button className='evaluation-form-add-comments-button'>
							Hide Comment
						</button>
						{/* )} */}
					</div>
					<Box component='form' noValidate autoComplete='off'>
						<div>
							<InputBase
								id='outlined-textarea'
								placeholder='Add Comment'
								multiline
								variant='outlined'
								fullWidth
								className='evaluation-form-inputbase'
								// value={value}
								// onChange={(e) => setValue(e.target.value)}
							/>
						</div>
					</Box>
				</div>
			</div>
			<Divider className='evaluation-form-divider' />
			<div>
				<div className='evaluation-form-question-answer-block'>
					<div className='evaluation-form-question-layout'>
						<Typography variant='caption' className='evaluation-form-astreisk'>
							*
						</Typography>
						<Typography variant='body1' className='evaluation-form-question'>
							5. Was there any dead air on this call?
						</Typography>
					</div>
					<div className='evaluation-form-answer'>
						<RadioGroup
							value={questionFive}
							onChange={(e) => setQuestionFive(e.target.value)}
							aria-labelledby='demo-radio-buttons-group-label'
							defaultValue=''
							name='radio-buttons-group'
							className='evaluation-form-radio-group'
						>
							<FormControlLabel
								value='Yes'
								control={<Radio className='evaluation-form-radio-button' />}
								label='Yes'
							/>
							<FormControlLabel
								value='No'
								control={<Radio className='evaluation-form-radio-button' />}
								label='No '
							/>
							<FormControlLabel
								value='N/A'
								control={<Radio className='evaluation-form-radio-button' />}
								label='N/A'
							/>
						</RadioGroup>
					</div>
				</div>
				<div className='evaluation-form-comments-section'>
					<div className='evaluation-form-buttons'>
						{/* {!comment ? ( */}
						<button className='evaluation-form-add-comments-button'>
							Add Comment
						</button>
						{/* ) : ( */}
						<button className='evaluation-form-add-comments-button'>
							Hide Comment
						</button>
						{/* )} */}
					</div>
					<Box component='form' noValidate autoComplete='off'>
						<div>
							<InputBase
								id='outlined-textarea'
								placeholder='Add Comment'
								multiline
								variant='outlined'
								fullWidth
								className='evaluation-form-inputbase'
								// value={value}
								// onChange={(e) => setValue(e.target.value)}
							/>
						</div>
					</Box>
				</div>
			</div>
			<Divider className='evaluation-form-divider' />
			<div>
				<div className='evaluation-form-question-answer-block'>
					<div className='evaluation-form-question-layout'>
						<Typography variant='caption' className='evaluation-form-astreisk'>
							*
						</Typography>
						<Typography variant='body1' className='evaluation-form-question'>
							6. Was empathy displayed on this call?
						</Typography>
					</div>
					<div className='evaluation-form-answer'>
						<RadioGroup
							value={questionSix}
							onChange={(e) => setQuestionSix(e.target.value)}
							aria-labelledby='demo-radio-buttons-group-label'
							defaultValue=''
							name='radio-buttons-group'
							className='evaluation-form-radio-group'
						>
							<FormControlLabel
								value='Yes'
								control={<Radio className='evaluation-form-radio-button' />}
								label='Yes'
							/>
							<FormControlLabel
								value='No'
								control={<Radio className='evaluation-form-radio-button' />}
								label='No '
							/>
							<FormControlLabel
								value='N/A'
								control={<Radio className='evaluation-form-radio-button' />}
								label='N/A'
							/>
						</RadioGroup>
					</div>
				</div>
				<div className='evaluation-form-comments-section'>
					<div className='evaluation-form-buttons'>
						{/* {!comment ? ( */}
						<button className='evaluation-form-add-comments-button'>
							Add Comment
						</button>
						{/* ) : ( */}
						<button className='evaluation-form-add-comments-button'>
							Hide Comment
						</button>
						{/* )} */}
					</div>
					<Box component='form' noValidate autoComplete='off'>
						<div>
							<InputBase
								id='outlined-textarea'
								placeholder='Add Comment'
								multiline
								variant='outlined'
								fullWidth
								className='evaluation-form-inputbase'
								// value={value}
								// onChange={(e) => setValue(e.target.value)}
							/>
						</div>
					</Box>
				</div>
			</div>
		</div>
	);
}

export default EvaluationFormQuestionAnswer;
