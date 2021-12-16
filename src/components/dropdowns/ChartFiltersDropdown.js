import { MenuItem, Select, Typography } from '@mui/material';
import React from 'react';

import AgentRuleDropdownData from '../../data/dropdowns/agentRuleDropdown.json';

import Dropdown from '../dropdowns/Dropdown';

function ChartFiltersDropdown() {
	const [agent, setAgent] = React.useState('');

	const handleChange = (event) => {
		setAgent(event.target.value);
	};

	return (
		<div className='dropdownSelections'>
			{AgentRuleDropdownData.map((agentRuleDropdown) => {
				return (
					<div style={{ margin: '0.5rem 1rem 1rem 0', display: 'grid' }}>
						{/* <div> */}
						<inputLabel>
							<Typography variant='caption'>
								{agentRuleDropdown.label}
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
							<MenuItem value='All'>{agentRuleDropdown.options}</MenuItem>
							{/* <MenuItem value={10}>Follow Up</MenuItem>
							<MenuItem value={20}>Already Purchased</MenuItem>
							<MenuItem value={30}>Customer Picked Up</MenuItem>
							<MenuItem value={40}>
								Customer Picked Uphghbhjfhvygvfdhnbj
							</MenuItem> */}
						</Select>
						{/* </div> */}
						{/* <div>
							<inputLabel>
								<Typography variant='caption'>
									{agentRuleDropdown.labelTwo}
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
						</div> */}
					</div>
				);
			})}
		</div>
	);
}

export default ChartFiltersDropdown;
