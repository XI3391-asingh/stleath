import React, { useEffect, useState } from 'react';
import { Box, Card, TextField, Typography } from '@mui/material';
import { Button } from '@material-ui/core';
import moment from 'moment';
import '../styles.css';
import SingleComment from './SingleComment';
import indexService from '../../../service/index';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_COMMENTS, ADD_COMMENT } from '../../../store/type';

function Comments({ callid, agent_name }) {
	const dispatch = useDispatch();
	const [value, setValue] = useState('');
	const { comments } = useSelector((store) => store.call);

	useEffect(() => {
		getCallDetails();
	}, [callid]);

	const getCallDetails = () => {
		indexService.getCallDetails(callid).then((resp) => {
			if (resp.isSuccess) {
				dispatch({
					type: GET_ALL_COMMENTS,
					payload: resp?.data?.call_comments,
				});
			}
		});
	};

	function SaveDataToLOcalStorage() {
		var raw = JSON.stringify({
			call_id: parseInt(callid),
			comment: value,
			commented_by: localStorage.getItem('username'),
			recipient_id: agent_name,
		});

		indexService.addComment(raw).then((resp) => {
			if (resp.isSuccess) {
				dispatch({
					type: ADD_COMMENT,
					payload: resp?.data,
				});
				setValue('');
			}
		});
	}

	return (
		<div className='comments-card-layout'>
			<div>
				<Typography variant='h5'>Comments</Typography>
			</div>
			<div>
				<div className='comments-block'>
					<SingleComment CommentsData={comments} />
				</div>
			</div>
			<div>
				<Box
					component='form'
					noValidate
					autoComplete='off'
					style={{ textAlign: 'left', margin: '0.9rem' }}
				>
					<TextField
						id='outlined-textarea'
						label='Comments...'
						placeholder='Your Comment...'
						multiline
						className='comments-textfield'
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<Button
						type='button'
						variant='contained'
						className='comments-send-button'
						onClick={SaveDataToLOcalStorage}
					>
						Send
					</Button>
				</Box>
			</div>
		</div>
	);
}

export default Comments;
