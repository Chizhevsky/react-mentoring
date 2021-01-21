import React from "react";
import "./Header.css";
import LogoIcon from "./logo.svg";
import SettingsIcon from "./settings.svg";
import { Link } from "react-router-dom";

function Header({isLoggedIn}) {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link className="header__logo" to="/">
          <img className="header__logo-img" src={LogoIcon} alt="netflix" />
        </Link>
        <nav className="header__nav">
          <Link className="header__link" to="/settings">
            <img
              className="header__settings-img"
              src={SettingsIcon}
              alt="settings"
            />
          </Link>
          {isLoggedIn !== 'undefined' && <Link className="header__link" to={isLoggedIn ? "/logout" : "/login"}>
            {isLoggedIn ? "Log out" : "Log In"}
          </Link>}
        </nav>
      </div>
    </header>
  );
}

export default Header;
