import React, { useEffect, useState } from 'react';

import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

import moment from 'moment';

// import CommentsData from '../../../data/comments.json';

function SingleComment(props) {
	// console.log(props);
	let dateTime = moment().format('lll');
	let dateTime2 = moment().format('MMM Do YYYY, h:mm a');
	let dateTime3 = Math.floor(moment.duration(400000).asMinutes());

	// const [state, setstate] = useState([CommentsData]);
	// useEffect(() => {
	// 	localStorage.setItem('comments', JSON.stringify(CommentsData));
	// }, []);
	// function SaveDataToLOcalStorage(data) {
	// 	let a = [];
	// 	a = JSON.parse(localStorage.getItem('comments')) || [];
	// 	a.push(data);
	// 	localStorage.setItem('comments', JSON.stringify(a));
	// }
	return (
		<List>
			<React.Fragment>
				<ListItem style={{ display: 'block', padding: '0.5rem' }}>
					{props.CommentsData.map((comments, index) => {
						return (
							<>
								<ListItemText
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										color: 'darkgrey',
									}}
									primary={
										<Typography variant='caption'>{comments.name}</Typography>
									}
									secondary={
										<Typography variant='caption'>
											{comments.createdAt}
										</Typography>
									}
								/>
								<Paper elevation={3} style={{ borderRadius: '5px' }}>
									<Typography variant='subtitle2' style={{ padding: '0.5rem' }}>
										{comments.comment}
									</Typography>
								</Paper>
							</>
						);
					})}
				</ListItem>
			</React.Fragment>
		</List>
	);
}

export default SingleComment;
