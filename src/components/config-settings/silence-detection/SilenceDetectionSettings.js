import { Chip, Typography } from '@mui/material';
import React from 'react';
import SilenceDetectionSettingsFilters from '../../filters/silence-detection-settings-filters/SilenceDetectionSettingsFilters';

function SilenceDetectionSettings() {
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
					Keywords & Phrases:
				</Typography>
				<div className='silence-detection-chips-layout'>
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
				</div>
			</div>
		</div>
	);
}

export default SilenceDetectionSettings;
