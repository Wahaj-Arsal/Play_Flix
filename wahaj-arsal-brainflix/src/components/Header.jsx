/** @format */

import "./header.scss";
import logo from "../assets/Logo/BrainFlix-logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__content">
          <img className="navbar__logo" src={logo} alt="brainflix logo" />
          <div className="navbar__items">
            <input
              type="text"
              className="navbar__search"
              placeholder="Search"
            />
            <div className="navbar__icon"></div>
            <button className="navbar__button">
              <img className="navbar__button-img"></img>
              <label className="navbar__button-text">upload</label>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
