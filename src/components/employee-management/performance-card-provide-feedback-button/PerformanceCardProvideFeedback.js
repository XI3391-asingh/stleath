import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Modal,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

import './styles.css';

function PerformanceCardProvideFeedback() {
	const [open, setOpen] = useState(false);
	const [review, setReview] = React.useState('');

	const handleChange = (event) => {
		setReview(event.target.value);
	};

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
						<Typography variant='h6'>Feedback Type</Typography>
						{/* <Box component='form' noValidate autoComplete='off'>
							<div>
								<TextField
									label='Monthly Feedback'
									placeholder='Placeholder'
									multiline
									fullWidth
								/>
							</div>
						</Box> */}
						<FormControl
							className='performance-card-modal-dropdown'
							// sx={{ m: 1, minWidth: 120 }}
						>
							<InputLabel id='demo-simple-select-standard-label'>
								review
							</InputLabel>
							<Select
								labelId='demo-simple-select-standard-label'
								id='demo-simple-select-standard'
								value={review}
								onChange={handleChange}
								label='Review'
							>
								<MenuItem value=''>
									<em>Review</em>
								</MenuItem>
								<MenuItem value={10}>Monthly</MenuItem>
								<MenuItem value={20}>Quarterly</MenuItem>
								<MenuItem value={30}>Yearly</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div style={{ margin: '2rem' }}>
						<Typography variant='h6'>Comments</Typography>
						<Box component='form' noValidate autoComplete='off'>
							<div>
								<TextField
									label='Feedback'
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
