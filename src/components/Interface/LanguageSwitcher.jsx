import React, { use, useState } from "react";
import "./LanguageSwitcher.scss";
import i18n from "../../utils/i18n";

const LanguageSwitcher = () => {
  const languages = [
    { id: "en", label: "EN" },
    { id: "ua", label: "UA" },
  ];
  const [language, setLanguage] = useState(i18n.language);
  console.log(languages);
  const handleOnChange = (e) => {
    /* setLanguage(e.target.value); */
    /* console.log(typeof e.target.value.toLowerCase()); */
    const newLanguage = e.target.value;
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };
  return (
    <div>
      <label htmlFor="language" className="visually-hidden">
        Select a language
      </label>

      <div className="lang">
        <select
          name="language"
          id="language"
          onChange={handleOnChange}
          value={language}
        >
          {/* <option value="EN">EN</option>
          <option value="UA">UA</option> */}

          {languages.map((lang) => {
            const { id, label } = lang;
            return (
              <option key={id} value={id}>
                {" "}
                {label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
export default LanguageSwitcher;
