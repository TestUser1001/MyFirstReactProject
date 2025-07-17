import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  /*  lazy,
  Suspense, */
} from "react";
import i18n from "./utils/i18n";
import { BrowserRouter } from "react-router-dom";
/* import NavbarHero from "./components/NavbarHero/NavbarHero"; */
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
import Navbar from "./components/NavbarHero/Navbar";
import Hero from "./components/NavbarHero/Hero";
import "./components/NavbarHero/NavbarHero.scss";
import lightBgHero from "./assets/HeroBackground.svg";
import darkBgHero from "./assets/HeroBackgroundDarkMode.svg";

/* const Projects = lazy(() => import("./components/Projects/Projects")); */

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
          {/* <NavbarHero /> */}
          <div
            className="NavbarHero"
            style={{ backgroundImage: `url(${img})` }}
          >
            <Navbar />
            {/*   <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes> */}

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
