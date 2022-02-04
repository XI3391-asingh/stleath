import * as React from 'react';
import { Link } from 'react-router-dom';

import { DataGrid } from '@mui/x-data-grid';

import Calls from '../../../../data/tables/calls.json';

import './styles.css';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Chip } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GET_ALL_CALLS } from '../../../../store/type';
import indexService from '../../../../service/index';

const columns = [
	{
		field: 'id',
		headerName: 'ID',
		width: 100,
		// type: 'number',
		sortable: true,
	},
	{
		field: 'agent_name',
		headerName: 'Agent Name',
		width: 160,
		sortable: true,
	},
	// {
	// 	field: 'customerName',
	// 	headerName: 'Customer Name',
	// 	width: 180,
	// 	sortable: false,
	// },
	{
		field: 'updatedAt',
		headerName: 'Timestamp',
		width: 160,
		sortable: true,
	},
	{
		field: 'call_duration',
		headerName: 'Duration',
		width: 135,
		sortable: true,
		valueFormatter: (params) => {
			const mins = Math.floor(Number(params.value) / 60);
			const secs = Number(params.value) % 60;
			return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
		},
	},
	{
		field: 'feedback',
		headerName: 'Sentiments',
		width: 150,
		sortable: true,
		valueFormatter: (params) => {
			return params?.value?.split(' ')[0]
				? params.value.split(' ')[0]
				: params.value;
		},
	},
	{
		field: 'call_emotion',
		headerName: 'Moments',
		width: 250,
		sortable: true,
		renderCell: (row) => {
			let emotionValue = 0;
			let silenceValue = 0;
			let voiceEnergyValue = 0;
			if (row?.row?.call_emotion === 'Happy') {
				emotionValue = 1;
			} else if (row?.row?.call_emotion === 'Angry') {
				emotionValue = 2;
			} else if (row?.row?.call_emotion === 'Disappointed') {
				emotionValue = 3;
			}
			if (row?.row?.hold_violation === true) {
				silenceValue = 4;
			}
			if (row?.row?.is_voice_energy_deviation === 1) {
				voiceEnergyValue = 5;
			}

			let returnHtml = (
				<div className='calls-page-moments'>
					{emotionValue !== 0 && (
						<Chip label={emotionValue} className={`legend-${emotionValue}`} />
					)}
					{silenceValue !== 0 && (
						<Chip label={silenceValue} className={`legend-${silenceValue}`} />
					)}
					{voiceEnergyValue !== 0 && (
						<Chip
							label={voiceEnergyValue}
							className={`legend-${voiceEnergyValue}`}
						/>
					)}
				</div>
			);
			return returnHtml;
		},
	},
	{
		field: 'notes',
		headerName: 'Notes',
		width: 200,
		sortable: false,
	},
	{
		field: 'details',
		headerName: 'Details',
		sortable: false,
		width: 100,
		disableClickEventBubbling: true,
		renderCell: (row) => {
			return (
				<div>
					<Link to={`/call-visualizer?id=${row?.id}`}>
						{/* <Button size="small" variant="text">View</Button> */}
						<Button variant='text' endIcon={<SendIcon />} className='view-btn'>
							View
						</Button>
						{/* <button
							className='details-button'
							disableElevation
							variant='contained'
						>
							View Details
						</button> */}
					</Link>
				</div>
			);
		},
	},
];

function CallsTable({
	data = [],
	triggerRefresh,
	feedbackquery,
	start_date,
	to_date,
	agent_name,
	product_issue,
	service_issue,
	call_opened,
	call_closed,
	total_compliance,
}) {
	const dispatch = useDispatch();
	let [callFeedData, setCallFeedData] = React.useState([]);
	const { filter } = useSelector(store => store);
	// const {
	//   fromDate,
	//   toDate,
	//   agentName,
	//   isProductIssue,
	//   isServiceIssue,
	//   isCallOpenedWithCompliance,
	//   isCallClosedWithCompliance,
	//   isTotalCompliance,
	// } = useSelector((store) => store.filter);

	const generatePayload = () => {
		const payload = {
			from_date: new Date(start_date).toISOString().slice(0, 10), //"2021-02-23",
			to_date: new Date(to_date).toISOString().slice(0, 10), //"2021-03-23",
			// "agent_name": agentName,
			
			is_call_opened_with_compliance: call_opened ? 1 : 0,
			is_call_closed_with_compliance: call_closed ? 1 : 0,
			is_compliance_call: total_compliance ? 1 : 0,
			service_issue: service_issue ? 1 : 0,
			product_issue: product_issue ? 1 : 0,
		};
		if(filter.is_call_opened_with_compliance){
			payload.is_call_opened_with_compliance = filter.is_call_opened_with_compliance
		if (agent_name !== 'All') {
			payload['agent_name'] = agent_name;
		}
		return payload;
	};

	useEffect(() => {
		getCall();
	}, [triggerRefresh]);

	const getCall = () => {
		// TODO: recheck Jayanth
		indexService
			.getReport(generatePayload())
			//   .getReport(query.get("call_emotion") ? query.get("call_emotion") : "")
			.then((resp) => {
				if (resp.isSuccess) {
					let feeddata = resp?.data;
					let calldata = [];
					if (feeddata?.length) {
						if (feedbackquery) {
							calldata = feeddata.filter(
								(resp) => resp.feedback === `${feedbackquery} Feedback`
							);
						} else {
							calldata = feeddata;
						}
					}
					setCallFeedData(calldata);
					dispatch({
						type: GET_ALL_CALLS,
						payload: {
							total: feeddata?.length || 0,
							filter: calldata?.length || 0,
							data: calldata,
						},
					});
				}
			});
	};

	return (
		<div className='calls-table-layout'>
			<DataGrid
				rows={callFeedData}
				columns={columns}
				pageSize={10}
				rowsPerPageOptions={[5]}
				// checkboxSelection
			/>
		</div>
	);
}

export default CallsTable;
