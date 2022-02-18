import React from 'react';

import { Divider, IconButton, InputBase, Paper } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';

import './styles.css';

function EvaluationFormSearchBox() {
	return (
		<div>
			<Paper component='form' className='evaluation-form-search-paper'>
				<InputBase
					placeholder='Search...'
					inputProps={{ 'aria-label': 'search google maps' }}
					className='evaluation-form-search-box'
				/>

				<Divider
					className='evaluation-form-search-box-divider'
					orientation='vertical'
				/>
				<IconButton
					color='primary'
					type='submit'
					className='evaluation-form-search-box-icon'
					aria-label='search'
				>
					<SearchIcon />
				</IconButton>
			</Paper>
		</div>
	);
}

export default EvaluationFormSearchBox;
