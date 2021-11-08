import React from 'react';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Card, Typography } from '@material-ui/core';

import '../styles.css';

const options = ['Found', 'Not Found', 'All'];

const ITEM_HEIGHT = 4;

function Moments() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div>
			<Card className='moments-card-layout'>
				<div className='moments-card'>
					<Typography variant='h5' className='moments-card-header'>
						Moments
					</Typography>
					<IconButton
						aria-label='more'
						id='small-button'
						aria-controls='long-menu'
						aria-expanded={open ? 'true' : undefined}
						aria-haspopup='true'
						onClick={handleClick}
					>
						<FilterListIcon />
					</IconButton>
					<Menu
						id='long-menu'
						MenuListProps={{
							'aria-labelledby': 'small-button',
						}}
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						PaperProps={{
							className: 'moments-card-menu',
						}}
					>
						{options.map((option) => (
							<MenuItem
								key={option}
								selected={option === 'All'}
								onClick={handleClose}
							>
								{option}
							</MenuItem>
						))}
					</Menu>
				</div>
				<div className='moments-font'>
					<typography variant='h6'>Compliance</typography>
				</div>
				<div className='moments-font'>
					<typography variant='h6'>Process Adherance</typography>
				</div>
				<div className='moments-font'>
					<typography variant='h6'>Customer Satisfaction</typography>
				</div>
			</Card>
		</div>
	);
}

export default Moments;
