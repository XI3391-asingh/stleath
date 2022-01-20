import React from "react";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Button,
  ButtonGroup,
  Card,
  Chip,
  Switch,
  Typography,
} from "@material-ui/core";

import "../styles.css";

const options = ["Found", "Not Found", "All"];

const ITEM_HEIGHT = 4;

function Moments({ callDetails }) {
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
      <Card className="moments-card-layout">
        <div className="moments-card">
          <Typography variant="h5" className="moments-card-header">
            Moments
          </Typography>
          <IconButton
            aria-label="more"
            id="small-button"
            aria-controls="long-menu"
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <FilterListIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "small-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              className: "moments-card-menu",
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "All"}
                onClick={handleClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <hr className="transcriptions-card-divider" />
        <div className="moments-card-body">
          <div className="moments-font">
            <typography variant="h6">
              Competitor Analysis &nbsp;
              {callDetails.comparison === 1 ? (
                <Chip
                  label="yes"
                  color="primary"
                  size="small"
                  className="vertical-align-middle"
                />
              ) : (
                <Chip
                  label="no"
                  color="secondary"
                  size="small"
                  className="vertical-align-middle"
                />
              )}
            </typography>
          </div>
          <div className="moments-font">
            <typography variant="h6">
              Service Issue &nbsp;
              {callDetails.service_issue === 1 ? (
                <Chip
                  label="yes"
                  color="primary"
                  size="small"
                  className="vertical-align-middle"
                />
              ) : (
                <Chip
                  label="no"
                  color="secondary"
                  size="small"
                  className="vertical-align-middle"
                />
              )}
            </typography>
          </div>
          <div className="moments-font">
            <typography variant="h6">
              Product Issue &nbsp;
              {callDetails.product_issue === 1 ? (
                <Chip
                  label="yes"
                  color="primary"
                  size="small"
                  className="vertical-align-middle"
                />
              ) : (
                <Chip
                  label="no"
                  color="secondary"
                  size="small"
                  className="vertical-align-middle"
                />
              )}
            </typography>
          </div>
          <div className="moments-font">
            <typography variant="h6">
              Warranty and Others &nbsp;
              {callDetails.warranty_and_other === 1 ? (
                <Chip
                  label="yes"
                  color="primary"
                  size="small"
                  className="vertical-align-middle"
                />
              ) : (
                <Chip
                  label="no"
                  color="secondary"
                  size="small"
                  className="vertical-align-middle"
                />
              )}
            </typography>
          </div>
          <div className="moments-font">
            <typography variant="h6">
              Hold Time Violations &nbsp;
              {callDetails.hold_violation === true ? (
                <Chip
                  label="yes"
                  color="primary"
                  size="small"
                  className="vertical-align-middle"
                />
              ) : (
                <Chip
                  label="no"
                  color="secondary"
                  size="small"
                  className="vertical-align-middle"
                />
              )}
            </typography>
          </div>
          <div className="moments-font">
            <typography variant="h6">
              Repeat Calls Volume &nbsp;
              {callDetails.repeat_call_volume === 1 ? (
                <Chip
                  label="yes"
                  color="primary"
                  size="small"
                  className="vertical-align-middle"
                />
              ) : (
                <Chip
                  label="no"
                  color="secondary"
                  size="small"
                  className="vertical-align-middle"
                />
              )}
            </typography>
          </div>

          <div className="moments-font">
            <typography variant="h6">
              Sentiment &nbsp;
              <Chip
                label={callDetails.feedback.split(" ")[0] ? callDetails.feedback.split(" ")[0] : callDetails.feedback}
                color="default"
                size="small"
                variant="outlined"
                style={{ verticalAlign: "inherit" }}
              />
            </typography>
          </div>
          <div className="moments-font">
            <typography variant="h6">
              Emotion &nbsp;
              <Chip
                label={callDetails.call_emotion}
                color="default"
                size="small"
                variant="outlined"
                style={{ verticalAlign: "inherit" }}
              />
            </typography>
          </div>
          <div className="moments-font">
            <typography variant="h6">
              Category &nbsp;
              <Chip
                label={callDetails.call_duration > 60 ? 'Above 60s' : (callDetails.call_duration >= 20) ? 'B/w 20-60s' : 'Below 20s'}
                color="default"
                size="small"
                variant="outlined"
                style={{ verticalAlign: "inherit" }}
              />
            </typography>
          </div>

          <div className="moments-font">
            <typography variant="h6">
              Voice Energy Deviation &nbsp;
              {callDetails.is_voice_energy_deviation === 1 ? (
                <Chip
                  label="yes"
                  color="primary"
                  size="small"
                  className="vertical-align-middle"
                />
              ) : (
                <Chip
                  label="no"
                  color="secondary"
                  size="small"
                  className="vertical-align-middle"
                />
              )}
            </typography>
          </div>

          <div className="moments-font">
            <typography variant="h6">
              Opening &nbsp;{" "}
              {callDetails.is_call_opened_with_compliance === 1 ? (
                <Chip
                  label="yes"
                  color="primary"
                  size="small"
                  className="vertical-align-middle"
                />
              ) : (
                <Chip
                  label="no"
                  color="secondary"
                  size="small"
                  className="vertical-align-middle"
                />
              )}
            </typography>
          </div>
          <div className="moments-font">
            <typography variant="h6">
              Closing &nbsp;{" "}
              {callDetails.is_call_closed_with_compliance === 1 ? (
                <Chip
                  label="yes"
                  color="primary"
                  size="small"
                  className="vertical-align-middle"
                />
              ) : (
                <Chip
                  label="no"
                  color="secondary"
                  size="small"
                  className="vertical-align-middle"
                />
              )}
            </typography>
          </div>
          <div className="moments-font">
            <typography variant="h6">
              Escalation &nbsp;{" "}
              {callDetails.escalation === 1 ? (
                <Chip
                  label="yes"
                  color="primary"
                  size="small"
                  className="vertical-align-middle"
                />
              ) : (
                <Chip
                  label="no"
                  color="secondary"
                  size="small"
                  className="vertical-align-middle"
                />
              )}
            </typography>
          </div>
          <div className="moments-font">
            <typography variant="h6">
              Pricing &nbsp;{" "}
              {callDetails.product_issue === 1 ? (
                <Chip
                  label="yes"
                  color="primary"
                  size="small"
                  className="vertical-align-middle"
                />
              ) : (
                <Chip
                  label="no"
                  color="secondary"
                  size="small"
                  className="vertical-align-middle"
                />
              )}
            </typography>
          </div>
          <div className="moments-font">
            <typography variant="h6">
              Compliance &nbsp;{" "}
              {callDetails.is_compliance_call === 1 ? (
                <Chip
                  label="yes"
                  color="primary"
                  size="small"
                  className="vertical-align-middle"
                />
              ) : (
                <Chip
                  label="no"
                  color="secondary"
                  size="small"
                  className="vertical-align-middle"
                />
              )}
            </typography>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Moments;
