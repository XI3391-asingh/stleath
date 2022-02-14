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

import EvaluationFormSearchBox from './EvaluationFormSearchBox';
import CloseIcon from '@mui/icons-material/Close';

import './styles.css';
import EvaluationFormQuestionsLayout from './EvaluationFormQuestionsLayout';

function EvaluationFormOptions() {
	// const [open, setOpen] = useState(false);

	// const formChange = () => {
	// 	setOpen(true);
	// };

	// const formClose = () => {
	// 	setOpen(false);
	// };

	return (
		<div>
			<div>
				<EvaluationFormSearchBox />
				<div className='evaluation-form-options'>
					<Typography variant='h6' className='evaluation-form-options-heading'>
						New Evaluation
					</Typography>
				</div>
				<div>
					<Box>
						{/* <button
							className='evaluation-form-options-paper-layout'
							variant='outlined'
						>
							<div className='evaluation-form-option' onClick={formChange}>
								<Typography
									variant='body2'
									className='evaluation-form-option-type'
								>
									Evaluation Form
								</Typography>
								<ChevronRightIcon />
							</div>
						</button>
						<button
							className='evaluation-form-options-paper-layout'
							variant='outlined'
						>
							<div className='evaluation-form-option' onClick={formChange}>
								<Typography
									variant='body2'
									className='evaluation-form-option-type'
								>
									Evaluation Form - Manager
								</Typography>
								<ChevronRightIcon />
							</div>
						</button> */}
						<EvaluationFormQuestionsLayout />
					</Box>
				</div>
			</div>
			{/* <Drawer variant='persistent' anchor='right' open={open}>
				<div className='calls-page-evaluationform-header'>
					<Typography
						variant='h6'
						className='calls-page-evaluationform-heading'
					>
						Evaluation Form
					</Typography>
					<IconButton onClick={formClose}>
						<CloseIcon />
					</IconButton>
				</div>
				<Divider />
				<EvaluationFormOptions />
			</Drawer> */}
		</div>
	);
}

export default EvaluationFormOptions;
