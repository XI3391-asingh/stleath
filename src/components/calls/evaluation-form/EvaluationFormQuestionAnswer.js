import {
	Divider,
	FormControlLabel,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from '@material-ui/core';
import React from 'react';

function EvaluationFormQuestionAnswer() {
	return (
		<div>
			<div className='evaluation-form-question-answer-block'>
				<div className='evaluation-form-question'>
					<Typography variant='caption' className='evaluation-form-astreisk'>
						*
					</Typography>
					<Typography variant='body1'>
						1. Did the agent verify the customer?
					</Typography>
				</div>
				<div className='evaluation-form-answer'>
					<RadioGroup
						aria-labelledby='demo-radio-buttons-group-label'
						defaultValue=''
						name='radio-buttons-group'
						className='evaluation-form-radio-group'
					>
						<FormControlLabel value='Yes' control={<Radio />} label='Yes' />
						<FormControlLabel value='No' control={<Radio />} label='No ' />
						<FormControlLabel value='N/A' control={<Radio />} label='N/A' />
					</RadioGroup>
					<button className='evaluation-form-add-comments-button'>
						Add Comment
					</button>
					<button className='evaluation-form-add-comments-button'>
						Hide Comment
					</button>
					<TextField
						id='outlined-textarea'
						label='Comments...'
						placeholder='Your Comment...'
						multiline
						className='comments-textfield'
						// value={value}
						// onChange={(e) => setValue(e.target.value)}
					/>
				</div>
			</div>
			<Divider />
			<div className='evaluation-form-question-answer-block'>
				<div className='evaluation-form-question'>
					<Typography variant='caption' className='evaluation-form-astreisk'>
						*
					</Typography>
					<Typography variant='body1'>
						1. Did the agent verify the customer?
					</Typography>
				</div>
				<div className='evaluation-form-answer'>
					<RadioGroup
						aria-labelledby='demo-radio-buttons-group-label'
						defaultValue=''
						name='radio-buttons-group'
						className='evaluation-form-radio-group'
					>
						<FormControlLabel value='Yes' control={<Radio />} label='Yes' />
						<FormControlLabel value='No' control={<Radio />} label='No ' />
						<FormControlLabel value='N/A' control={<Radio />} label='N/A' />
					</RadioGroup>
					<button className='evaluation-form-add-comments-button'>
						Add Comment
					</button>
					<button className='evaluation-form-add-comments-button'>
						Hide Comment
					</button>
					<TextField
						id='outlined-textarea'
						label='Comments...'
						placeholder='Your Comment...'
						multiline
						className='comments-textfield'
						// value={value}
						// onChange={(e) => setValue(e.target.value)}
					/>
				</div>
			</div>
			<Divider />
			<div className='evaluation-form-question-answer-block'>
				<div className='evaluation-form-question'>
					<Typography variant='caption' className='evaluation-form-astreisk'>
						*
					</Typography>
					<Typography variant='body1'>
						1. Did the agent verify the customer?
					</Typography>
				</div>
				<div className='evaluation-form-answer'>
					<RadioGroup
						aria-labelledby='demo-radio-buttons-group-label'
						defaultValue=''
						name='radio-buttons-group'
						className='evaluation-form-radio-group'
					>
						<FormControlLabel value='Yes' control={<Radio />} label='Yes' />
						<FormControlLabel value='No' control={<Radio />} label='No ' />
						<FormControlLabel value='N/A' control={<Radio />} label='N/A' />
					</RadioGroup>
					<button className='evaluation-form-add-comments-button'>
						Add Comment
					</button>
					<button className='evaluation-form-add-comments-button'>
						Hide Comment
					</button>
					<TextField
						id='outlined-textarea'
						label='Comments...'
						placeholder='Your Comment...'
						multiline
						className='comments-textfield'
						// value={value}
						// onChange={(e) => setValue(e.target.value)}
					/>
				</div>
			</div>
			<Divider />
			<div className='evaluation-form-question-answer-block'>
				<div className='evaluation-form-question'>
					<Typography variant='caption' className='evaluation-form-astreisk'>
						*
					</Typography>
					<Typography variant='body1'>
						1. Did the agent verify the customer?
					</Typography>
				</div>
				<div className='evaluation-form-answer'>
					<RadioGroup
						aria-labelledby='demo-radio-buttons-group-label'
						defaultValue=''
						name='radio-buttons-group'
						className='evaluation-form-radio-group'
					>
						<FormControlLabel value='Yes' control={<Radio />} label='Yes' />
						<FormControlLabel value='No' control={<Radio />} label='No ' />
						<FormControlLabel value='N/A' control={<Radio />} label='N/A' />
					</RadioGroup>
					<button className='evaluation-form-add-comments-button'>
						Add Comment
					</button>
					<button className='evaluation-form-add-comments-button'>
						Hide Comment
					</button>
					<TextField
						id='outlined-textarea'
						label='Comments...'
						placeholder='Your Comment...'
						multiline
						className='comments-textfield'
						// value={value}
						// onChange={(e) => setValue(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
}

export default EvaluationFormQuestionAnswer;
