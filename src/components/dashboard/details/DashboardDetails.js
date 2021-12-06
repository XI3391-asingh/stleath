import {
	Alert,
	Button,
	FormControl,
	IconButton,
	InputLabel,
	MenuItem,
	Modal,
	Select,
	Snackbar,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import './styles.css';
import DashboardSnackbar from '../dashboard-snackbar/DashboardSnackbar';

function DashboardDetails() {
	const [open, setOpen] = useState(false);
	const [review, setReview] = useState([{ input: '', agent: '' }]);
	const [selectedFile, setSelectedFile] = useState([]);
	const [isSelected, setIsSelected] = useState(false);

	const changeHandler = (event, i) => {
		const values = [...review];
		values[i].input = event.target.files[0];
		setReview(values);
	};

	const submitHandler = async () => {
		var formdata = new FormData();
		console.log(review);
		review.map((value, index) => {
			formdata.append('files', value?.input);
			console.log(value);
		});
		formdata.append('agent_name', 'waasi');

		var requestOptions = {
			method: 'POST',
			body: formdata,
			redirect: 'follow',
		};

		fetch('http://13.127.135.117:8080/api/s3gallery-upload', requestOptions)
			.then((response) => response.text())
			.then((result) => {
				setReview([{ input: '', agent: '' }]);
				handleClose();
			})
			.catch((error) => console.log('error', error));
	};

	const generateAnalysis = () => {
		var requestOptions = {
			method: 'GET',
			redirect: 'follow',
		};

		fetch(
			'http://13.127.135.117:8080/api/generate-speech-to-text',
			requestOptions
		)
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log('error', error));
	};

	const handleChangeAgent = (event, index) => {
		const values = [...review];
		values[index].agent = event.target.value;
		setReview(values);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	// const handleSnackbarClose = () => {
	// 	setOpen(false);
	// };

	const handleAddFields = () => {
		const values = [...review];
		values.push({
			input: '',
			agent: '',
		});
		setReview(values);
	};

	const handleRemoveFields = (index) => {
		const values = [...review];
		let fd = review.filter((img, i) => i !== index);
		console.log(fd);
		setReview(fd);
	};
	return (
		<div className='dashboard-details-call-details-layout'>
			<div className='dashboard-details-call-details'></div>
			<div>
				<Button
					variant='contained'
					onClick={handleOpen}
					style={{ marginRight: '1rem' }}
				>
					Upload
				</Button>
				<Button
					variant='contained'
					style={{ marginRight: '1rem' }}
					onClick={generateAnalysis}
				>
					Generate Analysis
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
											<div
												className='dashboard-file'
												style={{
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'space-between',
												}}
											>
												<div className='dashboard-details-upload-button-container'>
													<input
														type='file'
														name='file'
														accept='audio/*'
														id='files'
														multiple
														onChange={(e) => changeHandler(e, index)}
														className='dashboard-details-upload-file-button'
													/>
													<span htmlFor='fileLabel'>
														{item?.input?.name
															? item?.input?.name
															: 'Choose file'}
													</span>
												</div>
												<div
													key={index}
													className='dashboard-details-dropdown-container'
												>
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
													<IconButton>
														<HighlightOffIcon
															onClick={() => handleRemoveFields(index)}
															className='dashboard-details-dropdown-delete-button'
														/>
													</IconButton>
												</div>
											</div>
										))}
									</div>
								</div>
								{/* <Button variant='contained' onClick={() => handleAddFields()}>
									+ Add More
								</Button> */}
							</div>

							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<Button variant='contained' onClick={handleClose}>
									Cancel
								</Button>
								{/* <Stack spacing={2} sx={{ width: '100%' }}> */}
								<Button variant='contained' onClick={submitHandler}>
									<DashboardSnackbar />
								</Button>
								{/* <Snackbar
										open={open}
										autoHideDuration={6000}
										onClose={handleSnackbarClose}
									>
										<Alert
											onClose={handleSnackbarClose}
											severity='success'
											sx={{ width: '100%' }}
										>
											2 calls got uploaded successfully
										</Alert>
									</Snackbar>
								</Stack> */}
							</div>
						</div>
					</Box>
				</Modal>
			</div>
		</div>
	);
}

export default DashboardDetails;
