import React, { useState } from 'react';

import {
	Box,
	Divider,
	Drawer,
	IconButton,
	Paper,
	Typography,
} from '@material-ui/core';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import EvaluationFormSearchBox from './EvaluationFormSearchBox';
import CloseIcon from '@mui/icons-material/Close';

import EvaluationFormQuestions from './EvaluationFormQuestions';

import './styles.css';

function EvaluationFormQuestionsLayout() {
	const [open, setOpen] = useState(false);
	const [openManager, setOpenManager] = useState(false);

	const formOpen = () => {
		setOpen(true);
	};

	const formOpenManager = () => {
		setOpen(true);
	};

	const formClose = () => {
		setOpen(false);
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
					<Typography
						variant='h6'
						className='calls-page-evaluationform-heading'
					>
						QA Evaluation Form
					</Typography>
					<IconButton onClick={formClose}>
						<CloseIcon />
					</IconButton>
				</div>
				<Divider />
				<EvaluationFormQuestions />
			</Drawer>
		</div>
	);
}

export default EvaluationFormQuestionsLayout;
