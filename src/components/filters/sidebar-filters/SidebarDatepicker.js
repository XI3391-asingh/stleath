import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import './styles.css';
import 'react-datepicker/dist/react-datepicker.css';

function SidebarDatepicker() {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	return (
		<div className='sidebar-datepicker-layout'>
			<DatePicker
				className='sidebar-datepickers'
				selected={startDate}
				onChange={(date) => setStartDate(date)}
				isClearable
				selectsStart
				startDate={startDate}
				endDate={endDate}
				placeholderText='Start Date'
			/>
			<DatePicker
				className='sidebar-datepickers'
				selected={endDate}
				onChange={(date) => setEndDate(date)}
				isClearable
				selectsEnd
				startDate={startDate}
				endDate={endDate}
				minDate={startDate}
				placeholderText='End Date'
			/>
		</div>
	);
}

export default SidebarDatepicker;
