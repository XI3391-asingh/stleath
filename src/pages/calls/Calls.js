import React from 'react';

import { Card } from '@mui/material';

import SideBar from '../../components/shared-components/side-bar/SideBar';
import CallsTable from '../../components/shared-components/tables/calls-table/CallsTable';

import './styles.css';

function Calls() {
	return (
		<div className='calls-page-layout'>
			<Card className='calls-page-card-body-layout'>
				<div className='calls-page-card-body-design'>
					<div>
						<SideBar />
					</div>
					<div className='calls-page-card-main-body'>
						<div className='calls-page-call-details'>40 of 100 Calls</div>
						<hr className='calls-page-divider' />
						<div className='calls-page-table-layout'>
							<CallsTable />
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default Calls;
