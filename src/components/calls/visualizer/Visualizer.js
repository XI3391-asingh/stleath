import React from 'react';

import { Card, Typography } from '@material-ui/core';

import '../styles.css';

function Visualizer() {
	return (
		<div>
			<Card className='visualizer-card-layout'>
				<Typography variant='h5'>Audio Visualizer</Typography>
			</Card>
		</div>
	);
}

export default Visualizer;
