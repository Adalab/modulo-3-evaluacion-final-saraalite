import React, { useState, useEffect } from "react";
import { HashRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "./stylesheets/App.css";
import getDataFromApi from "./services/getDataFromApi";
import FilterList from "./components/FilterList";
import CharacterDetail from "./components/CharacterDetail";
import Header from "./components/Header";
import notfoundimage from "./images/notfound.png";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterByName, setFilterByName] = useState("");
  const [filterByGender, setFilterByGender] = useState("All");
  const [filterBySpecies, setFilterBySpecies] = useState("All");

  //event handlers
  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterByName(data.value);
    } else if (data.key === "gender") {
      setFilterByGender(data.value);
    } else if (data.key === "species") {
      setFilterBySpecies(data.value);
    }
  };

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  const getCharacterDetail = (props) => {
    const id = parseInt(props.match.params.id);
    const characterToDetails = characters.filter(
      (character) => character.id === id
    );
    if (characterToDetails.length === 1) {
      return <CharacterDetail character={characterToDetails[0]} />;
    } else {
      return (
        <div className="not-found">
          <p className="not-found-text">Character not found</p>
          <img
            className="not-found-image"
            src={notfoundimage}
            alt="Rick with stupid face"
          />
        </div>
      );
    }
  };

  const filteredList = characters
    .filter(
      (character) =>
        filterByName === "" ||
        character.name.match(new RegExp(filterByName, "i"))
    )
    .filter((character) => {
      if (filterByGender === "All") {
        return true;
      } else {
        return character.gender === filterByGender;
      }
    })
    .filter((character) => {
      if (filterBySpecies === "All") {
        return true;
      } else {
        return character.species === filterBySpecies;
      }
    });

  return (
    <div className="App">
      <Header />
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <FilterList
              characters={filteredList}
              filterByName={filterByName}
              filterByGender={filterByGender}
              filterBySpecies={filterBySpecies}
              setFilterByName={setFilterByName}
              handleFilter={handleFilter}
            />
          </Route>
          <Route path="/character/:id" render={getCharacterDetail} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
