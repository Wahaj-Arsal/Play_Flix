/** @format */

import "./Header.scss";
import logo from "../../assets/Logo/logo.svg";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header__container">
      <nav className="navbar">
        <div className="navbar__content">
          <Link to="/" className="navbar__brand">
            <img className="navbar__logo" src={logo} alt="brainflix logo" />
          </Link>
          <div className="navbar__items">
            <input
              type="text"
              className="navbar__search"
              placeholder="Search"
            />
            <div className="navbar__icon"></div>
            <Link to="/upload" className="navbar__link">
              <Button className="navbar__button button" label="upload" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
