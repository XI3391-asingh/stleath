import React from 'react';

import { Card, CardContent } from '@mui/material';

import CardMetaicons from '../icons/card-metaicons/CardMetaicons';

import './styles.css';

function ServiceIssueCard() {
	return (
		<div className='card-container-layout'>
			<div className='card'>
				<Card className='card-display'>
					<div className='card-metaicons'>
						<CardMetaicons />
					</div>
					<div>
						<h5>Competitor Analysis</h5>
					</div>
					<CardContent>500</CardContent>
				</Card>
			</div>
		</div>
	);
}

export default ServiceIssueCard;
