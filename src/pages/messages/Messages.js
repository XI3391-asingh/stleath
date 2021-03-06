import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import {
	Badge,
	Card,
	CardContent,
	CardHeader,
	Divider,
	IconButton,
	InputBase,
	Paper,
	TextField,
	Typography,
	Avatar,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/system';
import React from 'react';
import Comments from '../../components/calls/comments/Comments';
import moment from 'moment';
import MessageList from '../../components/messages/MessageList';
import FromMessage from '../../components/messages/FromMessage';
import ToMessage from '../../components/messages/ToMessage';
import messagesData from '../../data/messages.json';

import './styles.css';

function Messages() {
	let dateTime = moment().format('MMM Do YYYY');
	return (
		<div className='messages-page-body-layout'>
			<Card className='messages-page-main-card-layout'>
				<Typography variant='h5' className='messages-page-heading'>
					Messages
				</Typography>
				<Card className='messages-page-card'>
					{/* Autocomplete in MUI */}
					<Box className='messages-page-chat-list'>
						<div className='messages-page-heading'>
							{/* <SearchIcon className='messages-page-search-icon' />
							<input
								type='search'
								name=''
								id=''
								className='messages-page-search-box'
							/> */}
							<Paper component='form' className='messages-page-search-paper'>
								<InputBase
									placeholder='Search...'
									inputProps={{ 'aria-label': 'search google maps' }}
									className='messages-page-search-box'
								/>

								<Divider
									className='messages-page-search-box-divider'
									orientation='vertical'
								/>
								<IconButton
									color='primary'
									type='submit'
									className='messages-page-search-box-icon'
									aria-label='search'
								>
									<SearchIcon />
								</IconButton>
							</Paper>
						</div>
						<Divider />
						<div>
							<MessageList />
						</div>
					</Box>
					<span className='messages-page-chat-divider'></span>
					<Box className='messages-page-chat-message-pane-layout'>
						<div>
							{messagesData.map((messages, index) => {
								return (
									<div className='messages-page-chat-message-pane-header'>
										<div className='messages-page-chat-message-pane-header-layout'>
											<Typography variant='h6'>{messages.name}</Typography>
											<Typography
												variant='caption'
												className='messages-page-chat-message-pane-header-date'
											>
												{dateTime}
											</Typography>
										</div>
										<IconButton>
											<MoreVertIcon />
										</IconButton>
									</div>
								);
							})}
							<Divider className='message-list-divider' />
							{/* <div>
								{messagesData.map((messages, index) => {
									return (
										<>
											<Avatar
												alt='Remy Sharp'
												src='/static/images/avatar/1.jpg'
											/>
											<Paper
												elevation={3}
												className='from-message-paper-format'
											>
												<Typography
													variant='subtitle2'
													className='from-message-text'
												>
													{messages.fromMessage}
												</Typography>
											</Paper>
											<Typography
												variant='caption'
												className='from-message-time'
											>
												{dateTime}
											</Typography>
										</>
									);
								})}
							</div> */}
							<FromMessage />
							<ToMessage />
							{/* <FromMessage /> */}
							<ToMessage />
							<Box
								component='form'
								noValidate
								autoComplete='off'
								className='messages-page-chat-reply-layout'
							>
								<TextField
									id='outlined-textarea'
									label='Comments...'
									placeholder='Your Comment...'
									multiline
									className='messages-page-chat-textfield'
								/>
								<button variant='contained' className='messages-send-button'>
									Send
								</button>
							</Box>
						</div>
					</Box>
				</Card>
			</Card>
		</div>
	);
}

export default Messages;
