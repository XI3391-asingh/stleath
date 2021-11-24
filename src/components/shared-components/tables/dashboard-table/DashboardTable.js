import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';

import DashboardCalls from '../../../../data/tables/DashboardCalls.json';

import './styles.css';
import { Card, Typography } from '@mui/material';

const columns = [
	{
		field: 'id',
		headerName: 'S.No.',
		width: 90,
		type: 'number',
		sortable: false,
	},
	{ field: 'agentName', headerName: 'Agent Name', width: 150, sortable: false },
	{
		field: 'totalCalls',
		headerName: 'Total Calls',
		width: 140,
		sortable: false,
	},
];
function DashboardTable() {
	return (
		<div className='dashboard-table-layout'>
			<Card className='dashboard-table-card'>
				<Typography variant='h5' className='dashboard-table-header'>
					Total Agents Calls
				</Typography>
				<DataGrid
					rows={DashboardCalls}
					columns={columns}
					pageSize={10}
					rowsPerPageOptions={[5]}
					// checkboxSelection
				/>
			</Card>
		</div>
	);
}

export default DashboardTable;
