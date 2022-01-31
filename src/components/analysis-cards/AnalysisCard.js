import React from 'react';

import { Card, CardContent } from '@mui/material';

import CardMetaicons from '../icons/card-metaicons/CardMetaicons';

import AnalysisCardsData from '../../data/analysis-cards/analysisCards.json';

import './styles.css';
import { Link } from 'react-router-dom';

function CompetitorAnalysisCard(props) {
	const AnalysisCards = ({ title, value }) => {
		return (
			<Card className='card-display' style={{ width: '25%' }}>
				<Link to='/calls'>
					<div className='analysis-card-link'>
						<div className='card-title'>
							<h5>{title}</h5>
						</div>
						{/* {value &&  */}
						{value ? (
							<CardContent className='card-value'>{value}</CardContent>
						) : (
							<CardContent className='card-value'></CardContent>
						)}
						{/*  } */}
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
					value={props?.data?.totalComparison}
				/>
				<AnalysisCards
					title='Service Issue'
					value={props?.data?.totalServiceIssue}
				/>
				<AnalysisCards
					title='Product Issue'
					value={props?.data?.totalProductIssue}
				/>
				<AnalysisCards
					title='Warranty and Others'
					value={props?.data?.totalWarrantyAndOther}
				/>
				<AnalysisCards
					title='Repeat Calls Volume'
					value={props?.data?.totalRepeatCallVolume}
				/>
			</div>
		</div>
	);
}

export default CompetitorAnalysisCard;
