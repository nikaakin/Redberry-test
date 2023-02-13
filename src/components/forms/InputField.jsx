import React from "react";
import { addValidationIcon } from "../../utils/addValidationIcon";
import { addValidationClass } from "../../utils/addValidationClass";

function InputField({
  label,
  name,
  pattern,
  required = false,
  type,
  dirtyField,
  error,
  placeholder,
  id,
  hint,
  register,
  setFormState = false,
}) {
  return (
    <div className="form__form-input-wrapper">
      <label htmlFor={id} className="form__form-label">
        {label}
      </label>
      <div className="position-relative form__form-input-wrapper flex-grow-0">
        <input
          {...register(name, {
            required,
            pattern,
            value: localStorage.getItem(name),
            onChange: (e) => {
              localStorage.setItem(name, e.target.value);
              setFormState && setFormState((s) => !s);
            },
          })}
          type={type}
          className={`form__form-input ${addValidationClass(
            dirtyField,
            error
          )}`}
          placeholder={placeholder}
          id={id}
        />
        {addValidationIcon(dirtyField, error)}
      </div>
      <span className="form__form-hint">{hint}</span>
    </div>
  );
}

export default InputField;
