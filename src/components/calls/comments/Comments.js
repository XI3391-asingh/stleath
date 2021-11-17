import React from 'react';

import { Box, Card, TextField, Typography } from '@mui/material';
import { Button } from '@material-ui/core';

import '../styles.css';
import SingleComment from './SingleComment';

function Comments() {
	return (
		<div className='comments-card-layout'>
			<div>
				<Typography variant='h5'>Comments</Typography>
			</div>
			<div>
				<div className='comments-block'>
					<SingleComment />
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
					/>
					<Button variant='contained' className='comments-send-button'>
						Send
					</Button>
				</Box>
			</div>
		</div>
	);
}

export default Comments;
