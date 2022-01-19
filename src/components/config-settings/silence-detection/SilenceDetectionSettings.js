import { Autocomplete, Chip, TextField, Typography } from '@mui/material';
import React from 'react';
import SilenceDetectionSettingsFilters from '../../filters/silence-detection-settings-filters/SilenceDetectionSettingsFilters';

function SilenceDetectionSettings({ data, defaultdata }) {
	const handleClick = () => {
		console.info('You clicked the Chip.');
	};

	const handleDelete = () => {
		console.info('You clicked the delete icon.');
	};

	return (
		<div>
			<div className='silence-detection-filter-layout'>
				<Typography variant='subtitle2' className='silence-detection-label'>
					Holdtime Threshold
				</Typography>
				<SilenceDetectionSettingsFilters />
			</div>
			<div className='silence-detection-layout'>
				<Typography variant='subtitle2' className='silence-detection-label'>
					Phrases to avoid hold flag:
				</Typography>
				<Autocomplete
					multiple
					freeSolo
					id='tags-outlined'
					size='small'
					options={data}
					defaultValue={defaultdata}
					renderInput={(params) => (
						<TextField
							className='service-issue-textfield'
							{...params}
							variant='outlined'
							label=''
							placeholder='Type'
						/>
					)}
				/>
				{/* <div className='silence-detection-chips-layout'>
					<Chip
						label='Charge'
						variant='outlined'
						onClick={handleClick}
						onDelete={handleDelete}
						className='silence-detection-chips'
					/>
					<Chip
						label='Chip'
						variant='outlined'
						onClick={handleClick}
						onDelete={handleDelete}
						className='silence-detection-chips'
					/>
					<Chip
						label='Click'
						variant='outlined'
						onClick={handleClick}
						onDelete={handleDelete}
						className='silence-detection-chips'
					/>
					<Chip
						label='Service'
						variant='outlined'
						onClick={handleClick}
						onDelete={handleDelete}
						className='silence-detection-chips'
					/>
					<Chip
						label='Comparison'
						variant='outlined'
						onClick={handleClick}
						onDelete={handleDelete}
						className='silence-detection-chips'
					/>
				</div> */}
			</div>
		</div>
	);
}

export default SilenceDetectionSettings;
