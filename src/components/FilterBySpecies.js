import React from "react";
import "./../stylesheets/App.css";

const FilterBySpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "species",
    });
  };
  return (
    <label>
      <span className="options-text">All</span>
      <input
        type="checkbox"
        name="species"
        value="All"
        checked={props.filterBySpecies === "All" ? true : false}
        onChange={handleChange}
      />
      <span className="options-text">Alien</span>
      <input
        type="checkbox"
        name="species"
        value="Alien"
        checked={props.filterBySpecies === "Alien" ? true : false}
        onChange={handleChange}
      />
      <span className="options-text">Human</span>

      <input
        type="checkbox"
        name="species"
        value="Human"
        checked={props.filterBySpecies === "Human" ? true : false}
        onChange={handleChange}
      />
    </label>
  );
};

export default FilterBySpecies;
