import React from 'react';

import { FormControl, MenuItem, Select, Typography } from '@mui/material';

import SidebarDropdownData from '../../data/dropdowns/sidebarDropdown.json';

import './styles.css';

function Dropdown() {
	const [agent, setAgent] = React.useState('');

	const handleChange = (event) => {
		setAgent(event.target.value);
	};
	return (
		<div className='dropdown-layout'>
			<FormControl className='dropdown-form'>
				{SidebarDropdownData.map((sidebarDropdown) => {
					return (
						<div style={{ marginBottom: '1rem' }}>
							<inputLabel>
								<Typography variant='caption'>
									{sidebarDropdown.label}
								</Typography>
							</inputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={agent}
								onChange={handleChange}
								label='agent'
								style={{ height: 25, width: '8rem' }}
							>
								<MenuItem value='All'>--Select--</MenuItem>
								<MenuItem value={10}>Follow Up</MenuItem>
								<MenuItem value={20}>Already Purchased</MenuItem>
								<MenuItem value={30}>Customer Picked Up</MenuItem>
								<MenuItem value={40}>
									Customer Picked Uphghbhjfhvygvfdhnbj
								</MenuItem>
							</Select>
						</div>
					);
				})}
			</FormControl>
		</div>
	);
}

export default Dropdown;
