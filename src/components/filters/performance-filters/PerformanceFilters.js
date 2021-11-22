import React from 'react';

import { MenuItem, Select } from '@mui/material';

import './styles.css';

function PerformanceFilters() {
	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<Select
			labelId='demo-simple-select-label'
			id='demo-simple-select'
			value={age}
			label='Age'
			onChange={handleChange}
			className='performance-filter'
		>
			<MenuItem value={10}>Ten</MenuItem>
			<MenuItem value={20}>Twenty</MenuItem>
			<MenuItem value={30}>Thirty</MenuItem>
		</Select>
	);
}

export default PerformanceFilters;
