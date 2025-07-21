import React, { createContext, useState, useContext, useEffect } from "react";
import i18n from "./utils/i18n";
import { BrowserRouter } from "react-router-dom";

import About from "./components/About/About";
import "./App.scss";

import { useTranslation } from "react-i18next";
import Preloader from "./components/Interface/Preloader";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/NavbarHero/Navbar";
import Hero from "./components/NavbarHero/Hero";
import "./components/NavbarHero/NavbarHero.scss";
import lightBgHero from "./assets/HeroBackground.svg";
import darkBgHero from "./assets/HeroBackgroundDarkMode.svg";

export const themeContext = createContext();
export const useAppContext = () => useContext(themeContext);

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [i18nReady, setI18nReady] = useState(false);
  const { t } = useTranslation();
  const img = isDark ? darkBgHero : lightBgHero;

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newValue = !prev;
      localStorage.setItem("isDark", JSON.stringify(newValue));
      return newValue;
    });
  };

  useEffect(() => {
    const stored = localStorage.getItem("isDark");

    if (stored) setIsDark(stored === "true");

    const storedLang = localStorage.getItem("language") || i18n.language;
    i18n.changeLanguage(storedLang).then(() => {
      setI18nReady(true);
    });
  }, [i18n]);

  if (!i18nReady)
    return (
      <div className="App__loading">
        <Preloader />
      </div>
    );

  return (
    <themeContext.Provider value={{ isDark, toggleTheme }}>
      <BrowserRouter>
        <div className="App" data-theme={isDark ? "dark" : "light"}>
          <div
            className="NavbarHero"
            style={{ backgroundImage: `url(${img})` }}
          >
            <Navbar />
            <Hero />
          </div>
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </BrowserRouter>
    </themeContext.Provider>
  );
};
export default App;
