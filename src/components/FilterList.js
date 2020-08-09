import React from "react";
import CharacterList from "./CharacterList";
import errorimage from "../images/error.png";
import "./../stylesheets/App.css";

function FilterList(props) {
  const handleChange = (ev) => {
    props.setFilterByName(ev.target.value);
  };

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

  const filteredList = props.characters.filter(
    (character) =>
      props.filterByName === "" ||
      character.name.match(new RegExp(props.filterByName, "i"))
  );

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="input"
          placeholder="Search a character"
          type="text"
          value={props.filterByName}
          onChange={handleChange}
        />
      </form>
      {filteredList.length > 0 ? (
        <CharacterList characters={filteredList} />
      ) : (
        error
      )}
    </>
  );
}

export default FilterList;
