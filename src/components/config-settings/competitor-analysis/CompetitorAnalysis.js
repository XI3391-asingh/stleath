import React, { useState } from 'react';

import { Card, Typography } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Select from 'react-select';
import './styles.css';
import CompetitorAnalysisSettings from './CompetitorAnalysisSettings';
import AddMoreButton from '../../buttons/add-more-button/AddMoreButton';

const rate = {
	id: '1',
	label: 'Rate',
	options: [
		// { value: '1', label: 5 },
		// { value: '2', label: 10 },
		// { value: '3', label: 15 },
		{ value: '0.05', label: 5 },
		{ value: '0.10', label: 10 },
		{ value: '0.15', label: 15 },
		{ value: '0.20', label: 20 },
		{ value: '0.25', label: 25 },
		{ value: '0.30', label: 30 },
		{ value: '0.35', label: 35 },
		{ value: '0.40', label: 40 },
		{ value: '0.45', label: 45 },
		{ value: '0.50', label: 50 },
		{ value: '0.55', label: 55 },
		{ value: '0.60', label: 60 },
		{ value: '0.65', label: 65 },
		{ value: '0.70', label: 70 },
		{ value: '0.75', label: 75 },
		{ value: '0.80', label: 80 },
		{ value: '0.85', label: 85 },
		{ value: '0.90', label: 90 },
		{ value: '0.95', label: 95 },
		{ value: '1', label: 100 },
	],
};

function CompetitorAnalysis({ title }) {
	const [inputList, setInputList] = useState([
		{ competitorname: '', competitorscore: '' },
	]);

	// handle input change
	const handleInputChange = (e, index) => {
		const { name, value } = e.target;
		const list = [...inputList];
		list[index][name] = value;
		setInputList(list);
	};

	const handleSelectChange = (e, index) => {
		const list = [...inputList];
		list[index]['competitorscore'] = e;
		setInputList(list);
	};
	// handle click event of the Remove button
	const handleRemoveClick = (index) => {
		const list = [...inputList];
		list.splice(index, 1);
		setInputList(list);
	};

	// handle click event of the Add button
	const handleAddClick = () => {
		console.log(inputList);
		setInputList([...inputList, { competitorname: '', competitorscore: '' }]);
	};

	return (
		<Card className='competitor-card-layout'>
			<Typography variant='h6' className='competitor-card-heading'>
				{title}
			</Typography>
			<div className='competitor-card-settings'>
				{inputList.map((x, i) => {
					return (
						<div className='competitor-analysis-portion'>
							<div className='competitor-analysis-layout'>
								<Typography
									variant='subtitle2'
									className='competitor-analysis-label'
								>
									Labels & Threshold:
								</Typography>
								<input
									type='text'
									className='competitor-analysis-input'
									value={x.competitorname}
									name='competitorname'
									onChange={(e) => handleInputChange(e, i)}
								></input>
								<Select
									menuPlacement='auto'
									className='competitor-analysis-filter'
									options={rate.options}
									name='competitorscore'
									value={x.competitorscore}
									onChange={(e) => handleSelectChange(e, i)}
								/>
								<HighlightOffIcon
									className='dashboard-details-dropdown-delete-button'
									onClick={() => handleRemoveClick(i)}
								/>
							</div>
						</div>
					);
				})}
				{/* // <CompetitorAnalysisSettings />
        // <CompetitorAnalysisSettings />
        // <CompetitorAnalysisSettings />
        // <CompetitorAnalysisSettings /> */}
			</div>
			{/* <AddMoreButton /> */}
			<div>
				<button
					className='competitor-card-button'
					onClick={handleAddClick}
					// onClick={() => handleAddFields()}
				>
					+ ADD MORE
				</button>
			</div>
		</Card>
	);
}

export default CompetitorAnalysis;
