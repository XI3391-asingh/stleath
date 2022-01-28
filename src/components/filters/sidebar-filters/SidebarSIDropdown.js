import React from "react";

import Select from "react-select";

const issues = {
  id: "2",
  label: "Service Issues",
  options: [
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ],
};

function SidebarSIDropdown({ label, isServiceIssue, setIsServiceIssue }) {
  return (
    <div>
      <div>
        <h6 className="sidebar-filter-dropdowns">{label}</h6>
        <Select
          className="sidebar-filter"
          options={issues.options}
          onChange={(option) => setIsServiceIssue(option.value)}
        />
      </div>
    </div>
  );
}

export default SidebarSIDropdown;
