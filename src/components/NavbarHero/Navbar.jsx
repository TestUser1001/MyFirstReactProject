import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./navbar.scss";
import "../../components/layout.scss";
import LangSwitcher from "../Interface/LanguageSwitcher";

import ThemeToggle from "../Interface/ThemeToggle";
import { useAppContext } from "../../App";

import logoLight from "../../assets/logo_light.svg";
import logoDark from "../../assets/logo_dark.svg";
import MenuMobile from "../Interface/MenuMobile";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const Navbar = () => {
  const { isDark } = useAppContext();

  const [menuClosed, setMenuClosed] = useState(true);

  const { t } = useTranslation();

  return (
    <nav
      className="container navbar"
      role="navigation"
      aria-label="Main navigation"
    >
      <Link to="/">
        <img
          src={isDark ? logoDark : logoLight}
          alt="Logo"
          className="navbar__logo"
        />
      </Link>

      <div className="navbar__right">
        <ul className={clsx("navbar__links", { visible: !menuClosed })}>
          <li className="navbar__item">
            <Link to="/" className="navbar__link">
              {t("home")}
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="#about" className="navbar__link">
              {t("about")}
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="#projects" className="navbar__link">
              {t("projects")}
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="#skills" className="navbar__link">
              {t("skills")}
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="#contact" className="navbar__link">
              {t("contact")}
            </Link>
          </li>

          <li className="navbar__item--switcher">
            <LangSwitcher />
          </li>
        </ul>

        <div className="navbar__switchers">
          <div className="navbar__lang">
            <LangSwitcher />
          </div>
          <ThemeToggle />
        </div>
        <MenuMobile menuClosed={menuClosed} setMenuClosed={setMenuClosed} />
      </div>
    </nav>
  );
};
export default Navbar;
