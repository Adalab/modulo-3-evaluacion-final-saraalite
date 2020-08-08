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

  useEffect(() => {
    // Guardamos lo que nos devuelve el api en el estado characters
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  const getCharacterDetail = (props) => {
    // Este el el ide que viene en character/id
    const id = parseInt(props.match.params.id);
    // Filtramos para quedarnos solo con el id que queremos
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

  return (
    <div className="App">
      <Header />
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <FilterList
              characters={characters}
              filterByName={filterByName}
              setFilterByName={setFilterByName}
            />
          </Route>
          <Route path="/character/:id" render={getCharacterDetail} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
