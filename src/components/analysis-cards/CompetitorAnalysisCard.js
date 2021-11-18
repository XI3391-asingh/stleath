import React from 'react';

import { Card, CardContent } from '@mui/material';

import CardMetaicons from '../icons/card-metaicons/CardMetaicons';

import AnalysisCardData from '../../data/analysisCard.json';

import './styles.css';

function CompetitorAnalysisCard() {
	return (
		<div className='card-container-layout'>
			<div className='card'>
				{AnalysisCardData.map((analysis, index) => {
					return (
						<Card className='card-display'>
							<div className='card-metaicons'>
								<CardMetaicons />
							</div>
							<div>
								<h5>{analysis.name}</h5>
							</div>
							<CardContent>{analysis.count}</CardContent>
						</Card>
					);
				})}
			</div>
		</div>
	);
}

export default CompetitorAnalysisCard;
