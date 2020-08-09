import React from "react";
import CharacterList from "./CharacterList";
import FilterByName from "./FilterByName";
/* import FilterBySpecies from "./FilterBySpecies"; */
import errorimage from "../images/error.png";
import "./../stylesheets/App.css";
import FilterByGender from "./FilterByGender";

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
      <form>
        <FilterByName handleFilter={props.handleFilter} />
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
