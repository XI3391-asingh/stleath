// import React from 'react';

// function DashboardTable() {
// 	return <div></div>;
// }

// export default DashboardTable;

import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';

import DashboardCalls from '../../../../data/tables/DashboardCalls.json';

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
		field: 'totalCalls',
		headerName: 'Total Calls',
		width: 180,
		sortable: false,
	},
];
function DashboardTable() {
	return (
		<div className='calls-table-layout'>
			<DataGrid
				rows={DashboardCalls}
				columns={columns}
				pageSize={10}
				rowsPerPageOptions={[5]}
				// checkboxSelection
			/>
		</div>
	);
}

export default DashboardTable;
