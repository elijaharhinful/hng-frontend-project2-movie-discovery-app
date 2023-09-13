import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidenav.css";
import logo from "../components/assets/Logoblack.svg";
import home from "../components/assets/Home.svg";
import movies from "../components/assets/Movie Projector.svg";
import series from "../components/assets/TV Show.svg";
import calender from "../components/assets/Calendar.svg";
import logout from "../components/assets/Logout.svg";
import menu from "../components/assets/Menu.svg";

const Sidenav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Define a CSS class for the expanded header
  const sidenavClass = isMobileMenuOpen ? "sidenav expanded" : "sidenav";
  return (
    <section className={`sidenav ${sidenavClass}`}>
      <nav className="sidenav-navigation">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Logo" />
          </Link>
          <button className="menu-icon" onClick={toggleMobileMenu}>
            <img src={menu} alt="Menu" />
          </button>
        </div>
        <div className="desktop-menu">
          <div className="navbar">
            <ul>
              <Link className="navbar-link">
                <li>
                  <img src={home} alt="home"></img>
                  <span>Home</span>
                </li>
              </Link>
              <li className="active">
                <img src={movies} alt="movies"></img>
                <span>Movies</span>
              </li>
              <li>
                <img src={series} alt="series"></img>
                <span>TV Series</span>
              </li>
              <li>
                <img src={calender} alt="calender"></img>
                <span>Upcoming</span>
              </li>
              <li className="hide-logout">
                <img src={logout} alt="Logout"></img>
                <span>Logout</span>
              </li>
            </ul>
          </div>
          <div className="quiz">
            <div className="top">
              <p>
                <b>Play movies quizes and earn free tickets</b>
              </p>
              <br></br>
              <p>50k people are playing now</p>
            </div>
            <div className="bottom">
              <button>Start Playing</button>
            </div>
          </div>
          <Link to={"/"} className="link">
            <div className="logout">
              <img src={logout} alt="logout"></img>
              <span>Logout</span>
            </div>
          </Link>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="navbar">
            <ul>
              <Link className="navbar-link">
                <li>
                  <img src={home} alt="home"></img>
                  <span>Home</span>
                </li>
              </Link>
              <li className="active">
                <img src={movies} alt="movies"></img>
                <span>Movies</span>
              </li>
              <li>
                <img src={series} alt="series"></img>
                <span>TV Series</span>
              </li>
              <li>
                <img src={calender} alt="calender"></img>
                <span>Upcoming</span>
              </li>
              <li className="hide-logout">
                <img src={logout} alt="Logout"></img>
                <span>Logout</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Sidenav;
