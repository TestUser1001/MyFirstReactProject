import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import "../../components/layout.scss";
import LangSwitcher from "../Interface/LanguageSwitcher";

import ThemeToggle from "../Interface/ThemeToggle";
import { useAppContext } from "../../App";

import logoLight from "../../assets/logo_light.svg";
import logoDark from "../../assets/logo_dark.svg";
import MenuMobile from "../Interface/MenuMobile";

const Navbar = () => {
  const { isDark } = useAppContext();

  const [menuClosed, setMenuClosed] = useState(true);

  return (
    <nav className="container navbar">
      <NavLink to="/">
        <img
          src={isDark ? logoDark : logoLight}
          alt=""
          className="navbar__logo"
        />
      </NavLink>

      <div className="navbar__right">
        <ul className={`navbar__links ${!menuClosed ? "visible" : ""} `}>
          <li className="navbar__item">
            <NavLink to="#" className="navbar__link">
              Home
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink href="#" className="navbar__link">
              About me
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="#" className="navbar__link">
              projects
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="#" className="navbar__link">
              skills
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="#" className="navbar__link">
              contact
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="#" className="navbar__link">
              blog
            </NavLink>
          </li>
        </ul>

        <div className="navbar__switchers">
          {/*  <LangSwitcher /> */}
          <ThemeToggle />
        </div>
        <MenuMobile menuClosed={menuClosed} setMenuClosed={setMenuClosed} />
      </div>
    </nav>
  );
};
export default Navbar;
