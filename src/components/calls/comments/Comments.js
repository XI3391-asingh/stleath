import React, { useEffect, useState } from 'react';

import { Box, Card, TextField, Typography } from '@mui/material';
import { Button } from '@material-ui/core';
import moment from 'moment';

import '../styles.css';
import SingleComment from './SingleComment';
import CommentsData from '../../../data/comments.json';

function Comments({ callid, agent_name }) {
	const [state, setState] = useState([]);
	const [value, setValue] = useState('');

	useEffect(() => {
		getCallDetails();
	}, [callid]);

	const getCallDetails = () => {
		fetch('http://13.127.135.117:8080/api/get-call-details/' + callid, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('access_token'),
			},
		})
			.then((response) => response.json())
			.then((result) => {
				if (result?.code === 200) {
					setState(result?.data.call_comments);
				}
			})
			.catch((error) => console.log('error', error));
	};

	function SaveDataToLOcalStorage() {
		var myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		var raw = JSON.stringify({
			call_id: parseInt(callid),
			comment: value,
			commented_by: localStorage.getItem('username'),
			recipient_id: agent_name,
		});
		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
		};
		fetch('http://13.127.135.117:8080/api/add-comment', requestOptions)
			.then((response) => response.json())
			.then((result) => {
				if (result?.code === 200) {
					setState([...state, result?.data]);
					setValue('');
				}
			})
			.catch((error) => console.log('error', error));

		//   let a = [];
		// a = JSON.parse(localStorage.getItem("comments")) || [];
		// a.push({
		//   name: "Wasi Muka",
		//   date: moment().format("MMM Do YYYY, h:mm a"),
		//   comment: value,
		// });
		// setState(a);
		// localStorage.setItem("comments", JSON.stringify(a));
		// setValue("");
	}

	return (
		<div className='comments-card-layout'>
			<div>
				<Typography variant='h5'>Comments</Typography>
			</div>
			<div>
				<div className='comments-block'>
					<SingleComment CommentsData={state} />
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
