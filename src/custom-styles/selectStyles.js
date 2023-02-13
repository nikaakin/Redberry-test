const borderCol = (val) => {
  if (!val) {
    return "1px solid var(--color-secondary-light)";
  }

  return "1px solid var(--color-green)";
};

export const selectStyles = (isCorrect, isClicked) => ({
  control: (baseStyles) => ({
    ...baseStyles,
    padding: "7.5px 16px",
    color: "red",
    "&:hover": "none",
  }),
  placeholder: (defaultStyles) => ({
    ...defaultStyles,
    color: "var(--color-black-2)",
  }),
  dropdownIndicator: (defaultStyles) => ({
    ...defaultStyles,
    color: "var(--color-black-2)",
    ":hover": "none",
  }),
  option: (defaultStyles) => ({
    ...defaultStyles,
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "21px",
    ":hover": {
      backgroundColor: "var(--color-tertiary-light)",
    },
  }),
});

export const removeSeparator = { IndicatorSeparator: () => null };
