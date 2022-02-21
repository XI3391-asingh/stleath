import React from 'react';

import { Box, Typography } from '@material-ui/core';

import EvaluationFormSearchBox from './EvaluationFormSearchBox';
import EvaluationFormQuestionsLayout from './EvaluationFormQuestionsLayout';

import './styles.css';

function EvaluationFormOptions({
	questionsanswersdata,
	managerqueans,
	evaluationFormCallback,
}) {
	return (
		<div>
			<div className='evaluation-form-options-layout'>
				{/* <EvaluationFormSearchBox /> */}
				<div className='evaluation-form-options'>
					<Typography
						variant='subtitle2'
						className='evaluation-form-options-heading'
					>
						New Evaluation
					</Typography>
				</div>
				<div>
					<Box>
						<EvaluationFormQuestionsLayout
							questionsanswersdata={questionsanswersdata}
							managerqueans={managerqueans}
							evaluationFormCallback={evaluationFormCallback}
						/>
					</Box>
				</div>
			</div>
		</div>
	);
}

export default EvaluationFormOptions;
