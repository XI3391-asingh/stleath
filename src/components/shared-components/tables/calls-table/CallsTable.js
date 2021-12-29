import * as React from 'react';
import { Link } from 'react-router-dom';

import { DataGrid } from '@mui/x-data-grid';

import Calls from '../../../../data/tables/calls.json';

import './styles.css';

const columns = [
	{
		field: 'id',
		headerName: 'Call ID',
		width: 100,
		type: 'number',
		sortable: false,
	},
	{
		field: 'agent_name',
		headerName: 'Agent Name',
		width: 180,
		sortable: false,
	},
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
		field: 'updatedAt',
		headerName: 'Call Date And Time',
		width: 180,
		sortable: false,
	},
	{
		field: 'feedback',
		headerName: 'Call Sentiments',
		width: 160,
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
		renderCell: (row) => {
			return (
				<div>
					<Link to={`/call-visualizer?id=${row?.id}`}>
						<button
							className='details-button'
							disableElevation
							variant='contained'
						>
							View Details
						</button>
					</Link>
				</div>
			);
		},
	},
];

function CallsTable({ data = [] }) {
	return (
		<div className='calls-table-layout'>
			<DataGrid
				rows={data}
				columns={columns}
				pageSize={10}
				rowsPerPageOptions={[5]}
				// checkboxSelection
			/>
		</div>
	);
}

export default CallsTable;
