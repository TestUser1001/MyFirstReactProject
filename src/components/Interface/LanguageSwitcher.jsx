import React from "react";
import "./LanguageSwitcher.scss";

const LanguageSwitcher = () => {
  return (
    <div>
      <label htmlFor="language" className="visually-hidden">
        Select a language
      </label>

      <div className="navbar__lang">
        <select name="language" id="language">
          <option value="EN">EN</option>
          <option value="UA">UA</option>
        </select>
      </div>
    </div>
  );
};
export default LanguageSwitcher;
