import React from "react";

import Select from "react-select";

const issues = {
  id: "2",
  label: "Closing Check",
  options: [
    { value: true, label: "Compliant" },
    { value: false, label: "Non-Compliant" },
  ],
};

function SidebarClosingCheckDropdown({
  label,
  isCallClosedWithCompliance,
  setIsCallClosedWithCompliance,
}) {
  return (
    <div>
      <div>
        <h6 className="sidebar-filter-dropdowns">{label}</h6>
        <Select
          className="sidebar-filter"
          options={issues.options}
          onChange={(option) => setIsCallClosedWithCompliance(option.value)}
        />
      </div>
    </div>
  );
}

export default SidebarClosingCheckDropdown;
