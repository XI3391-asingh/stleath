import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import {
	AppBar,
	IconButton,
	Toolbar,
	Typography,
	Badge,
	Menu,
	MenuItem,
	ListItemIcon,
	MenuList,
	Divider,
	Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Settings from '@mui/icons-material/Settings';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Logout } from '@mui/icons-material';
import { Box } from '@mui/system';

import moment from 'moment';

import './styles.css';

function Navbar() {
	let dateTime = moment().format('lll');
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [notificationAnchorEl, setNotificationAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isNotificationMenuOpen = Boolean(notificationAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleNotificationMenuOpen = (event) => {
		setNotificationAnchorEl(event.currentTarget);
	};

	const handleNotificationMenuClose = () => {
		setNotificationAnchorEl(null);
	};

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'left',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
			// className='appbar-avatar-menu'
		>
			<MenuItem onClick={handleMenuClose} className='appbar-avatar-menuItem'>
				<ListItemIcon>
					<Settings fontSize='small' />
				</ListItemIcon>
				<Typography variant='body1'>Settings</Typography>
			</MenuItem>
			<MenuItem onClick={handleMenuClose} className='appbar-avatar-menuItem'>
				<ListItemIcon>
					<Logout fontSize='small' />
				</ListItemIcon>
				<Typography variant='body1'>Logout</Typography>
			</MenuItem>
		</Menu>
	);

	const notificationMenuId = 'notification-menu';
	const renderNotificationMenu = (
		<Menu
			notificationAnchorEl={notificationAnchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'left',
			}}
			id={notificationMenuId}
			keepMounted
			open={isNotificationMenuOpen}
			onClose={handleNotificationMenuClose}
			className='appbar-notification-menu'
		>
			<MenuList className='appbar-notification-menu-list'>
				<MenuItem className='appbar-notification-menu-item'>
					<Typography variant='h6'>Notifications</Typography>
					<Button>
						<Typography
							variant='caption'
							className='appbar-notification-menu-list-button'
						>
							Mark All As Read
						</Typography>
					</Button>
				</MenuItem>
				<Divider />
				<MenuItem className='appbar-notification-menu-list-notification-item'>
					<div className='appbar-notification-menu-notification-container'>
						<div className='appbar-notification-menu-notification-icon-container'>
							<FiberManualRecordIcon className='appbar-notification-menu-notification-icon' />
						</div>
						<Typography
							variant='body2'
							className='appbar-notification-menu-notification-message'
						>
							Jayanth Commented on your call dated 25th, October 2021:
							CallID-0747
						</Typography>
					</div>
					<div className='appbar-notification-menu-notification-time-container'>
						<Typography
							variant='caption'
							className='appbar-notification-menu-notification-time'
						>
							{dateTime}
						</Typography>
					</div>
				</MenuItem>
				<Divider />
				<MenuItem className='appbar-notification-menu-list-notification-item'>
					<div className='appbar-notification-menu-notification-container'>
						<div className='appbar-notification-menu-notification-icon-container'>
							<FiberManualRecordIcon className='appbar-notification-menu-notification-icon' />
						</div>
						<Typography
							variant='body2'
							className='appbar-notification-menu-notification-message'
						>
							Jayanth Commented on your call dated 25th, October 2021:
							CallID-0747
						</Typography>
					</div>
					<div className='appbar-notification-menu-notification-time-container'>
						<Typography
							variant='caption'
							className='appbar-notification-menu-notification-time'
						>
							{dateTime}
						</Typography>
					</div>
				</MenuItem>
				<Divider />
				<MenuItem className='appbar-notification-menu-list-notification-item'>
					<div className='appbar-notification-menu-notification-container'>
						<div className='appbar-notification-menu-notification-icon-container'>
							<FiberManualRecordIcon className='appbar-notification-menu-notification-icon' />
						</div>
						<Typography
							variant='body2'
							className='appbar-notification-menu-notification-message'
						>
							Jayanth Commented on your call dated 25th, October 2021:
							CallID-0747
						</Typography>
					</div>
					<div className='appbar-notification-menu-notification-time-container'>
						<Typography
							variant='caption'
							className='appbar-notification-menu-notification-time'
						>
							{dateTime}
						</Typography>
					</div>
				</MenuItem>
				<Divider />
				<MenuItem className='appbar-notification-menu-list-notification-item'>
					<div className='appbar-notification-menu-notification-container'>
						<div className='appbar-notification-menu-notification-icon-container'>
							<FiberManualRecordIcon className='appbar-notification-menu-notification-icon' />
						</div>
						<Typography
							variant='body2'
							className='appbar-notification-menu-notification-message'
						>
							Jayanth Commented on your call dated 25th, October 2021:
							CallID-0747
						</Typography>
					</div>
					<div className='appbar-notification-menu-notification-time-container'>
						<Typography
							variant='caption'
							className='appbar-notification-menu-notification-time'
						>
							{dateTime}
						</Typography>
					</div>
				</MenuItem>
				<Divider />
				<MenuItem className='appbar-notification-menu-list-notification-item'>
					<div className='appbar-notification-menu-notification-container'>
						<div className='appbar-notification-menu-notification-icon-container'>
							<FiberManualRecordIcon className='appbar-notification-menu-notification-icon' />
						</div>
						<Typography
							variant='body2'
							className='appbar-notification-menu-notification-message'
						>
							Jayanth Commented on your call dated 25th, October 2021:
							CallID-0747
						</Typography>
					</div>
					<div className='appbar-notification-menu-notification-time-container'>
						<Typography
							variant='caption'
							className='appbar-notification-menu-notification-time'
						>
							{dateTime}
						</Typography>
					</div>
				</MenuItem>
				<Divider />
			</MenuList>
			<div className='appbar-notification-menu-see-all-notifications'>
				<Link to='/notifications'>
					<Button>
						<Typography variant='button' onClick={handleNotificationMenuClose}>
							See All Notifications
						</Typography>
					</Button>
				</Link>
			</div>
		</Menu>
	);

	// const [notificationAnchorEl, setNotificationAnchorEl] = React.useState(null);
	// const isNotificationMenuOpen = Boolean(anchorEl);

	// const handleNotificationMenuOpen = (event) => {
	// 	setNotificationAnchorEl(event.currentTarget);
	// };

	// const handleNotificationMenuClose = () => {
	// 	setNotificationAnchorEl(null);
	// };

	// const notificationMenuId = 'primary-notifications';
	// const renderNotifications = (
	// 	<Menu
	// 		notificationAnchorEl={notificationAnchorEl}
	// 		anchorOrigin={{
	// 			vertical: 'bottom',
	// 			horizontal: 'left',
	// 		}}
	// 		id={notificationMenuId}
	// 		keepMounted
	// 		transformOrigin={{
	// 			vertical: 'top',
	// 			horizontal: 'left',
	// 		}}
	// 		open={isNotificationMenuOpen}
	// 		onClose={handleNotificationMenuClose}
	// 		className='appbar-notification-menu'
	// 	>
	{
		/* <MenuItem style={{ justifyContent: 'space-between' }}>
				<Typography variant='h6'>Notifications</Typography>
				<Typography variant='caption' style={{ color: 'blue' }}>
					Mark All Read
				</Typography>
			</MenuItem>
		</Menu>
	); */
	}

	return (
		<div>
			<Box>
				<AppBar position='static' className='appbar-layout'>
					<Toolbar className='appbar-heading-bar'>
						<IconButton className='appbar-menu-button'>
							<MenuIcon className='appbar-menu-icon' />
						</IconButton>
						<NavLink activeClassName='active' to='/' exact={true}>
							<Typography variant='h5' className='appbar-heading'>
								STLEATH
							</Typography>
						</NavLink>
						<Box className='appbar-box'>
							<IconButton>
								<NavLink activeClassName='active' to='/' exact={true}>
									<Typography variant='h6' className='appbar-pages'>
										Dashboard
									</Typography>
								</NavLink>
								<NavLink activeClassName='active' to='/calls'>
									<Typography variant='h6' className='appbar-pages'>
										Calls
									</Typography>
								</NavLink>
								<Typography variant='h6' className='appbar-pages'>
									QA
								</Typography>
								<Typography variant='h6' className='appbar-pages'>
									Employee Management
								</Typography>
							</IconButton>
						</Box>
						<Box className='appbar-icon-list'>
							<IconButton className='appbar-button'>
								<Link to='/messages'>
									<Badge badgeContent={4} color='error'>
										<MailIcon className='appbar-icons' />
									</Badge>
								</Link>
							</IconButton>
							<IconButton
								size='large'
								edge='end'
								aria-label='notifications'
								aria-controls={notificationMenuId}
								aria-haspopup='true'
								onClick={handleNotificationMenuOpen}
								color='inherit'
							>
								<Badge badgeContent={4} color='error'>
									<NotificationsIcon className='appbar-icons' />
								</Badge>
							</IconButton>
							<IconButton
								size='large'
								edge='end'
								aria-label='account of current user'
								aria-controls={menuId}
								aria-haspopup='true'
								onClick={handleProfileMenuOpen}
								color='inherit'
								className='appbar-avatar'
								// style={{ color: 'white' }}
							>
								<AccountCircle />
							</IconButton>
						</Box>
					</Toolbar>
				</AppBar>
				{/* {renderNotifications} */}
				{renderNotificationMenu}
				{renderMenu}
			</Box>
		</div>
	);
}

export default Navbar;
