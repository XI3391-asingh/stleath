import React from 'react';

import EvaluationFormQuestionAnswer from './EvaluationFormQuestionAnswer';

import './styles.css';

function EvaluationFormQuestions({
	questionsanswersdata,
	evaluationFormCallback,
	setOpen,
}) {
	return (
		<div>
			{questionsanswersdata?.length > 0 && (
				<EvaluationFormQuestionAnswer
					questionsanswersdata={questionsanswersdata}
					evaluationFormCallback={evaluationFormCallback}
					setOpen={setOpen}
				/>
			)}
		</div>
	);
}

export default EvaluationFormQuestions;
