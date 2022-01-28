import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import './styles.css';
import 'react-datepicker/dist/react-datepicker.css';

function SidebarDatepicker({fromDate, toDate, setFromDate, setToDate}) {

	// useEffect(() => {
	// 	console.log('FromDate from component:'+fromDate)
	// })

	return (
		<div className='sidebar-datepicker-layout'>
			<h6 className="sidebar-filter-dropdowns margin-top-05">From Date</h6>
			<DatePicker
				className='sidebar-datepickers'
				selected={fromDate}
				onChange={(date) => setFromDate(new Date(date))}
				// isClearable
				selectsStart
				startDate={fromDate}
				endDate={toDate}
				placeholderText='From Date'
			/>
			<h6 className="sidebar-filter-dropdowns margin-top-05">To Date</h6>
			<DatePicker
				className='sidebar-datepickers'
				selected={toDate}
				onChange={(date) => setToDate(new Date(date))}
				// isClearable
				selectsEnd
				startDate={fromDate}
				endDate={toDate}
				minDate={fromDate}
				placeholderText='To Date'
			/>
		</div>
	);
}

export default SidebarDatepicker;
