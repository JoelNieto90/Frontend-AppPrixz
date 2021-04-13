import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/NavBar.scss";
import Logo from "../assets/logoIcon.png";

const NavBar = () => {
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("id");
    history.push("/");
  };
  return (
    <nav className="NavBar">
      <Link to="/home">
        <img className="NavBar__img" src={Logo} alt="imageLogo" />
      </Link>
      <div className="NavBar__buttons">
        <button
          type="submit"
          onClick={handleLogout}
          className="NavBar__buttons--logout"
        >
          Logout
        </button>
        <Link to="/dashboard" className="NavBar__buttons--box">
          <img
            className="NavBar__buttons--img"
            src="https://prixz.com/wp-content/themes/prixz/img/settings.svg"
            altt="ImageProfile"
          />
          <p className="NavBar__buttons--cuenta">Mi cuenta</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
