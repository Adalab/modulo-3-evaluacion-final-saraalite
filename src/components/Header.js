import React from "react";
import logo from "../images/header-logo.png";
import { Link } from "react-router-dom";
import "./../stylesheets/header.css";

const Header = () => {
  return (
    <section className="header">
      <Link to="/">
        <img className="header-logo" src={logo} alt="Rick and Morty Logo" />
      </Link>
    </section>
  );
};

export default Header;
