import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
// import configurationSettingsImage from '../../assets/images/svg/configurationSettings.svg'
// import managementSettingsImage from '../../assets/images/svg/managementSettings.svg'
// import organizationSettingsImage from '../../assets/images/svg/organizationSettings.svg'
import rolesAndPermissionsSettingsImage from "../../assets/images/svg/rolesAndPermissionsSettings.svg";
import { Card, Typography } from "@mui/material";
function UserSettings() {
  const history = useHistory();
  return (
    <div className="config-settings-page-layout">
      <Typography variant="h4" className="page-main-heading">
        Settings{" "}
      </Typography>
      <Card className="config-page-card-layout">
        <div className="config-page-evaluation-card-question-container">
          <Card
            className="user-settings-card-layout"
            onClick={() => history.push("/config-settings")}
          >
            <img
              src={
                "https://storage.googleapis.com/stleath/assets/configurationSettings.svg"
              }
              className="user-settings-card-image"
            />
            <Typography variant="h6" className="user-settings-card-title">
              Configurations
            </Typography>
            <div className="user-settings-card-discription">
              Add and edit the settings related to your quality process.
            </div>
          </Card>

          <Card
            className="user-settings-card-layout"
            onClick={() => history.push("/user-management-settings")}
          >
            <img
              src={
                "https://storage.googleapis.com/stleath/assets/managementSettings.svg"
              }
              className="user-settings-card-image"
            />
            <Typography variant="h6" className="user-settings-card-title">
              User Management
            </Typography>
            <div className="user-settings-card-discription">
              Add, edit and remove the users.
            </div>
            {/* </Link> */}
          </Card>

          <Card
            className="user-settings-card-layout"
            onClick={() => history.push("/organization-settings")}
          >
            <img
              src={
                "https://storage.googleapis.com/stleath/assets/organizationSettings.svg"
              }
              className="user-settings-card-image"
            />
            <Typography variant="h6" className="user-settings-card-title">
              Organization Setup
            </Typography>
            <div className="user-settings-card-discription">
              Create and edit your organizational structure
            </div>
          </Card>

          <Card
            className="user-settings-card-layout"
            onClick={() => history.push("/roles-and-permissions-settings")}
          >
            <img
              src={
                "https://storage.googleapis.com/stleath/assets/rolesAndPermissionsSettings.svg"
              }
              className="user-settings-card-image"
            />
            <Typography variant="h6" className="user-settings-card-title">
              Roles and Permissions
            </Typography>
            <div className="user-settings-card-discription">
              Create and edit roles and permissions
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
}

export default UserSettings;
