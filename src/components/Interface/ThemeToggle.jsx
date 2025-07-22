import React from "react";
import "./ThemeToggle.scss";
import { useAppContext } from "../../App";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useAppContext();

  return (
    <div className="toggle">
      <label htmlFor="toggle" className="toggle__switch">
        <input
          type="checkbox"
          className="toggle__input"
          id="toggle"
          onChange={toggleTheme}
          checked={isDark}
          aria-label="Toggle dark mode"
        />
        <span className="slider slider__round"></span>
      </label>
    </div>
  );
};
export default ThemeToggle;
