import React from "react";
import CharacterList from "./CharacterList";
import FilterByName from "./FilterByName";
import errorimage from "../images/error.png";
import "./../stylesheets/App.css";
import FilterByGender from "./FilterByGender";
import FilterBySpecies from "./FilterBySpecies";

function FilterList(props) {
  const error = (
    <div className="error-general">
      <p className="error-text">
        There is no character called {props.filterByName}
      </p>
      <img
        className="error-general-image"
        src={errorimage}
        alt="Rick and Morty showing middle finger"
      />
    </div>
  );

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FilterByName handleFilter={props.handleFilter} />
        <FilterBySpecies
          handleFilter={props.handleFilter}
          filterBySpecies={props.filterBySpecies}
        />
        <FilterByGender handleFilter={props.handleFilter} />
      </form>
      {props.characters.length > 0 ? (
        <CharacterList characters={props.characters} />
      ) : (
        error
      )}
    </>
  );
}

export default FilterList;
