import * as React from 'react';
import { Link } from 'react-router-dom';

import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';

import '../../styles.css';

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
	// {
	// 	field: 'details',
	// 	headerName: 'Details',
	// 	width: 250,
	// 	sortable: false,
	// 	renderCell: renderDetailsButton(),
	// },
	{
		field: 'details',
		headerName: 'Details',
		sortable: false,
		width: 250,
		disableClickEventBubbling: true,
		renderCell: () => {
			// renderCell: (params) => {
			// const onClick = () => {
			// 	const api: GridApi = params.api;
			// 	const fields = api
			// 		.getAllColumns()
			// 		.map((c) => c.field)
			// 		.filter((c) => c !== '__check__' && !!c);
			// 	const thisRow: Record<string, GridCellValue> = {};

			// 	fields.forEach((f) => {
			// 		thisRow[f] = params.getValue(f);
			// 	});

			// 	return alert(JSON.stringify(thisRow, null, 4));
			// };

			return (
				<div>
					<Link to='/call-visualizer'>
						<Button
							// onClick={view}
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

const rows = [
	{
		id: 1,
		agentName: 'Jayanth',
		customerName: 'Mohit',
		callDuration: 60,
		callDateAndTime: '10/14/2021, 00.01 AM',
		callSentiments: 'Positive',
		notes: null,
		details: 'View Details',
	},
	{
		id: 2,
		agentName: 'Jayanth',
		customerName: 'Mohit',
		callDuration: 60,
		callDateAndTime: '10/14/2021, 00.01 AM',
		callSentiments: 'Positive',
		notes: null,
		details: 'View Details',
	},
	{
		id: 3,
		agentName: 'Jayanth',
		customerName: 'Mohit',
		callDuration: 60,
		callDateAndTime: '10/14/2021, 00.01 AM',
		callSentiments: 'Positive',
		notes: null,
		details: 'View Details',
	},
	{
		id: 4,
		agentName: 'Jayanth',
		customerName: 'Mohit',
		callDuration: 60,
		callDateAndTime: '10/14/2021, 00.01 AM',
		callSentiments: 'Positive',
		notes: null,
		details: 'View Details',
	},
	{
		id: 5,
		agentName: 'Jayanth',
		customerName: 'Mohit',
		callDuration: 60,
		callDateAndTime: '10/14/2021, 00.01 AM',
		callSentiments: 'Positive',
		notes: null,
		details: 'View Details',
	},
	{
		id: 6,
		agentName: 'Jayanth',
		customerName: 'Mohit',
		callDuration: 60,
		callDateAndTime: '10/14/2021, 00.01 AM',
		callSentiments: 'Positive',
		notes: null,
		details: 'View Details',
	},
	{
		id: 7,
		agentName: 'Jayanth',
		customerName: 'Mohit',
		callDuration: 60,
		callDateAndTime: '10/14/2021, 00.01 AM',
		callSentiments: 'Positive',
		notes: null,
		details: 'View Details',
	},
	{
		id: 8,
		agentName: 'Jayanth',
		customerName: 'Mohit',
		callDuration: 60,
		callDateAndTime: '10/14/2021, 00.01 AM',
		callSentiments: 'Positive',
		notes: null,
		details: 'View Details',
	},
	{
		id: 9,
		agentName: 'Jayanth',
		customerName: 'Mohit',
		callDuration: 60,
		callDateAndTime: '10/14/2021, 00.01 AM',
		callSentiments: 'Positive',
		notes: null,
		details: 'View Details',
	},
	{
		id: 10,
		agentName: 'Jayanth',
		customerName: 'Mohit',
		callDuration: 60,
		callDateAndTime: '10/14/2021, 00.01 AM',
		callSentiments: 'Positive',
		notes: null,
		details: 'View Details',
	},
	{
		id: 11,
		agentName: 'Jayanth',
		customerName: 'Mohit',
		callDuration: 60,
		callDateAndTime: '10/14/2021, 00.01 AM',
		callSentiments: 'Positive',
		notes: null,
		details: 'View Details',
	},
	{
		id: 12,
		agentName: 'Jayanth',
		customerName: 'Mohit',
		callDuration: 60,
		callDateAndTime: '10/14/2021, 00.01 AM',
		callSentiments: 'Positive',
		notes: null,
		details: 'View Details',
	},
	{
		id: 13,
		agentName: 'Jayanth',
		customerName: 'Mohit',
		callDuration: 60,
		callDateAndTime: '10/14/2021, 00.01 AM',
		callSentiments: 'Positive',
		notes: null,
		details: 'View Details',
	},
	{
		id: 14,
		agentName: 'Jayanth',
		customerName: 'Mohit',
		callDuration: 60,
		callDateAndTime: '10/14/2021, 00.01 AM',
		callSentiments: 'Positive',
		notes: null,
		details: 'View Details',
	},
	{
		id: 15,
		agentName: 'Jayanth',
		customerName: 'Mohit',
		callDuration: 60,
		callDateAndTime: '10/14/2021, 00.01 AM',
		callSentiments: 'Positive',
		notes: null,
		details: 'View Details',
	},
	{
		id: 16,
		agentName: 'Jayanth',
		customerName: 'Mohit',
		callDuration: 60,
		callDateAndTime: '10/14/2021, 00.01 AM',
		callSentiments: 'Positive',
		notes: null,
		details: 'View Details',
	},
];

function CallsTable() {
	return (
		<div className='calls-table-layout'>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={10}
				rowsPerPageOptions={[5]}
				// checkboxSelection
			/>
		</div>
	);
}

export default CallsTable;
