import React from "react";
import "./NavbarHero.scss";

import Navbar from "./Navbar";
import Hero from "./Hero";
import { useAppContext } from "../../App";
import lightBg from "../../assets/HeroBackground.svg";
import darkBg from "../../assets/HeroBackgroundDarkMode.svg";
import { motion } from "motion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import About from "../About/About"; */

/* import Projects from "../Projects/Projects"; */

/* const NavbarHero = () => {
  const { isDark } = useAppContext();
  const img = isDark ? darkBg : lightBg;
  return (
    <motion.div
      animate={{ x: 0, scale: 1 }}
      initial={{ x: -100, scale: 1.5 }}
      transition={{ duration: 0.5 }}
      className="NavbarHero"
      style={{ backgroundImage: `url(${img})` }}
    >
      <Navbar /> */

{
  /*  <Routes>
        <Route path="/" element={<NavbarHero />} />
        <Route path="/about" element={<About />} />
      </Routes> */
}

/*    <Hero />
    </motion.div>
  );
};
export default NavbarHero; */
