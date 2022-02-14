import React from 'react';

import {
	Divider,
	IconButton,
	InputBase,
	Paper,
	Typography,
} from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';

import './styles.css';

function EvaluationFormSearchBox() {
	return (
		<div>
			{/* <div> */}
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
			{/* </div> */}
		</div>
	);
}

export default EvaluationFormSearchBox;
