import React from "react";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <input
      className="input"
      placeholder="Search a character"
      type="text"
      value={props.filterByName}
      onChange={handleChange}
    />
  );
};

export default FilterByName;
