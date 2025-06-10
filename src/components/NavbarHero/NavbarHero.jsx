import React from "react";
import "./NavbarHero.scss";

import Navbar from "./Navbar";
import Hero from "./Hero";
import { useAppContext } from "../../App";
import lightBg from "../../assets/HeroBackground.svg";
import darkBg from "../../assets/HeroBackgroundDarkMode.svg";

const NavbarHero = () => {
  const { isDark } = useAppContext();
  const img = isDark ? darkBg : lightBg;
  return (
    <div className="NavbarHero" style={{ backgroundImage: `url(${img})` }}>
      <Navbar />
      {/* <Hero /> */}
    </div>
  );
};
export default NavbarHero;
