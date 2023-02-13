import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";

import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";

import { displayInputs } from "../../utils/displayInputData";
import {
  firstPart,
  secondsPart,
  requiredFields,
} from "../../data/privateInfoInputs";
import {
  addValidationIcon,
  addValidationIconOutside,
} from "../../utils/addValidationIcon";
import { addValidationClass } from "../../utils/addValidationClass";
import { useOutletContext } from "react-router-dom";

function PrivateInfo() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isNextPageClicked, setIsNextPageClicked] = useState(false);
  const setFormState = useOutletContext();

  const {
    register,
    clearErrors,
    setError,
    formState: { errors, dirtyFields },
    trigger,
    setValue,
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    setTimeout(() => setFormState((s) => !s), 0);

    setPhoneNumber(localStorage.getItem("phone_number") || "");
  }, []);

  useEffect(() => {
    if (isNextPageClicked) {
      onPhoneNumberChange({
        target: { value: localStorage.getItem("phone_number") },
      });

      validateImage();
    }
  }, [isNextPageClicked]);

  const validateImage = () => {
    if (localStorage.getItem("image")) {
      dirtyFields.image = true;
      clearErrors("image");
      return;
    }

    setError("image", { type: "required", message: "" });
    dirtyFields.image = true;
  };

  const onPhoneNumberChange = (e) => {
    const numberParts = e.target.value?.split(" ");
    dirtyFields.phone_number = true;
    setPhoneNumber(e.target.value || "");
    localStorage.setItem("phone_number", e.target.value);
    setFormState((s) => !s);

    if (!numberParts?.[0].startsWith("+995"))
      return (errors.phone_number = true);

    if (!numberParts?.[1].startsWith("5")) return (errors.phone_number = true);

    if (e.target.value.length === 17) {
      return clearErrors("phone_number");
    }

    return (errors.phone_number = true);
  };

  return (
    <div className="form__body">
      <FormHeader header="პირადი ინფო" indexOfPage={1} />
      <form className="form__form">
        <div className="form__form-double-inputs">
          {displayInputs(
            firstPart(dirtyFields, errors),
            register,
            setFormState
          )}
        </div>
        <div className="form__form--photo">
          <label htmlFor="photo" className="form__form-label--photo">
            პირადი ფოტოს ატვირთვა
          </label>
          <div className="position-relative form__form-input-wrapper flex-grow-0">
            <label htmlFor="photo" className=" btn btn--blue">
              ატვირთვა
            </label>
            {addValidationIconOutside(dirtyFields.image, errors.image)}
          </div>
          <input
            {...register("image", {
              value: localStorage.getItem("image"),
              onChange: (e) => {
                const img = e.target.files[0];
                const reader = new FileReader();

                reader.onload = (ev) => {
                  localStorage.setItem("image", ev.target.result);
                  validateImage();
                  setFormState((s) => !s);
                };

                reader.readAsDataURL(img);
              },
            })}
            type="file"
            className="display-none"
            placeholder="photo"
            id="photo"
          />
        </div>

        <div className="form__form-input-wrapper">
          <label htmlFor="generalInfo" className="form__form-label">
            ჩემ შესახებ (არასავალდებულო)
          </label>
          <textarea
            {...register("about_me", {
              value: localStorage.getItem("about_me"),
              onChange: (e) => {
                localStorage.setItem("about_me", e.target.value);
                setFormState((s) => !s);
              },
            })}
            className="form__form-input form__form-input--textarea"
            placeholder="ზოგადი ინფო შენ შესახებ"
            id="generalInfo"
          />
        </div>

        {displayInputs(
          secondsPart(dirtyFields, errors),
          register,
          setFormState
        )}

        <div className="form__form-input-wrapper ">
          <label htmlFor="number" className="form__form-label ">
            მობილურის ნომერი
          </label>
          <div className="position-relative form__form-input-wrapper flex-grow-0">
            <ReactInputMask
              mask="+999 999 99 99 99"
              className={`form__form-input ${addValidationClass(
                dirtyFields.phone_number,
                errors.phone_number
              )}
              }`}
              maskChar={null}
              placeholder="+995 551 12 34 56"
              onChange={onPhoneNumberChange}
              value={phoneNumber}
              onFocus={onPhoneNumberChange}
            />
            {addValidationIcon(dirtyFields.phone_number, errors.phone_number)}
          </div>
          <span className="form__form-hint">
            უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
          </span>
        </div>
      </form>
      <FormFooter
        next="experience"
        errors={errors}
        dirtyFields={dirtyFields}
        requiredFields={requiredFields}
        trigger={trigger}
        setValue={setValue}
        setIsNextPageClicked={setIsNextPageClicked}
      />
    </div>
  );
}

export default PrivateInfo;
