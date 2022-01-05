import {
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
import { useDispatch, useSelector } from 'react-redux';
import Axios from '../../../http/Axios';
import { SET_RELOAD_FEEDBACK } from '../../../store/type';
import TeamData from '../../../data/team.json';

import './styles.css';

function PerformanceCardProvideFeedback() {
	const [open, setOpen] = useState(false);
	const [review, setReview] = React.useState('');
	const [feedback, setFeedback] = React.useState('');
	const dispatch = useDispatch();

	const handleChange = (event) => {
		setReview(event.target.value);
		console.log('Review', review);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const { selectedUser } = useSelector((store) => store.user);

	const handleSubmit = async () => {
		// const headers = {
		// 	'Content-Type': 'application/json',
		// 	Authorization: 'Bearer ' + localStorage.getItem('access_token'),
		// };
		const res = await Axios.post('/add-feedback', {
			feedback: feedback,
			feedback_type: review,
			recipient_id: selectedUser?.name ? selectedUser?.name : TeamData[0].name,
			sender_id: localStorage.getItem('username'),
			// },
			// {
			// 	headers: headers,
		});
		if (res.isSuccess) {
			dispatch({ type: SET_RELOAD_FEEDBACK, payload: true });
			handleClose();
		}
	};

	return (
		<div>
			<button
				className='employee-management-feedback-button'
				onClick={handleOpen}
			>
				Feedback
			</button>
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
								<MenuItem value={'Monthly'}>Monthly</MenuItem>
								<MenuItem value={'Quarterly'}>Quarterly</MenuItem>
								<MenuItem value={'Yearly'}>Yearly</MenuItem>
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
									onChange={(e) => setFeedback(e.target.value)}
								/>
							</div>
						</Box>
					</div>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<button
							className='employee-management-feedback-button'
							onClick={handleClose}
						>
							Cancel
						</button>
						<button
							className='employee-management-feedback-button'
							onClick={handleSubmit}
						>
							Submit
						</button>
					</div>
				</Box>
			</Modal>
		</div>
	);
}

export default PerformanceCardProvideFeedback;
