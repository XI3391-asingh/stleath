import React, { useEffect, useState } from 'react';

import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

import moment from 'moment';

function SingleComment(props) {
	return (
		<List>
			<React.Fragment>
				<ListItem style={{ display: 'block', padding: '0.5rem' }}>
					{props?.CommentsData?.length > 0 &&
						props?.CommentsData?.map((comments, index) => {
							return (
								<>
									<ListItemText
										key={index}
										style={{
											display: 'flex',
											justifyContent: 'space-between',
											color: 'darkgrey',
										}}
										primary={
											<Typography variant='caption'>
												{comments.commented_by}
											</Typography>
										}
										secondary={
											<Typography variant='caption'>
												{comments.createdAt}
											</Typography>
										}
									/>
									<Paper elevation={3} style={{ borderRadius: '5px' }}>
										<Typography
											variant='subtitle2'
											style={{ padding: '0.5rem' }}
										>
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
