import React from 'react';

import './styles.css';

function AddMoreButton() {
	const [rating, setRating] = React.useState([{ input: '', rating: '' }]);

	const handleAddFields = () => {
		const values = [...rating];
		values.push({
			input: '',
			rating: '',
		});
		setRating(values);
	};

	return (
		<div>
			<button className='add-more-button' onClick={() => handleAddFields()}>
				+ ADD MORE
			</button>
		</div>
	);
}

export default AddMoreButton;
