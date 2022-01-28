import React from 'react';

import { Card, CardContent } from '@mui/material';

import CardMetaicons from '../icons/card-metaicons/CardMetaicons';

import AnalysisCardsData from '../../data/analysis-cards/analysisCards.json';

import './styles.css';
import { Link } from 'react-router-dom';

function CompetitorAnalysisCard(props) {
	const AnalysisCards = ({ title, vlaue }) => {
		return (
			<Card className='card-display' style={{ width: '25%' }}>
				<Link to='/calls'>
					<div className='analysis-card-link'>
						<div className='card-title'>
							<h5>{title}</h5>
						</div>
						{vlaue && <CardContent className='card-value'>{vlaue}</CardContent>}
					</div>
				</Link>
			</Card>
		);
	};

	return (
		<div className='card-container-layout'>
			<div className='card'>
				<AnalysisCards
					title='Competitor Analysis'
					vlaue={props?.data?.totalComparison}
				/>
				<AnalysisCards
					title='Service Issue'
					vlaue={props?.data?.totalServiceIssue}
				/>
				<AnalysisCards
					title='Product Issue'
					vlaue={props?.data?.totalProductIssue}
				/>
				<AnalysisCards
					title='Warranty and Others'
					vlaue={props?.data?.totalWarrantyAndOther}
				/>
				<AnalysisCards
					title='Repeat Calls Volume'
					vlaue={props?.data?.totalRepeatCallVolume}
				/>
			</div>
		</div>
	);
}

export default CompetitorAnalysisCard;
