import React from "react";
import { Link } from "react-router-dom";
import "./Sidenav.css";
import logo from "../components/assets/Logoblack.svg";
import home from "../components/assets/Home.svg";
import movies from "../components/assets/Movie Projector.svg";
import series from "../components/assets/TV Show.svg";
import calender from "../components/assets/Calendar.svg";
import logout from "../components/assets/Logout.svg";

const Sidenav = () => {
  // const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <section className="sidenav">
      <nav className="sidenav-navigation">
        <Link to="/" className="logo-link">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </Link>
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
              <img src={logout} alt="Logout" ></img>
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
      </nav>
    </section>
  );
};

export default Sidenav;
