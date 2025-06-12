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
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { isDark } = useAppContext();

  const [menuClosed, setMenuClosed] = useState(true);

  const { t } = useTranslation();

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
              {t("home")}
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink href="#" className="navbar__link">
              {t("about")}
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="#" className="navbar__link">
              {t("projects")}
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="#" className="navbar__link">
              {t("skills")}
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="#" className="navbar__link">
              {t("contact")}
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="#" className="navbar__link">
              {t("blog")}
            </NavLink>
          </li>

          <div className="navbar__item--switcher">
            <LangSwitcher />
          </div>
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
