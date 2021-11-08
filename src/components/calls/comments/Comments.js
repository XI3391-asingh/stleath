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
					{/* <Card className='comments-card'> */}
					<SingleComment />
					{/* <Typography variant='subtitle2' className='comments-font'>
						Comment One From Manager
					</Typography>
					<Typography variant='subtitle2' className='comments-font'>
						Comment One From Manager, and added comment two
					</Typography>
					<Typography variant='subtitle2' className='comments-font'>
						Comment One From Manager, fjhughhv, afbjehuh and
						bbjsgrufbrhgkbbmcdhnadjufnd
					</Typography>
					<Typography variant='subtitle2' className='comments-font'>
						Comment One From Manager, fjhughhv, afbjehuh and
						bbjsgrufbrhgkbbmcdhnadjufnd
					</Typography>
					<Typography variant='subtitle2' className='comments-font'>
						Comment One From Manager, fjhughhv, afbjehuh and
						bbjsgrufbrhgkbbmcdhnadjufnd
					</Typography>
					<Typography variant='subtitle2' className='comments-font'>
						Comment One From Manager, fjhughhv, afbjehuh and
						bbjsgrufbrhgkbbmcdhnadjufnd
					</Typography>
					<Typography variant='subtitle2' className='comments-font'>
						Comment One From Manager, fjhughhv, afbjehuh and
						bbjsgrufbrhgkbbmcdhnadjufnd
					</Typography>
					<Typography variant='subtitle2' className='comments-font'>
						Comment One From Manager, fjhughhv, afbjehuh and
						bbjsgrufbrhgkbbmcdhnadjufnd
					</Typography>
					<Typography variant='subtitle2' className='comments-font'>
						Comment One From Manager, fjhughhv, afbjehuh and
						bbjsgrufbrhgkbbmcdhnadjufnd
					</Typography>
					<Typography variant='subtitle2' className='comments-font'>
						Comment One From Manager, fjhughhv, afbjehuh and
						bbjsgrufbrhgkbbmcdhnadjufnd
					</Typography> */}
					{/* </Card> */}
				</div>
			</div>
			<div>
				{/* <TextField id='outlined-basic' label='outlined' variant='outlined' /> */}
				<Box
					component='form'
					// sx={{ '& .MuiTextField-root': { m: '0.5rem', width: '14rem' } }}
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
