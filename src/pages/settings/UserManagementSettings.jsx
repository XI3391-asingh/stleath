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
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { Box } from "@mui/system";
import { Search } from "@mui/icons-material";

function UserManagementSettings() {
  const [addUserFormData, setaddUserFormData] = useState("");
  const [addUserModal, setaddUserModal] = useState(false);

  const openAddUserModal = () => {
    setaddUserModal(true);
  };
  const closeAddUserModal = () => {
    setaddUserModal(false);
  };

  return (
    <>
      <Typography variant="h4" className="page-main-heading">
        User Management Settings{" "}
      </Typography>

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
                  className="add-user-button"
                  onClick={() => openAddUserModal()}
                >
                  + Add User
                </button>
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    userName: "",
                    roleAssigned: "",
                    teamAssigned: "",
                  }}
                  validationSchema={Yup.object({
                    firstName: Yup.string()
                      .max(15, "Must be 15 characters or less")
                      .required("Required"),
                    lastName: Yup.string()
                      .max(20, "Must be 20 characters or less")
                      .required("Required"),
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Required"),
                    userName: Yup.string()
                      .min(5, "Must be 5 characters or more")
                      .required("Required"),
                    roleAssigned: Yup.string().required("Required"),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      console.log(values, "formValue");
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {(formik) => (
                    <Modal open={addUserModal} onClose={closeAddUserModal}>
                      <Box className="settings-modal-container">
                        <form onSubmit={formik.handleSubmit}>
                          <Typography
                            variant="h5"
                            className="settings-modal-container-heading"
                          >
                            Add New User{" "}
                          </Typography>
                          <Divider />
                          <div>
                            <div className="user-management-settings-input-fields">
                              <Typography
                                variant="h7"
                                className="user-management-settings-input-fields-heading"
                              >
                                First Name
                                <span className="required-text">*</span>
                              </Typography>
                              <TextField
                                error={
                                  formik.errors.firstName &&
                                  formik.touched.firstName
                                }
                                id="firstName"
                                name="firstName"
                                size="small"
                                className="settings-text-field"
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                                onBlur={formik.handleBlur}
                                helperText={
                                  formik.errors.firstName &&
                                  formik.touched.firstName &&
                                  formik.errors.firstName
                                }
                              />
                            </div>
                            <div className="user-management-settings-input-fields">
                              <Typography
                                variant="h7"
                                className="user-management-settings-input-fields-heading"
                              >
                                Last Name
                                <span className="required-text">*</span>
                              </Typography>
                              <TextField
                                error={
                                  formik.errors.lastName &&
                                  formik.touched.lastName
                                }
                                id="lastName"
                                name="lastName"
                                size="small"
                                className="settings-text-field"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                                onBlur={formik.handleBlur}
                                helperText={
                                  formik.errors.lastName &&
                                  formik.touched.lastName &&
                                  formik.errors.lastName
                                }
                              />
                            </div>
                            <div className="user-management-settings-input-fields">
                              <Typography
                                variant="h7"
                                className="user-management-settings-input-fields-heading"
                              >
                                Email Address
                                <span className="required-text">*</span>
                              </Typography>
                              <TextField
                                error={
                                  formik.errors.email && formik.touched.email
                                }
                                id="email"
                                name="email"
                                size="small"
                                className="settings-text-field"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                helperText={
                                  formik.errors.email &&
                                  formik.touched.email &&
                                  formik.errors.email
                                }
                              />
                            </div>

                            <div className="user-management-settings-input-fields">
                              <Typography
                                variant="h7"
                                className="user-management-settings-input-fields-heading"
                              >
                                Username
                                <span className="required-text">*</span>
                              </Typography>
                              <TextField
                                error={
                                  formik.errors.userName &&
                                  formik.touched.userName
                                }
                                id="userName"
                                name="userName"
                                size="small"
                                className="settings-text-field"
                                onChange={formik.handleChange}
                                value={formik.values.userName}
                                onBlur={formik.handleBlur}
                                helperText={
                                  formik.errors.userName &&
                                  formik.touched.userName &&
                                  formik.errors.userName
                                }
                              />
                            </div>
                          </div>
                          <Divider />
                          <div className="user-management-settings-input-field">
                            <Typography
                              variant="h7"
                              className="user-management-settings-input-fields-heading"
                            >
                              Assign Role
                              <span className="required-text">*</span>
                            </Typography>

                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              name="roleAssigned"
                              // defaultValue="MANAGER"

                              onChange={formik.handleChange}
                            >
                              <div className="user-management-settings-input-fields-role-radio-container">
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
                              {formik.errors.roleAssigned &&
                              formik.touched.roleAssigned ? (
                                <span className="validationErrorText">
                                  {formik.errors.roleAssigned}
                                </span>
                              ) : null}
                            </RadioGroup>
                          </div>
                          <Divider />
                          <div className="user-management-settings-input-fields">
                            <Typography
                              variant="h7"
                              className="user-management-settings-input-fields-heading"
                            >
                              Team Assignment
                            </Typography>
                            <Select
                              name="teamAssigned"
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              className="settings-text-field"
                              label="teamAssigned"
                              onChange={formik.handleChange}
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
                            <button
                              type="submit"
                              className="config-page-settings-save-button"
                              // onClick={handleAddQuestion}
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </Box>
                    </Modal>
                  )}
                </Formik>

                <button
                  className="add-bulk-users-button"
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
                    placeholder="Search user..."
                    inputProps={{ "aria-label": "search google maps" }}
                    className="evaluation-form-search-box"
                  />

                  <Divider
                    className="evaluation-form-search-box-divider"
                    orientation="vertical"
                  />
                  <IconButton
                    type="submit"
                    className="search-box-icon"
                    aria-label="search"
                  >
                    <Search />
                  </IconButton>
                  <Divider
                    className="evaluation-form-search-box-divider"
                    orientation="vertical"
                  />
                  <IconButton
                    type="submit"
                    className="clear-box-icon"
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
