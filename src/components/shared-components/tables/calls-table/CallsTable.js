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
import moment from 'moment';

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
	call_emotion,
	call_duration,
}) {
	const dispatch = useDispatch();
	let [callFeedData, setCallFeedData] = React.useState([]);
	const { filter } = useSelector((store) => store);

	const generatePayload = () => {
		const payload = {};
		if (filter) {
			if (filter.fromDate && filter.fromDate.length !== 0) {
				payload['from_date'] = moment(filter.fromDate).format('YYYY-MM-DD'); //"2021-02-23",
			}
			if (filter.toDate && filter.toDate.length !== 0) {
				payload['to_date'] = moment(filter.toDate).format('YYYY-MM-DD'); //"2021-02-23",
			}
			if (
				filter.isCallOpenedWithCompliance !== null &&
				filter.isCallOpenedWithCompliance?.length !== 0
			) {
				payload['is_call_opened_with_compliance'] =
					filter.isCallOpenedWithCompliance;
			}
			if (
				filter.isCallClosedWithCompliance !== null &&
				filter.isCallClosedWithCompliance?.length !== 0
			) {
				payload['is_call_closed_with_compliance'] =
					filter.isCallClosedWithCompliance;
			}
			if (
				filter.isTotalCompliance !== null &&
				filter.isTotalCompliance?.length !== 0
			) {
				payload['is_compliance_call'] = filter.isTotalCompliance;
			}
			if (
				filter.isServiceIssue !== null &&
				filter.isServiceIssue?.length !== 0
			) {
				payload['service_issue'] = filter.isServiceIssue;
			}
			if (
				filter.isProductIssue !== null &&
				filter.isProductIssue?.length !== 0
			) {
				payload['product_issue'] = filter.isProductIssue;
			}
			if (filter.agentName && filter.agentName !== 'All') {
				payload['agent_name'] = filter.agentName;
			}
			return payload;
		}
	};

	useEffect(() => {
		getCall();
	}, [triggerRefresh]);

	const getCall = () => {
		indexService.getReport(generatePayload()).then((resp) => {
			if (resp.isSuccess) {
				let feeddata = resp?.data;
				let calldata = [];
				if (feeddata?.length) {
					if (feedbackquery) {
						calldata = feeddata.filter(
							(resp) =>
								resp.feedback === `${feedbackquery} Feedback` ||
								resp.feedback === feedbackquery
						);
					} else if (call_emotion) {
						calldata = feeddata.filter(
							(resp) => resp.call_emotion === call_emotion
						);
					} else if (call_duration) {
						if (call_duration === 'Below 20s') {
							calldata = feeddata.filter((resp) => resp.call_duration < 20);
						} else if (call_duration === 'b/w 20-60s') {
							calldata = feeddata.filter(
								(resp) => resp.call_duration >= 20 && resp.call_duration <= 60
							);
						} else if (call_duration === 'Above 60s') {
							calldata = feeddata.filter((resp) => resp.call_duration > 60);
						}
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
