import React, { useState } from 'react';

import { Divider, Drawer, IconButton, Typography } from '@material-ui/core';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import CloseIcon from '@mui/icons-material/Close';

import EvaluationFormQuestions from './EvaluationFormQuestions';

import './styles.css';

function EvaluationFormQuestionsLayout({
	questionsanswersdata,
	managerqueans,
	evaluationFormCallback,
}) {
	const [open, setOpen] = useState(false);
	const [openManager, setOpenManager] = useState(false);

	const formOpen = () => {
		setOpen(true);
	};

	const formOpenManager = () => {
		setOpenManager(true);
	};

	const formClose = () => {
		setOpen(false);
	};

	const formCloseManager = () => {
		setOpenManager(false);
	};

	return (
		<div>
			<button
				className='evaluation-form-options-paper-layout'
				variant='outlined'
			>
				<div className='evaluation-form-option' onClick={formOpen}>
					<Typography variant='body2' className='evaluation-form-option-type'>
						QA Evaluation Form
					</Typography>
					<ChevronRightIcon />
				</div>
			</button>
			<button
				className='evaluation-form-options-paper-layout'
				variant='outlined'
			>
				<div className='evaluation-form-option' onClick={formOpenManager}>
					<Typography variant='body2' className='evaluation-form-option-type'>
						QA Evaluation Form - Manager
					</Typography>
					<ChevronRightIcon />
				</div>
			</button>
			<Drawer variant='persistent' anchor='right' open={open}>
				<div className='calls-page-evaluationform-header'>
					<IconButton onClick={formClose}>
						<ArrowBackIcon />
					</IconButton>
					<Typography variant='h6' className='evaluation-form-qa-type-heading'>
						QA Evaluation Form
					</Typography>
					<IconButton onClick={formClose}>
						<CloseIcon />
					</IconButton>
				</div>
				<Divider />
				<EvaluationFormQuestions
					questionsanswersdata={questionsanswersdata}
					evaluationFormCallback={evaluationFormCallback}
				/>
			</Drawer>
			<Drawer variant='persistent' anchor='right' open={openManager}>
				<div className='calls-page-evaluationform-header'>
					<IconButton onClick={formCloseManager}>
						<ArrowBackIcon />
					</IconButton>
					<Typography variant='h6' className='evaluation-form-qa-type-heading'>
						QA Evaluation Form - Manager
					</Typography>
					<IconButton onClick={formCloseManager}>
						<CloseIcon />
					</IconButton>
				</div>
				<Divider />
				<EvaluationFormQuestions
					questionsanswersdata={managerqueans}
					evaluationFormCallback={evaluationFormCallback}
				/>
			</Drawer>
		</div>
	);
}

export default EvaluationFormQuestionsLayout;
