import { Chip, TextField, Typography } from '@mui/material';
import React from 'react';

function ServiceIssuesSettings() {
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
			<div className='service-issue-chips-layout'>
				<Chip
					label='Charge'
					variant='outlined'
					onClick={handleClick}
					onDelete={handleDelete}
					className='service-issue-chips'
				/>
				<Chip
					label='Chip'
					variant='outlined'
					onClick={handleClick}
					onDelete={handleDelete}
					className='service-issue-chips'
				/>
				<Chip
					label='Click'
					variant='outlined'
					onClick={handleClick}
					onDelete={handleDelete}
					className='service-issue-chips'
				/>
				<Chip
					label='Service'
					variant='outlined'
					onClick={handleClick}
					onDelete={handleDelete}
					className='service-issue-chips'
				/>
				<Chip
					label='Comparison'
					variant='outlined'
					onClick={handleClick}
					onDelete={handleDelete}
					className='service-issue-chips'
				/>
			</div>
		</div>
	);
}

export default ServiceIssuesSettings;
