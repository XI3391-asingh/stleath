import React, { useState } from 'react';

import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CloseIcon from '@mui/icons-material/Close';

import './styles.css';
import {
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@material-ui/core';
import EvaluationFormQuestion from './EvaluationFormQuestion';

function EvaluationForm({controlWidth}) {
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
		controlWidth('75%')
	};

	const handleDrawerClose = () => {
		setOpen(false);
		
		controlWidth('100%')
	};

	return (
		<div>
			<button
				variant='contained'
				className='sidebar-filter-btn'
				onClick={handleDrawerOpen}
				className='calls-page-evaluationform-button'
				sx={{ ...(open && { display: 'none' }) }}
			>
				<ContentPasteIcon className='calls-page-evaluationform-button-icon' />{' '}
			
				Evaluation Form
			</button>
			<Drawer variant='persistent' anchor='right' open={open}>
				<div containerClassName='calls-page-evaluationform-header'>
					<Typography
						variant='h6'
						style={{marginTop:'12px'}}
						className='calls-page-evaluationform-heading'
					>
				
						Evaluation Form
					</Typography>
					<IconButton onClick={handleDrawerClose}>
						<CloseIcon />
					</IconButton>
				</div>
				<Divider />
				<EvaluationFormQuestion />
			</Drawer>
			
		</div>
	);
}

export default EvaluationForm;
