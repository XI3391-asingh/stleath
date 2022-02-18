import React from 'react';

import { Divider, Typography } from '@material-ui/core';

import EvaluationFormQuestionAnswer from './EvaluationFormQuestionAnswer';

import './styles.css';

function EvaluationFormQuestions({
	questionsanswersdata,
	evaluationFormCallback,
}) {
	return (
		<div>
			{/* //   <div className="evaluation-form-buttons">
    //     <button className="evaluation-form-discard-button">Discard</button>
    //     <button className="evaluation-form-submit-button" type="button" >
    //       Submit
    //     </button>
    //   </div>
    //   <Divider />
    //   <div>
    //     <div className="evaluation-form-layout">
    //       <div className="evaluation-form-header">
    //         <Typography variant="body1">Items</Typography>
    //       </div>
    //       <Divider />
    //       <div className="evaluation-form-content"> */}
			{questionsanswersdata?.length > 0 && (
				<EvaluationFormQuestionAnswer
					questionsanswersdata={questionsanswersdata}
					evaluationFormCallback={evaluationFormCallback}
				/>
			)}
			{/* //       </div>
    //     </div>
    //   </div> */}
		</div>
	);
}

export default EvaluationFormQuestions;
