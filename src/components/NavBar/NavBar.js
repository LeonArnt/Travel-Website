import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../Button/Button";
import "./NavBar.scss";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
          TRLV <i className="fab fa-typo3"></i>
        </Link>
        <div className="navbar__burger" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="navbar__item">
            <NavLink
              to={"/"}
              className="navbar__links navbar--links"
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to={"/services"}
              className="navbar__links navbar--links"
              onClick={closeMobileMenu}
            >
              Services
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to={"/locations"}
              className="navbar__links navbar--links"
              onClick={closeMobileMenu}
            >
              Locations
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to={"/sign-up"}
              className="navbar__links-mobile navbar--link-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
      </div>
    </nav>
  );
}
