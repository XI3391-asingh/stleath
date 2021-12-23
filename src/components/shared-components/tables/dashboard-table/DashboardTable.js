import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';

import './styles.css';
import { Card, Typography } from '@mui/material';
import indexService from '../../../../service/index';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CALL_COUNT } from '../../../../store/type';

function DashboardTable() {
	const dispatch = useDispatch();
	const { callcount } = useSelector((store) => store.dashboard);
	React.useEffect(() => {
		getCallCount();
	}, []);

	const getCallCount = () => {
		indexService.getCallCount().then((resp) => {
			if (resp.isSuccess) {
				let callcount = resp?.data;
				if (callcount) {
					for (var i = 0; i < callcount.length; i++) {
						callcount[i].id = i + 1;
					}
					dispatch({
						type: GET_CALL_COUNT,
						payload: callcount,
					});
				}
			}
		});
	};

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
					rows={callcount}
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
