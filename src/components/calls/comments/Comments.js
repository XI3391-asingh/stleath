import React, { useEffect, useState } from 'react';

import { Box, Card, TextField, Typography } from '@mui/material';
import { Button } from '@material-ui/core';
import moment from 'moment';

import '../styles.css';
import SingleComment from './SingleComment';
import CommentsData from '../../../data/comments.json';

function Comments() {
	const [state, setState] = useState(CommentsData);
	const [value, setValue] = useState('');

	useEffect(() => {
		if (!localStorage.getItem('comments')) {
			localStorage.setItem('comments', JSON.stringify(CommentsData));
		}
		setState(JSON.parse(localStorage.getItem('comments')) || []);
	}, []);

	function SaveDataToLOcalStorage() {
		let a = [];
		a = JSON.parse(localStorage.getItem('comments')) || [];
		a.push({
			name: 'Wasi Muka',
			date: moment().format('MMM Do YYYY, h:mm a'),
			comment: value,
		});
		setState(a);
		localStorage.setItem('comments', JSON.stringify(a));
		setValue('');
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
