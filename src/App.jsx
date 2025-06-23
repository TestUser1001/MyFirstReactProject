import React, { createContext, useState, useContext, useEffect } from "react";
import i18n from "./utils/i18n";
import NavbarHero from "./components/NavbarHero/NavbarHero";
import About from "./components/About/About";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Preloader from "./components/Interface/Preloader";

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
    <BrowserRouter>
      <themeContext.Provider value={{ isDark, toggleTheme }}>
        <div className="App" data-theme={isDark ? "dark" : "light"}>
          <NavbarHero />
        </div>
      </themeContext.Provider>
    </BrowserRouter>
  );
};
export default App;
