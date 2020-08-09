import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import alien from "../images/alien.png";
import human from "../images/profesor.png";
import alive from "../images/beat.png";
import dead from "../images/skull.png";
import unknown from "../images/unknown.png";
import "./../stylesheets/characterdetail.css";

function CharacterDetail(props) {
  const changeSpecies = () => {
    if (props.character.species === "Alien") {
      return alien;
    } else if (props.character.species === "Human") {
      return human;
    }
  };

  const changeStatus = () => {
    if (props.character.status === "Alive") {
      return alive;
    } else if (props.character.species === "Dead") {
      return dead;
    } else {
      return unknown;
    }
  };

  return (
    <main className="character-detail-container">
      <div className="character-detail-card">
        <img
          className="character-image"
          src={props.character.image}
          alt={props.character.name}
        ></img>
        <p className="detail-name-container"> Name : {props.character.name}</p>
        <p className="detail-gender-container">
          Gender: {props.character.gender}
        </p>
        <p className="detail-origin-container">
          Origin: {props.character.origin}
        </p>
        <p className="detail-episodes-container">
          Episodes: {props.character.episode}
        </p>
        <section className="icons-container">
          <div className="detail-species-container">
            Species:
            <img
              className="detail-icon-species"
              src={changeSpecies()}
              alt={props.character.species}
            ></img>
          </div>
          <div className="detail-status-container">
            Status:
            <img
              className="detail-icon-status"
              src={changeStatus()}
              alt={props.character.status}
            ></img>
          </div>
        </section>
      </div>
      <Link to="/">
        <div className="back-home-container">
          <div>
            <span className="back-home">Back to home page</span>
          </div>
        </div>
      </Link>
    </main>
  );
}
CharacterDetail.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string,
  origin: PropTypes.string,
  episode: PropTypes.number,
};
export default CharacterDetail;
