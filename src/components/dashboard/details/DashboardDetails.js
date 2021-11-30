import {
	Button,
	FormControl,
	IconButton,
	InputLabel,
	MenuItem,
	Modal,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import './styles.css';

function DashboardDetails() {
	const [open, setOpen] = useState(false);
	// const [reviewInput, setReviewInput] = useState([{ review: '' }]);
	// const [reviewAgent, setReviewAgent] = useState([{ agent: '' }]);
	const [review, setReview] = useState([{ input: '', agent: '' }]);
	const [selectedFile, setSelectedFile] = useState();
	// const [isFilePicked, setIsFilePicked] = useState(false);
	const [isSelected, setIsSelected] = useState(false);

	// const handleChangeReviewInput = (event, index) => {
	// 	setReview([
	// 		...review.map((item, key) =>
	// 			key === index ? { review: event.target.value } : item
	// 		),
	// 	]);
	// };

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleChangeAgent = (event, index) => {
		setReview([
			...review.map((item, key) =>
				key === index ? { review: event.target.value } : item
			),
		]);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleAddFields = () => {
		setReview([...review, { input: '', agent: '' }]);
		// setReview([...reviewAgent, { agent: '' }]);
	};

	const handleRemoveFields = (index) => {
		const values = [...review];
		// const toRemoveValues = [...reviewAgent];
		values.splice(index, 1);
		setReview(values);
		// setReviewAgent(toRemoveValues);
	};
	return (
		<div className='dashboard-details-call-details-layout'>
			<div className='dashboard-details-call-details'>40 of 100 Calls</div>
			<div>
				<Button variant='contained' onClick={handleOpen}>
					Upload
				</Button>
				<Modal open={open} onClose={handleClose}>
					<Box className='dashboard-details-call-details-modal'>
						<div>
							<div>
								<Typography
									variant='h5'
									className='dashboard-details-modal-header'
								>
									Upload Files
								</Typography>
							</div>
							<div className='dashboard-details-add-more'>
								<div className='dashboard-details-dropdowns'>
									<div className='dashboard-details-single-dropdown'>
										{review.map((item, index) => (
											<div style={{ display: 'flex' }}>
												<input
													type='file'
													name='file'
													onChange={changeHandler}
													className='dashboard-details-upload-file-button'
												/>
												<div key={index}>
													<FormControl className='dashboard-details-modal-dropdown'>
														<InputLabel id='demo-simple-select-standard-label'>
															agent
														</InputLabel>
														<Select
															labelId='demo-simple-select-standard-label'
															id='demo-simple-select-standard'
															value={item.review}
															onChange={(e) => handleChangeAgent(e, index)}
															label='Agent'
															style={{ height: '3rem' }}
														>
															<MenuItem value=''>
																<em>Select Agent</em>
															</MenuItem>
															<MenuItem value={10}>Jayanth</MenuItem>
															<MenuItem value={20}>Wasi</MenuItem>
															<MenuItem value={30}>Rajat</MenuItem>
														</Select>
													</FormControl>
												</div>
												<IconButton>
													<HighlightOffIcon
														onClick={() => handleRemoveFields(index)}
														className='dashboard-details-dropdown-delete-button'
													/>
												</IconButton>
											</div>
										))}
									</div>
								</div>
								<Button variant='contained' onClick={() => handleAddFields()}>
									+ Add More
								</Button>
							</div>

							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<Button variant='contained' onClick={handleClose}>
									Cancel
								</Button>
								<Button variant='contained' onClick={handleClose}>
									Submit
								</Button>
							</div>
						</div>
					</Box>
				</Modal>
			</div>
		</div>
	);
}

export default DashboardDetails;
