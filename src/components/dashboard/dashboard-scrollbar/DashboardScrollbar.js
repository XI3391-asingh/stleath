import React from 'react';

import { Typography } from '@mui/material';

import './styles.css';

function DashboardScrollbar() {
	return (
		<div>
			<Typography variant='caption' className='dashboard-scrollbar-text'>
				Your 30 calls were marked as Negative Calls in last 24 hours. Click here
				to see where you could have done better
			</Typography>
		</div>
	);
}

export default DashboardScrollbar;
