import React from 'react';

import {
	Card,
	CardContent,
	CardHeader,
	Divider,
	Typography,
} from '@material-ui/core';

import './styles.css';
import EvaluationFormQuestionAnswer from './EvaluationFormQuestionAnswer';

function EvaluationFormQuestions() {
	return (
		<div>
			<div className='evaluation-form-buttons'>
				<button className='evaluation-form-discard-button'>Discard</button>
				<button className='evaluation-form-submit-button'>Submit</button>
			</div>
			<Divider />
			<div>
				<Card className='evaluation-form-card'>
					<CardHeader className='evaluation-form-card-header'>Items</CardHeader>
					<Divider />
					<CardContent className='evaluation-form-card-content'>
						{/* <Typography>bfjrbgkb</Typography> */}
						<EvaluationFormQuestionAnswer />
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

export default EvaluationFormQuestions;
