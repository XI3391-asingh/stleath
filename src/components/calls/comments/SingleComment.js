import React from 'react';

import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import moment from 'moment';

function SingleComment() {
	let dateTime = moment().format('lll');
	let dateTime2 = moment().format('MMM Do YYYY, h:mm a');
	let dateTime3 = Math.floor(moment.duration(400000).asMinutes());
	return (
		<List>
			<React.Fragment>
				<ListItem style={{ display: 'block', padding: '0.5rem' }}>
					<ListItemText
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							color: 'darkgrey',
						}}
						primary={<Typography variant='caption'>Rajat Bansal</Typography>}
						secondary={<Typography variant='caption'>{dateTime}</Typography>}
					/>
					<Paper elevation={3} style={{ borderRadius: '5px' }}>
						<Typography variant='subtitle2' style={{ padding: '0.5rem' }}>
							Comment One given on 28th of October, 2021 at 11:05 AM
						</Typography>
					</Paper>
				</ListItem>
				{/* comment-2 */}
				<ListItem style={{ display: 'block', padding: '0.5rem' }}>
					<ListItemText
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							color: 'darkgrey',
						}}
						primary={<Typography variant='caption'>Jayanth Valluru</Typography>}
						secondary={<Typography variant='caption'>{dateTime2}</Typography>}
					/>
					<Paper elevation={3} style={{ borderRadius: '5px' }}>
						<Typography variant='subtitle2' style={{ padding: '0.5rem' }}>
							Comment One given on 28th of October, 2021 at 11:05 AM
						</Typography>
					</Paper>
				</ListItem>
				{/* Comment -3 */}
				<ListItem style={{ display: 'block', padding: '0.5rem' }}>
					<ListItemText
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							color: 'darkgrey',
						}}
						primary={<Typography variant='caption'>Wasi Muka</Typography>}
						secondary={
							<Typography variant='caption'>{`${dateTime3} minutes ago`}</Typography>
						}
					/>
					<Paper elevation={3} style={{ borderRadius: '5px' }}>
						<Typography variant='subtitle2' style={{ padding: '0.5rem' }}>
							Comment One given on 28th of October, 2021 at 11:05 AM
						</Typography>
					</Paper>
				</ListItem>
			</React.Fragment>
		</List>
	);
}

export default SingleComment;
