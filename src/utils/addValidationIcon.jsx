import InvalidIcon from "../assets/wrong.png";
import ValidIcon from "../assets/correct.png";

export const addValidationIcon = (dirtyField, error) => {
  if (dirtyField === undefined) return null;

  if (error === undefined)
    return <img src={ValidIcon} alt="Valid" className="valid-input-icon" />;

  return <img src={InvalidIcon} alt="Invalid" className="invalid-input-icon" />;
};

export const addValidationIconOutside = (dirtyField, error) => {
  if (dirtyField === undefined) return null;

  if (error === undefined)
    return <img src={ValidIcon} alt="Valid" className="invalid-input-icon" />;

  return <img src={InvalidIcon} alt="Invalid" className="invalid-input-icon" />;
};
