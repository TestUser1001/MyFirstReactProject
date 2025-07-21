const selectStyles = {
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

export default selectStyles;
