import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';

import DashboardCalls from '../../../../data/tables/DashboardCalls.json';

import './styles.css';
import { Card, Typography } from '@mui/material';

function DashboardTable() {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		var requestOptions = {
			method: 'POST',
			redirect: 'follow',
		};

		fetch('http://35.200.228.197:4000/api/get-call-count', requestOptions)
			.then((response) => response.json())
			.then((result) => {
				result.data.forEach((dataitem, index) => {
					dataitem.id = index + 1;
				});
				console.log(result.data);
				setData(result.data);
			});
	}, []);

	const columns = [
		{
			field: 'id',
			headerName: 'S.No.',
			width: 90,
			type: 'number',
			sortable: false,
		},
		{
			field: 'agent_name',
			headerName: 'Agent Name',
			width: 150,
			sortable: false,
		},
		{
			field: 'totalCall',
			headerName: 'Total Calls',
			width: 140,
			sortable: false,
		},
	];

	return (
		<div className='dashboard-table-layout'>
			<Card className='dashboard-table-card'>
				<Typography variant='h5' className='dashboard-table-header'>
					Total Agents Calls
				</Typography>
				<DataGrid
					rows={data}
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
