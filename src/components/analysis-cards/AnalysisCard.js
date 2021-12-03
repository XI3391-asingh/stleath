import React from 'react';

import { Card, CardContent } from '@mui/material';

import CardMetaicons from '../icons/card-metaicons/CardMetaicons';

import AnalysisCardsData from '../../data/analysis-cards/analysisCards.json';

import './styles.css';
import { Link } from 'react-router-dom';

function CompetitorAnalysisCard() {
	return (
		<div className='card-container-layout'>
			<div className='card'>
				{AnalysisCardsData.map((analysisCard) => {
					return (
						<Card className='card-display' style={{ width: '25%' }}>
							<div className='card-metaicons'>
								<CardMetaicons />
							</div>
							<Link to='/calls'>
								<div className='analysis-card-link'>
									<div>
										<h5>{analysisCard.title}</h5>
									</div>
									<CardContent>{analysisCard.Value}</CardContent>
								</div>
							</Link>
						</Card>
					);
				})}
			</div>
		</div>
	);
}

export default CompetitorAnalysisCard;
