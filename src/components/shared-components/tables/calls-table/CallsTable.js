import * as React from 'react';
import { Link } from 'react-router-dom';

import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';

import Calls from '../../../../data/tables/calls.json';

import './styles.css';

const columns = [
	{
		field: 'id',
		headerName: 'S.No.',
		width: 90,
		type: 'number',
		sortable: false,
	},
	{ field: 'agentName', headerName: 'Agent Name', width: 180, sortable: false },
	{
		field: 'customerName',
		headerName: 'Customer Name',
		width: 180,
		sortable: false,
	},
	{
		field: 'callDuration',
		headerName: 'Call Duration',
		width: 140,
		sortable: false,
	},
	{
		field: 'callDateAndTime',
		headerName: 'Call Date And Time',
		width: 180,
		sortable: false,
	},
	{
		field: 'callSentiments',
		headerName: 'call Sentiments',
		width: 150,
		sortable: false,
	},
	{
		field: 'notes',
		headerName: 'Notes',
		width: 250,
		sortable: false,
	},
	{
		field: 'details',
		headerName: 'Details',
		sortable: false,
		width: 250,
		disableClickEventBubbling: true,
		renderCell: () => {
			return (
				<div>
					<Link to='/call-visualizer'>
						<Button
							className='details-button'
							disableElevation
							variant='contained'
						>
							<Typography variant='button'>View Details</Typography>
						</Button>
					</Link>
				</div>
			);
		},
	},
];

function CallsTable() {
	return (
		<div className='calls-table-layout'>
			<DataGrid
				rows={Calls}
				columns={columns}
				pageSize={10}
				rowsPerPageOptions={[5]}
				// checkboxSelection
			/>
		</div>
	);
}

export default CallsTable;
