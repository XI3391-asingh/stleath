import {
	Alert,
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
import CloseOutlined from '@mui/icons-material/CloseOutlined';

import './styles.css';
import DashboardSnackbar from '../dashboard-snackbar/DashboardSnackbar';
import indexService from '../../../service/index';
import { useDispatch, useSelector } from 'react-redux';
import { GET_GENERATE_SPEECH_REPORT } from '../../../store/type';

function DashboardDetails() {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [review, setReview] = useState([{ input: '', agent: '' }]);
	const [snackbar, setSnackbar] = useState(false);
	const [count, setCount] = useState(0);
	const { vertical, horizontal, openSnackbar } = snackbar;
	const { isAnalysisDone } = useSelector((store) => store.dashboard);

	const changeHandler = (event, i) => {
		const values = [...review];
		let filesarr = [];
		if (event?.target?.files?.length) {
			const files = event.target.files;
			for (let i = 0; i < files.length; i++) {
				filesarr.push(files[i]);
			}
			// values[i].input = event.target.files[0];
			values[i].input = filesarr;
			setReview(values);
		}
	};

	const submitHandler = async () => {
		var formdata = new FormData();
		if (review?.length && review[0] && review[0]?.input?.length) {
			review[0]?.input?.map((value, index) => {
				formdata.append('files', value);
			});
			formdata.append('agent_name', review[0].agent);

			indexService.uplaodFiles(formdata).then((resp) => {
				if (resp.isSuccess) {
					setReview([{ input: '', agent: '' }]);
					handleClose();
					setSnackbar({ openSnackbar: true });
					setCount(resp?.data?.length);
				}
			});

			// var myHeaders = new Headers();
			// // myHeaders.append('Content-Type', 'application/json');
			// myHeaders.append(
			// 	'Authorization',
			// 	'Bearer ' + localStorage.getItem('access_token')
			// );

			// var requestOptions = {
			// 	method: 'POST',
			// 	body: formdata,
			// 	headers: myHeaders,
			// };
			// fetch('http://13.127.135.117:8080/api/s3gallery-upload', requestOptions)
			// 	.then((response) => response.json())
			// 	.then((result) => {
			// 		if (result?.code === 200) {
			// 			setReview([{ input: '', agent: '' }]);
			// 			handleClose();
			// 			setSnackbar({ openSnackbar: true });
			// 			setCount(result?.data?.length);
			// 		}
			// 	})
			// 	.catch((error) => console.log('error', error));
		}
	};

	const generateAnalysis = () => {
		indexService.generateAnalysis().then((resp) => {
			if (resp.isSuccess) {
				dispatch({
					type: GET_GENERATE_SPEECH_REPORT,
					payload: true,
				});
			}
		});
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

	const handleSnackbarClose = () => {
		setSnackbar(false);
	};

	const handleGenerateAnalysisClose = () => {
		dispatch({
			type: GET_GENERATE_SPEECH_REPORT,
			payload: false,
		});
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

	const action = (
		<React.Fragment>
			<IconButton
				size='small'
				aria-label='close'
				color='inherit'
				onClick={handleSnackbarClose}
			>
				<CloseOutlined fontSize='small' />
			</IconButton>
		</React.Fragment>
	);

	return (
		<div className='dashboard-details-call-details-layout'>
			<div className='dashboard-details-call-details'></div>
			<div>
				<button
					// variant='contained'
					onClick={handleOpen}
					className='dashboard-details-upload-button'
				>
					Upload
				</button>
				<button
					variant='contained'
					className='dashboard-details-upload-button'
					onClick={generateAnalysis}
				>
					Generate Analysis
				</button>
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
													{/* <span htmlFor="fileLabel">
                            {item?.input?.name
                              ? item?.input?.name
                              : "Choose file"}
                          </span> */}
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
															<MenuItem value={'Jayant Raja'}>Jayanth</MenuItem>
															<MenuItem value={'Wasi Muka'}>Wasi</MenuItem>
															<MenuItem value={'Rajat Bansal'}>Rajat</MenuItem>
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
								{/* <button variant='contained' onClick={() => handleAddFields()}>
									+ Add More
								</button> */}
							</div>

							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<button
									className='dashboard-details-upload-button'
									onClick={handleClose}
								>
									Cancel
								</button>
								{/* <Stack spacing={2} sx={{ width: '100%' }}> */}
								<button
									className='dashboard-details-upload-button'
									onClick={submitHandler}
								>
									Submit
								</button>
							</div>
						</div>
					</Box>
				</Modal>
				{/* <DashboardSnackbar /> */}

				<Snackbar
					anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
					key={vertical + horizontal}
					open={snackbar}
					autoHideDuration={4000}
					onClose={handleSnackbarClose}
					action={action}
					className='dashboard-details-upload-snackbar'
				>
					<Alert
						onClose={handleSnackbarClose}
						severity='success'
						sx={{ width: '100%' }}
					>
						{`${count} calls got uploaded successfully`}
					</Alert>
				</Snackbar>

				<Snackbar
					anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
					key={vertical + horizontal}
					open={isAnalysisDone}
					autoHideDuration={4000}
					onClose={handleGenerateAnalysisClose}
					action={action}
					className='dashboard-details-upload-snackbar'
				>
					<Alert
						onClose={handleGenerateAnalysisClose}
						severity='success'
						sx={{ width: '100%' }}
					>
						The analysis will be generated
					</Alert>
				</Snackbar>
			</div>
		</div>
	);
}

export default DashboardDetails;
