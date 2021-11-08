import React from 'react';

import ParentFilterPanel from './filters/filter-panel/ParentFilterPanel';
import CompetitorAnalysisCard from './analysis-cards/CompetitorAnalysisCard';
import ServiceIssueCard from './analysis-cards/ServiceIssueCard';

import './style.css';

function CardComponents() {
	return (
		<div>
			<div>{/* <ParentFilterPanel /> */}</div>
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
