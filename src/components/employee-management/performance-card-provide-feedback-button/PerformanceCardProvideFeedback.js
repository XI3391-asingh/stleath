import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

import './styles.css';

function PerformanceCardProvideFeedback() {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant='contained' onClick={handleOpen}>
				Feedback
			</Button>
			<Modal open={open} onClose={handleClose}>
				<Box className='performance-card-provide-feedback-modal'>
					<div style={{ margin: '2rem' }}>
						<Typography variant='h6'>Monthly Performance Feedback</Typography>
						<Box component='form' noValidate autoComplete='off'>
							<div>
								<TextField
									label='Monthly Feedback'
									placeholder='Placeholder'
									multiline
									fullWidth
								/>
							</div>
						</Box>
					</div>
					<div style={{ margin: '2rem' }}>
						<Typography variant='h6'>Yearly Performance Feedback</Typography>
						<Box component='form' noValidate autoComplete='off'>
							<div>
								<TextField
									label='Monthly Feedback'
									placeholder='Placeholder'
									multiline
									fullWidth
								/>
							</div>
						</Box>
					</div>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<Button variant='contained'>Cancel</Button>
						<Button variant='contained'>Submit</Button>
					</div>
				</Box>
			</Modal>
		</div>
	);
}

export default PerformanceCardProvideFeedback;
