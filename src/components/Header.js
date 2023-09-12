import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../components/assets/Logo.svg";
import imdb from "../components/assets/imdb.svg";
import tomato from "../components/assets/tomato.svg";
import menu from "../components/assets/Menu.svg";
import search from "../components/assets/Search.svg";
import play from "../components/assets/Play.svg";

let url = ""

const Header = () => {
  // const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <header className="header">
      <div className="overlay"></div>
      <nav className="navigation">
        <Link to="/">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="What do you want to watch?" />
          <button type="submit" className="search-button">
            <img src={search} alt="Search Icon"></img>
          </button>
        </div>
        <div className="sign-in">
          <div className="text">Sign in</div>
          <div className="icon">
            <img src={menu} alt="Logo"></img>
          </div>
        </div>
      </nav>
      <div className="hero">
        <div className="head">
          <h2>John Wick 3 :</h2>
          <h2>Parabellum</h2>
        </div>
        <div className="rating">
          <div className="imdb">
            <div className="icon">
              <img src={imdb} alt="IMdb"></img>
            </div>
            <div className="text">86.0/100</div>
          </div>
          <div className="tomato">
            <div className="icon">
              <img src={tomato} alt="tomato"></img>
            </div>
            <div className="text">97%</div>
          </div>
        </div>

        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. mollitia,
            molestiae quas vel sint commodi repudiandae voluptatum laborum
            numquam blanditiis harum quisquam fugiat iusto fuga praesentium
            optio, eaque.
          </p>
        </div>
          <a className="trailer-btn" href={url}>
              <img src={play} alt="youtube Icon"></img>
            <span>WATCH TRAILER</span>
          </a>
      </div>
    </header>
  );
};

export default Header;
