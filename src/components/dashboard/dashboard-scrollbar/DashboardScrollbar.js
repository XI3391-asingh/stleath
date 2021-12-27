import React from 'react';

import { Typography } from '@mui/material';

import './styles.css';

function DashboardScrollbar() {
	return (
		<div>
			<p className='marquee'>
				<span
				// className='dashboard-scrollbar-text'
				>
					{/* <marquee behavior='scroll' direction='left'> */}
					Your 30 calls were marked as Negative Calls in last 24 hours. Click
					here to see where you could have done better
					{/* </marquee> */}
				</span>
			</p>
		</div>
	);
}

export default DashboardScrollbar;
