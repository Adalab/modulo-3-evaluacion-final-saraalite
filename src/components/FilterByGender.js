import React from "react";
const FilterByGender = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "gender",
    });
  };
  return (
    <>
      <label htmlFor="gender">Gender:</label>
      <select name="gender" id="gender" onChange={handleChange}>
        <option value="All">All</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
      </select>
    </>
  );
};
export default FilterByGender;
