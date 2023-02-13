export const addValidationClass = (dirtyField, error) => {
  if (dirtyField === undefined) return "";

  if (error === undefined) return "valid-input";

  return "invalid-input";
};
