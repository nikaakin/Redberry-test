import InputField from "../components/forms/InputField";

export const displayInputs = (inputData, register, setFormState) => {
  return inputData.map(
    ({
      dirtyField,
      error,
      hint,
      id,
      label,
      name,
      pattern,
      placeholder,
      type,
      required,
    }) => {
      return (
        <InputField
          dirtyField={dirtyField}
          error={error}
          hint={hint}
          id={id}
          label={label}
          name={name}
          pattern={pattern}
          placeholder={placeholder}
          type={type}
          required={required}
          register={register}
          key={name}
          setFormState={setFormState}
        />
      );
    }
  );
};
