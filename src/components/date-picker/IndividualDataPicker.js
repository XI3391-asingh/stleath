import React from 'react';

import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { TextField } from '@mui/material';
import AdapterMoment from '@mui/lab/AdapterMoment';

import './styles.css';

function SidebarDatePicker() {
	const [value, setValue] = React.useState(new Date());
	let label1 = 'Date';
	return (
		<div className='datepicker-layout'>
			<LocalizationProvider dateAdapter={AdapterMoment}>
				<DatePicker
					// disableFuture
					label={label1}
					placeholder='MM/DD/YYYY'
					format={'MM/DD/YYYY'}
					openTo='year'
					views={['year', 'month', 'day']}
					value={value}
					onChange={(newValue) => {
						setValue(newValue);
					}}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>
		</div>
	);
}

export default SidebarDatePicker;
