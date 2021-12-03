import { MenuItem, Select, Typography } from '@mui/material';
import React from 'react';

import AgentDispositionDropdownData from '../../data/dropdowns/agentDispositionDropdown.json';

function AgentDispositionDropdown() {
	const [agent, setAgent] = React.useState('');

	const handleChange = (event) => {
		setAgent(event.target.value);
	};

	return (
		<div>
			{AgentDispositionDropdownData.map((agentDisposition) => {
				return (
					<div style={{ marginBottom: '1rem', display: 'inline-grid' }}>
						<inputLabel>
							<Typography variant='caption'>
								{agentDisposition.label}
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
		</div>
	);
}

export default AgentDispositionDropdown;
