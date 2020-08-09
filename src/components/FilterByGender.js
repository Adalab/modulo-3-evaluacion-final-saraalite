import React from "react";
import "./../stylesheets/App.css";

const FilterByGender = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "gender",
    });
  };
  return (
    <>
      <label htmlFor="gender" className="gender-label">
        <span className="options-text">Gender:</span>
      </label>
      <select
        name="gender"
        className="options-text options-gender"
        id="gender"
        onChange={handleChange}
      >
        <option value="All" className="options-text options-gender">
          All
        </option>
        <option value="Female" className="options-text options-gender">
          Female
        </option>
        <option value="Male" className="options-text options-gender">
          Male
        </option>
      </select>
    </>
  );
};
export default FilterByGender;
