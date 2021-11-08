import React from 'react';
import Dropdown from '../../shared-components/Dropdown';
import './styles.css';

function ParentFilterPanel() {
	return (
		<div className='filterpanel-window'>
			<div className='dropdown-stack'>
				<Dropdown />
				<Dropdown />
				<Dropdown />
				<Dropdown />
				<Dropdown />
				<Dropdown />
				<Dropdown />
				<Dropdown />
				<Dropdown />
			</div>
			<div className='dropdown-stack'>
				<Dropdown />
				<Dropdown />
				<Dropdown />
				<Dropdown />
				<Dropdown />
				<Dropdown />
				<Dropdown />
				<Dropdown />
				<Dropdown />
			</div>
		</div>
	);
}

export default ParentFilterPanel;
