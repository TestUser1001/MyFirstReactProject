import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  /*  lazy,
  Suspense, */
} from "react";
import i18n from "./utils/i18n";
import NavbarHero from "./components/NavbarHero/NavbarHero";
import About from "./components/About/About";
import "./App.scss";

import { useTranslation } from "react-i18next";
import Preloader from "./components/Interface/Preloader";
/* import "./components/Interface/Preloader.scss"; */
import Projects from "./components/Projects/Projects";
import { Routes, Route, Router } from "react-router-dom";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

/* const Projects = lazy(() => import("./components/Projects/Projects")); */

export const themeContext = createContext();
export const useAppContext = () => useContext(themeContext);

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [i18nReady, setI18nReady] = useState(false);
  const { t } = useTranslation();

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
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <NavbarHero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </themeContext.Provider>
  );
};
export default App;
