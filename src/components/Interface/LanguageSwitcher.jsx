import React, { useEffect, useState } from "react";
import "./LanguageSwitcher.scss";
import i18n from "../../utils/i18n";
import Select from "react-select";

const LanguageSwitcher = () => {
  const languages = [
    { value: "en", label: "EN" },
    { value: "ua", label: "UA" },
  ];
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    const searchLng = localStorage.getItem("language") || i18n.language;
    setLanguage(languages.find((lang) => lang.value === searchLng));
  }, []);

  const newStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "var(--background-color)",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: "var(--text-primary-color)",

        ":active": {
          backgroundColor: "var(--active-color)",
        },
        backgroundColor: isSelected
          ? "var(--outlineColor)"
          : isFocused
          ? "var(--outline-accent)"
          : "var(--secondary-container)",
      };
    },

    placeholder: (styles) => ({
      ...styles,
      color: "var(--text-primary-color)",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "var(--text-primary-color)",
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: "var(--background-color)",
      border: "var(--lang-switcher-border)",
    }),
  };

  const handleOnChange = (e) => {
    const newLanguage = e.value;
    i18n.changeLanguage(newLanguage);
    setLanguage(languages.find((lang) => lang.value === newLanguage));
    localStorage.setItem("language", newLanguage);
  };
  return (
    <Select
      options={languages}
      onChange={handleOnChange}
      value={language}
      className="lang"
      placeholder="Select a language"
      styles={newStyles}
    />
  );
};
export default LanguageSwitcher;
