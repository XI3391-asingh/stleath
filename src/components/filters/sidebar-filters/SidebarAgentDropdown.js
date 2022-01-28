import React from "react";

import Select from "react-select";

const options = {
  id: "1",
  label: "Agent Name",
  options: [
    { value: "All", label: "All" },
    { value: "Jayant Raja", label: "Jayant Raja" },
    { value: "Wasi Muka", label: "Wasi Muka" },
    { value: "Rajat Bansal", label: "Rajat Bansal" },
    { value: "Jyoti Jena", label: "Jyoti Jena" },
  ],
};

function SidebarAgentDropdown({ label, agentName, setAgentName }) {
  return (
    <div>
      <div>
        <h6 className="sidebar-filter-dropdowns margin-top-05">{label}</h6>
        <Select
          className="sidebar-filter"
          options={options.options}
          onChange={(agent) => setAgentName(agent.value)}
          value={options.options.filter(function (option) {
            return option.value === agentName;
          })}
        />
      </div>
    </div>
  );
}

export default SidebarAgentDropdown;
