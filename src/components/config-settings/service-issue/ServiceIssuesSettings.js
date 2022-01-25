import { Autocomplete, TextField, Typography } from '@mui/material';
import React from 'react';

function ServiceIssuesSettings({ data, defaultdata, onchangedata }) {
	const handleClick = () => {
		console.info('You clicked the Chip.');
	};

	const handleDelete = () => {
		console.info('You clicked the delete icon.');
	};

	return (
		<div className='service-issue-layout'>
			<Typography variant='subtitle2' className='service-issue-label'>
				Keywords & Phrases:
			</Typography>
			<Autocomplete
				multiple
				freeSolo
				id='tags-outlined'
				options={data}
				size='small'
				value={defaultdata}
				onChange={(event, value) => {
					onchangedata(value);
				}}
				renderInput={(params) => (
					<TextField
						{...params}
						variant='outlined'
						label=''
						placeholder='Type'
					/>
				)}
			/>
		</div>
	);
}

export default ServiceIssuesSettings;
