import React, { useEffect, useState } from "react";
import "./LanguageSwitcher.scss";
import i18n from "../../utils/i18n";
import Select from "react-select";
import selectStyles from "./selectStyles";
import { LANGUAGES } from "../../utils/constants";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    const searchLng = localStorage.getItem("language") || i18n.language;
    setLanguage(LANGUAGES.find((lang) => lang.value === searchLng));
  }, []);

  const handleOnChange = (e) => {
    const newLanguage = e.value;
    i18n.changeLanguage(newLanguage);
    setLanguage(LANGUAGES.find((lang) => lang.value === newLanguage));
    localStorage.setItem("language", newLanguage);
  };
  return (
    <Select
      options={LANGUAGES}
      onChange={handleOnChange}
      value={language}
      className="language_switcher"
      styles={selectStyles}
    />
  );
};
export default LanguageSwitcher;
