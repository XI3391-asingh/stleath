import React from 'react';

import { FormControl, MenuItem, Select } from '@mui/material';

import './styles.css';

function Dropdown() {
	const [agent, setAgent] = React.useState('');

	const handleChange = (event) => {
		setAgent(event.target.value);
	};
	return (
		<div className='dropdown-layout'>
			<FormControl className='dropdown-form'>
				<inputLabel>Agent</inputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={agent}
					onChange={handleChange}
					label='agent'
					style={{ height: 25 }}
				>
					<MenuItem value='All'>--Select--</MenuItem>
					<MenuItem value={10}>Follow Up</MenuItem>
					<MenuItem value={20}>Already Purchased</MenuItem>
					<MenuItem value={30}>Customer Picked Up</MenuItem>
					<MenuItem value={40}>Customer Picked Uphghbhjfhvygvfdhnbj</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}

export default Dropdown;
