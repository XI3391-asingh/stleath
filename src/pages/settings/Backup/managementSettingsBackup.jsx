import React, { useState } from "react";
import {
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
  FormLabel,
  RadioGroup,
  IconButton,
  Radio,
  Button,
  FormHelperText,
  FormControlLabel,
  InputBase,
  Paper,
  Divider,
} from "@mui/material";

import { Box } from "@mui/system";
// import { Chip, InputBase, Paper } from "@material-ui/core";
// import { Divider, IconButton, InputBase, Paper } from "@material-ui/core";
function UserManagementSettings() {
  const [addUserFormData, setaddUserFormData] = useState("");
  const [addUserModal, setaddUserModal] = useState(false);

  const [formValue, setformValue] = useState({
    fisrtName: "",
    lastName: "",
    emailAddress: "",
    userName: "",
    rollAssign: "",
    teamAssign: "",
  });

  const openAddUserModal = () => {
    setaddUserModal(true);
  };
  const closeAddUserModal = () => {
    setaddUserModal(false);
  };

  return (
    <>
      <h2 className="user-management-settings-heading">
        User Management Settings
      </h2>
      <div>
        <Card className="user-management-settings-card-layout">
          <div className="user-management-settings-container">
            <div className="user-management-settings-box1">
              <h2>Users</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                accusamus sunt voluptatum, optio recusandae porro, alias est
                soluta neque, a praesentium. Voluptatem nihil deleniti eaque
                reiciendis. Animi maxime, sint inventore recusandae in totam
                aperiam cupiditate necessitatibus? Distinctio dolor laboriosam
                quae voluptatum molestias praesentium, itaque quisquam, nemo
                unde repellat eligendi. Numquam.
              </p>
            </div>
            <div className="user-management-settings-box2">
              <div className="user-management-settings-box2-buttons-container">
                <button
                  className="add-more-button"
                  onClick={() => openAddUserModal()}
                >
                  + Add User
                </button>
                <Modal open={addUserModal} onClose={closeAddUserModal}>
                  <Box className="settings-modal-container">
                    <FormControl fullWidth>
                      <Typography
                        variant="h5"
                        className="settings-modal-container-heading"
                      >
                        Add New User{" "}
                      </Typography>
                      <Divider />
                      <div>
                        <div className="user-management-settings-input-fileds">
                          <Typography
                            variant="h7"
                            className="user-management-settings-input-fileds-heading"
                          >
                            First Name
                          </Typography>
                          <TextField
                            size="small"
                            className="settings-text-field"
                            onChange={(e) =>
                              setformValue({
                                ...formValue,
                                fisrtName: e.target.value,
                              })
                            }
                            value={formValue.fisrtName}
                          />
                        </div>
                        <div className="user-management-settings-input-fileds">
                          <Typography
                            variant="h7"
                            className="user-management-settings-input-fileds-heading"
                          >
                            Last Name
                          </Typography>
                          <TextField
                            size="small"
                            className="settings-text-field"
                            onChange={(e) =>
                              setformValue({
                                ...formValue,
                                lastName: e.target.value,
                              })
                            }
                            value={formValue.lastName}
                          />
                        </div>
                        <div className="user-management-settings-input-fileds">
                          <Typography
                            variant="h7"
                            className="user-management-settings-input-fileds-heading"
                          >
                            Email Address
                          </Typography>
                          <TextField
                            size="small"
                            className="settings-text-field"
                            onChange={(e) =>
                              setformValue({
                                ...formValue,
                                emailAddress: e.target.value,
                              })
                            }
                            value={formValue.emailAddress}
                          />
                        </div>
                        <div className="user-management-settings-input-fileds">
                          <Typography
                            variant="h7"
                            className="user-management-settings-input-fileds-heading"
                          >
                            Username
                          </Typography>
                          <TextField
                            size="small"
                            className="settings-text-field"
                            onChange={(e) =>
                              setformValue({
                                ...formValue,
                                userName: e.target.value,
                              })
                            }
                            value={formValue.userName}
                          />
                        </div>
                      </div>
                      <Divider />
                      <div className="user-management-settings-input-filed">
                        <Typography
                          variant="h7"
                          className="user-management-settings-input-fileds-heading"
                        >
                          Assign Role
                        </Typography>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                          defaultValue="MANAGER"
                          onChange={(e) =>
                            setformValue({
                              ...formValue,
                              rollAssign: e.target.value,
                            })
                          }
                        >
                          <div className="user-management-settings-input-fileds-role-radio-container">
                            <FormControlLabel
                              value="QA"
                              control={
                                <Radio
                                  sx={{
                                    color: "#6b1d5e",
                                    "&.Mui-checked": {
                                      color: "#6b1d5e",
                                    },
                                  }}
                                />
                              }
                              label="QA"
                            />
                            <FormControlLabel
                              value="MANAGER"
                              control={
                                <Radio
                                  sx={{
                                    color: "#6b1d5e",
                                    "&.Mui-checked": {
                                      color: "#6b1d5e",
                                    },
                                  }}
                                />
                              }
                              label="Manager"
                            />
                            <FormControlLabel
                              value="ADMIN"
                              control={
                                <Radio
                                  sx={{
                                    color: "#6b1d5e",
                                    "&.Mui-checked": {
                                      color: "#6b1d5e",
                                    },
                                  }}
                                />
                              }
                              label="Admin"
                            />
                            <FormControlLabel
                              value="TEAMLEAD"
                              control={
                                <Radio
                                  sx={{
                                    color: "#6b1d5e",
                                    "&.Mui-checked": {
                                      color: "#6b1d5e",
                                    },
                                  }}
                                />
                              }
                              label="Team Lead"
                            />
                            <FormControlLabel
                              value="AGENT"
                              control={
                                <Radio
                                  sx={{
                                    color: "#6b1d5e",
                                    "&.Mui-checked": {
                                      color: "#6b1d5e",
                                    },
                                  }}
                                />
                              }
                              label="Agent"
                            />
                          </div>
                        </RadioGroup>
                      </div>
                      <Divider />
                      <div className="user-management-settings-input-fileds">
                        <Typography
                          variant="h7"
                          className="user-management-settings-input-fileds-heading"
                        >
                          Team Assignment
                        </Typography>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={age}
                          className="settings-text-field"
                          label="Age"
                          onChange={(e) =>
                            setformValue({
                              ...formValue,
                              teamAssign: e.target.value,
                            })
                          }
                        >
                          <MenuItem value={"webDevelopment"}>
                            Web development
                          </MenuItem>
                          <MenuItem value={"qualityAssurance"}>
                            Quality Assurance
                          </MenuItem>
                          <MenuItem value={"humanResource"}>
                            Human Resource
                          </MenuItem>
                        </Select>
                      </div>

                      <div className="config-page-settings-addQuestion-buttons-container">
                        <button
                          className="config-page-settings-cancel-button"
                          onClick={() => setaddUserModal(false)}
                        >
                          Cancel
                        </button>
                        {addUserFormData ? (
                          <button
                            className="config-page-settings-save-button"
                            // onClick={handleAddQuestion}
                          >
                            Submit
                          </button>
                        ) : (
                          <button
                            className="config-page-settings-save-button-disabled"
                            onClick={() => {
                              console.log(formValue, "formValue");
                            }}
                          >
                            Submit
                          </button>
                        )}
                      </div>
                    </FormControl>
                  </Box>
                </Modal>

                <button
                  className="add-more-button"
                  // onClick={() => handleAddFields()}
                >
                  + Bulk Upload Users
                </button>
              </div>
              <div>
                <Paper
                  component="form"
                  className="evaluation-form-search-paper"
                >
                  <InputBase
                    placeholder="Search..."
                    inputProps={{ "aria-label": "search google maps" }}
                    className="evaluation-form-search-box"
                  />

                  <Divider
                    className="evaluation-form-search-box-divider"
                    orientation="vertical"
                  />
                  <IconButton
                    color="primary"
                    type="submit"
                    className="evaluation-form-search-box-icon"
                    aria-label="search"
                  >
                    Clear
                  </IconButton>
                </Paper>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default UserManagementSettings;
