import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Settings from "@mui/icons-material/Settings";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Logout } from "@mui/icons-material";
import { Box } from "@mui/system";

import moment from "moment";

import LogoutButton from "../logout/LogoutButton";
import "./styles.css";

import notificationService from "../../service/notifications";
import { useDispatch, useSelector } from "react-redux";
import { GET_NOTIFICATION } from "../../store/type";

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
      .getNotification(localStorage.getItem("username"))
      .then((resp) => {
        if (resp.isSuccess) {
          dispatch({ type: GET_NOTIFICATION, payload: resp?.data?.reverse() });
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
    notificationService.markReadNotification().then((resp) => {
      if (resp.isSuccess) {
        getNotification();
      }
    });
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      // className='appbar-avatar-menu'
    >
      <MenuItem onClick={handleMenuClose} className="appbar-avatar-menuItem">
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        <Typography variant="body1">Settings</Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuClose} className="appbar-avatar-menuItem">
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        {/* <Typography variant='body1'>Logout</Typography> */}
        <LogoutButton />
      </MenuItem>
    </Menu>
  );

  const handleNotificationMenu = (type, call_id) => {
    type === "FEEDBACK"
      ? history.push(`/employee-management`)
      : history.push(`/call-visualizer?id=${call_id}`);
    setNotificationAnchorEl(null);
  };

  const notificationMenuId = "notification-menu";
  const renderNotificationMenu = (
    <Menu
      notificationAnchorEl={notificationAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      id={notificationMenuId}
      keepMounted
      open={isNotificationMenuOpen}
      onClose={handleNotificationMenuClose}
      className="appbar-notification-menu"
    >
      <MenuList className="appbar-notification-menu-list">
        <MenuItem className="appbar-notification-menu-item">
          <Typography variant="h6">Notifications</Typography>
          <button
            onClick={handleMarkReadNotification}
            className="appbar-notification-menu-list-button"
          >
            Mark All As Read
          </button>
        </MenuItem>
        <Divider />
        {notification?.slice(0, 5)?.map((data, index) => {
          return (
            <>
              <MenuItem
                className="appbar-notification-menu-list-notification-item"
                onClick={() => {
                  handleNotificationMenu(data.type, data?.call_id);
                }}
              >
                <div className="appbar-notification-menu-notification-container">
                  <div className="appbar-notification-menu-notification-icon-container">
                    <FiberManualRecordIcon className="appbar-notification-menu-notification-icon" />
                  </div>
                  <Typography
                    variant="body2"
                    className="appbar-notification-menu-notification-message"
                  >
                    {data?.message}
                    {/* : CallID - {data?.call_id} */}
                  </Typography>
                </div>
                <div className="appbar-notification-menu-notification-time-container">
                  <Typography
                    variant="caption"
                    className="appbar-notification-menu-notification-time"
                  >
                    {moment(data?.createdAt).format("lll")}
                  </Typography>
                </div>
              </MenuItem>
              {/* </Link> */}
              <Divider />
            </>
          );
        })}
      </MenuList>
      <div className="appbar-notification-menu-see-all-notifications">
        <Link to="/notifications">
          <button className="appbar-notification-menu-list-button">
            See All Notifications
          </button>
        </Link>
      </div>
    </Menu>
  );

  return (
    <div>
      <Box>
        <AppBar position="static" className="appbar-layout">
          <Toolbar className="appbar-heading-bar">
            <IconButton className="appbar-menu-button">
              <MenuIcon className="appbar-menu-icon" />
            </IconButton>
            <Typography variant="h6" className="appbar-heading">
              STEALTH
            </Typography>
            <Box className="appbar-box">
              <ul className="nav-bar">
                <li>
                  <NavLink activeClassName="active" to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/calls">
                    Calls
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/qa">
                    QA
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/employee-management">
                    Employee Management
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/employee-management-1">
                    AI Act
                    <span> (Phase 2)</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/employee-management-2">
                    AI Recommendations
                    <span> (Phase 3)</span>
                  </NavLink>
                </li>
              </ul>
            </Box>
            <Box className="appbar-icon-list">
              {localStorage.getItem("userable_type").toLowerCase() ===
              "manager" ? (
                <Typography variant="overline" className="appbar-profile">
                  Viewing as Manager
                </Typography>
              ) : (
                <Typography variant="overline" className="appbar-profile">
                  Viewing as Agent
                </Typography>
              )}
              <IconButton className="appbar-button">
                <Link to="/messages">
                  <Badge badgeContent={4} color="error">
                    <MailIcon className="appbar-icons" />
                  </Badge>
                </Link>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="notifications"
                aria-controls={notificationMenuId}
                aria-haspopup="true"
                onClick={handleNotificationMenuOpen}
                color="inherit"
              >
                {notification.length > 0 ? (
                  <Badge badgeContent={notification?.length} color="error">
                    <NotificationsIcon className="appbar-icons" />
                  </Badge>
                ) : (
                  <NotificationsIcon className="appbar-icons" />
                )}
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                className="appbar-avatar"
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
