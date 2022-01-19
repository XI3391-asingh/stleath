import { Autocomplete, Chip, TextField, Typography } from '@mui/material';
import React from 'react';

function ServiceIssuesSettings({ data, defaultdata }) {
	const [autoCompleteValue, setAutoCompleteValue] = React.useState(data);
	const handleClick = () => {
		console.info('You clicked the Chip.');
	};

	const handleDelete = () => {
		console.info('You clicked the delete icon.');
	};

	return (
		<div className='service-issue-layout'>
			<Typography variant='subtitle2' className='service-issue-label'>
				Keywords & Phrases:
			</Typography>
			<Autocomplete
				multiple
				style={{ overflowY: 'auto' }}
				id='tags-outlined'
				options={defaultdata}
				value={autoCompleteValue}
				onChange={(e, newval, reason) => {
					setAutoCompleteValue(newval);
				}}
				renderInput={(params) => (
					<TextField
						{...params}
						variant='outlined'
						label=''
						placeholder='Favorites'
						onKeyDown={(e) => {
							if (e.keyCode === 13 && e.target.value) {
								setAutoCompleteValue(autoCompleteValue.concat(e.target.value));
							}
						}}
					/>
				)}
			/>
			{/* <div> */}
			{/* <Autocomplete
				multiple
				freeSolo
				id='tags-outlined'
				options={data}
				defaultValue={defaultdata}
				renderInput={(params) => (
					<TextField
						className='service-issue-textfield'
						{...params}
						// variant='outlined'
						label=''
						// placeholder='Type'
					/>
				)}
			/> */}
			{/* </div> */}
			{/* <div className="service-issue-chips-layout">
	  


        <Chip
          label="Charge"
          variant="outlined"
          onClick={handleClick}
          onDelete={handleDelete}
          className="service-issue-chips"
        />
        <Chip
          label="Chip"
          variant="outlined"
          onClick={handleClick}
          onDelete={handleDelete}
          className="service-issue-chips"
        />
        <Chip
          label="Click"
          variant="outlined"
          onClick={handleClick}
          onDelete={handleDelete}
          className="service-issue-chips"
        />
        <Chip
          label="Service"
          variant="outlined"
          onClick={handleClick}
          onDelete={handleDelete}
          className="service-issue-chips"
        />
        <Chip
          label="Comparison"
          variant="outlined"
          onClick={handleClick}
          onDelete={handleDelete}
          className="service-issue-chips"
        />
      </div> */}
		</div>
	);
}

export default ServiceIssuesSettings;
