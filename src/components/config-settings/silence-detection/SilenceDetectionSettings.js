import { Autocomplete, TextField, Typography } from '@mui/material';
import React from 'react';
import SilenceDetectionSettingsFilters from '../../filters/silence-detection-settings-filters/SilenceDetectionSettingsFilters';

function SilenceDetectionSettings({
	data,
	defaultdata,
	onchangedata,
	defaultholdtimethresholddata,
	onchangeholdtimethresholddata,
}) {
	const handleClick = () => {
		console.info('You clicked the Chip.');
	};

	const handleDelete = () => {
		console.info('You clicked the delete icon.');
	};

	return (
		<div>
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
					value={defaultdata}
					onChange={(event, value) => {
						onchangedata(value);
					}}
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
			</div>
			<div className='silence-detection-filter-layout'>
				<Typography variant='subtitle2' className='silence-detection-label'>
					Holdtime Threshold
				</Typography>
				<SilenceDetectionSettingsFilters
					defaultholdtimethresholddata={defaultholdtimethresholddata}
					onchangeholdtimethresholddata={(data) =>
						onchangeholdtimethresholddata(data)
					}
				/>
			</div>
		</div>
	);
}

export default SilenceDetectionSettings;
