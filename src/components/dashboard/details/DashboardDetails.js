import {
	Alert,
	FormControl,
	IconButton,
	Modal,
	Snackbar,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CloseOutlined from '@mui/icons-material/CloseOutlined';

import Select from 'react-select';

import indexService from '../../../service/index';
import { useDispatch, useSelector } from 'react-redux';
import { GET_GENERATE_SPEECH_REPORT, CALL_FOR_STT } from '../../../store/type';

import './styles.css';

const options = {
	id: '1',
	label: 'Agent Name',
	options: [
		{ value: '', label: 'Select an Agent' },
		{ value: 'Jayant Raja', label: 'Jayanth' },
		{ value: 'Wasi Muka', label: 'Wasi' },
		{ value: 'Rajat Bansal', label: 'Rajat' },
		{ value: 'Servashree L', label: 'Servashree L' },
	],
};

function DashboardDetails() {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [review, setReview] = useState([{ input: '', agent: '' }]);
	const [snackbar, setSnackbar] = useState(false);
	const [isGenerateAnalysis, setIsGenerateAnalysis] = useState(true);
	const [isInProgress, setIsInProgress] = useState(false);
	const [count, setCount] = useState(0);
	const { vertical, horizontal, openSnackbar } = snackbar;
	const { isAnalysisDone, callforstt } = useSelector(
		(store) => store.dashboard
	);
	console.log(callforstt);
	//   callPendingForStt
	useEffect(() => {
		callforsttchech();
	}, []);

	const callforsttchech = () => {
		indexService.getcallforstt().then((resp) => {
			if (resp.isSuccess) {
				setIsGenerateAnalysis(
					resp?.data?.callPendingForStt <= 0 ? true : false
				);
				dispatch({
					type: CALL_FOR_STT,
					payload: resp?.data,
				});
			}
		});
	};

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
					callforsttchech();
				}
			});
		}
	};

	const generateAnalysis = () => {
		indexService.generateAnalysis().then((resp) => {
			if (resp.isSuccess) {
				setIsGenerateAnalysis(true);
				setIsInProgress(true);
				dispatch({
					type: GET_GENERATE_SPEECH_REPORT,
					payload: true,
				});
			}
		});
	};

	const handleChangeAgent = (event, index) => {
		const values = [...review];
		values[index].agent = event.value;
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
				{isInProgress ? (
					<div className='generateanalysis-text'>
						Transcription is in progress.
					</div>
				) : (
					<div className='generateanalysis-text'>
						{callforstt && callforstt.callPendingForStt} No. of calls pending
						for transcription.
					</div>
				)}
				<button
					// variant='contained'
					onClick={handleOpen}
					// className={`dashboard-details-upload-button ${
					// 	!isGenerateAnalysis ? 'btn-disabled' : ''
					// }`}
					className='dashboard-details-upload-button'
				>
					Upload
				</button>
				<button
					variant='contained'
					className={`dashboard-details-upload-button ${
						isGenerateAnalysis ? 'btn-disabled' : ''
					}`}
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
													justifyContent: 'center',
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
												</div>
												<div
													key={index}
													className='dashboard-details-dropdown-container'
												>
													<FormControl className='dashboard-details-modal-dropdown'>
														<label className='dashboard-details-modal-dropdown-label'>
															Agent:
														</label>
														<Select
															value={item.review}
															onChange={(e) => handleChangeAgent(e, index)}
															label='Agent'
															className='dashboard-details-modal-dropdown-layout'
															options={options.options}
														/>
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
								{/* 
								TODO: NEED THIS IN THE FUTURE WHEN WE WANT TO ADD MORE FIELDS FOR THE MULTIPLE AGENTS
								<button variant='contained' onClick={() => handleAddFields()}>
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
