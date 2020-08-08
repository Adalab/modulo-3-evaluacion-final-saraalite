import React from "react";
import { Link } from "react-router-dom";
import "./../stylesheets/character.css";
function Character(props) {
  return (
    <>
      <li>
        <Link
          to={{
            pathname: "/character/" + props.character.id,
          }}
        >
          <div className="character-card" key={props.character.id}>
            <img
              className="character-main-image"
              src={props.character.image}
              alt={props.character.name}
            ></img>
            <p className="character-name"> Name : {props.character.name}</p>
            <p className="character-species">
              Species: {props.character.species}
            </p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Character;
