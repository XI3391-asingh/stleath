import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

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

import LogoutButton from '../logout/LogoutButton';
import './styles.css';

import notificationService from '../../service/notifications';
import { useDispatch, useSelector } from 'react-redux';
import { GET_NOTIFICATION } from '../../store/type';

function Navbar() {
	const dispatch = useDispatch();
	let history = useHistory();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [notificationAnchorEl, setNotificationAnchorEl] = React.useState(null);
	const isMenuOpen = Boolean(anchorEl);
	const isNotificationMenuOpen = Boolean(notificationAnchorEl);
	const { notification } = useSelector((store) => store.notification);

	useEffect(() => {
		getNotification();
		setInterval(() => {
			getNotification();
		}, 10000);
	}, []);

	const getNotification = () => {
		notificationService
			.getNotification(localStorage.getItem('id'))
			.then((resp) => {
				if (resp.isSuccess) {
					dispatch({ type: GET_NOTIFICATION, payload: resp.data });
				}
			});
	};

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

	const handleMarkReadNotification = () => {
		var myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		var raw = JSON.stringify({
			recipient_id: localStorage.getItem('id'),
		});
		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
		};
		fetch(
			'http://13.127.135.117:8080/api/mark-read-notification',
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				if (result?.code === 200) {
					getNotification();
				}
			})
			.catch((error) => console.log('error', error));
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
				{/* <Typography variant='body1'>Logout</Typography> */}
				<LogoutButton />
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
					<Button onClick={handleMarkReadNotification}>
						<Typography
							variant='caption'
							className='appbar-notification-menu-list-button'
						>
							Mark All As Read
						</Typography>
					</Button>
				</MenuItem>
				<Divider />
				{notification?.slice(0, 5)?.map((data, index) => {
					return (
						<>
							<MenuItem
								className='appbar-notification-menu-list-notification-item'
								onClick={() => {
									history.push(`/call-visualizer?id=${data?.call_id}`);
								}}
							>
								<div className='appbar-notification-menu-notification-container'>
									<div className='appbar-notification-menu-notification-icon-container'>
										<FiberManualRecordIcon className='appbar-notification-menu-notification-icon' />
									</div>
									<Typography
										variant='body2'
										className='appbar-notification-menu-notification-message'
									>
										{data?.message}
										{/* : CallID - {data?.call_id} */}
									</Typography>
								</div>
								<div className='appbar-notification-menu-notification-time-container'>
									<Typography
										variant='caption'
										className='appbar-notification-menu-notification-time'
									>
										{moment(data?.createdAt).format('lll')}
									</Typography>
								</div>
							</MenuItem>
							{/* </Link> */}
							<Divider />
						</>
					);
				})}
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

	return (
		<div>
			<Box>
				<AppBar position='static' className='appbar-layout'>
					<Toolbar className='appbar-heading-bar'>
						<IconButton className='appbar-menu-button'>
							<MenuIcon className='appbar-menu-icon' />
						</IconButton>
						<Typography variant='h6' className='appbar-heading'>
							STEALTH
						</Typography>
						<Box className='appbar-box'>
							<IconButton>
								<NavLink
									className='appbar-pages'
									activeClassName='active'
									to='/dashboard'
								>
									<Typography variant='body1'>Dashboard</Typography>
								</NavLink>
								<NavLink
									className='appbar-pages'
									activeClassName='active'
									to='/calls'
								>
									<Typography variant='body1'>Calls</Typography>
								</NavLink>
								<Typography variant='body1' className='appbar-pages'>
									QA
								</Typography>
								<NavLink
									className='appbar-pages'
									activeClassName='active'
									to='/employee-management'
								>
									<Typography variant='body1'>Employee Management</Typography>
								</NavLink>
								<div>
									<Typography variant='body1' className='appbar-pending-pages'>
										AI Act
									</Typography>
									<Typography
										variant='caption'
										className='appbar-pending-page-notification'
									>
										Phase 2
									</Typography>
								</div>
								<div>
									<Typography variant='body1' className='appbar-pending-pages'>
										AI Recommendations
									</Typography>
									<Typography
										variant='caption'
										className='appbar-pending-page-notification'
									>
										Phase 3
									</Typography>
								</div>
							</IconButton>
						</Box>
						<Box className='appbar-icon-list'>
							{localStorage.getItem('email') === 'rajat.bansal@xebia.com' ? (
								<Typography variant='overline' className='appbar-profile'>
									Viewing as Manager
								</Typography>
							) : (
								<Typography variant='overline' className='appbar-profile'>
									Viewing as Agent
								</Typography>
							)}
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
								{notification.length > 0 ? (
									<Badge badgeContent={notification?.length} color='error'>
										<NotificationsIcon className='appbar-icons' />
									</Badge>
								) : (
									<NotificationsIcon className='appbar-icons' />
								)}
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
