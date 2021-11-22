import React from 'react';

import CompetitorAnalysisCard from './analysis-cards/CompetitorAnalysisCard';
import ServiceIssueCard from './analysis-cards/ServiceIssueCard';

import './style.css';

function CardComponents() {
	return (
		<div>
			<div className='container'>
				<CompetitorAnalysisCard />
				<ServiceIssueCard />
				<CompetitorAnalysisCard />
				<ServiceIssueCard />
				<CompetitorAnalysisCard />
				<ServiceIssueCard />
			</div>
		</div>
	);
}

export default CardComponents;
