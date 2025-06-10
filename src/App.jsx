import React, { createContext, useState, useContext, useEffect } from "react";
import NavbarHero from "./components/NavbarHero/NavbarHero";
import About from "./components/About/About";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

export const themeContext = createContext();
export const useAppContext = () => useContext(themeContext);

const App = () => {
  const [isDark, setIsDark] = useState(false);

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
  }, []);

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
