import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";

import { inputData, requiredFields } from "../../data/experienceInputs";
import { displayInputs } from "../../utils/displayInputData";
import {
  addValidationIcon,
  addValidationIconOutside,
} from "../../utils/addValidationIcon";
import { addValidationClass } from "../../utils/addValidationClass";
import { onAddMoreClick } from "../../utils/addMore";
import { useOutletContext } from "react-router-dom";

function Experience() {
  const [index, setIndex] = useState(0);
  const [addMoreChange, setAddMoreChange] = useState(0);
  const setFormState = useOutletContext();

  const {
    setValue,
    register,
    trigger,
    formState: { errors, dirtyFields },
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    setTimeout(() => setFormState((s) => !s), 0);

    localStorage.getItem("indexExp") || localStorage.setItem("indexExp", 0);
    let storageIndex = localStorage.getItem("indexExp");

    if (
      requiredFields.find(
        (fieldName) =>
          localStorage.getItem(`${fieldName}${storageIndex}`) !== null &&
          localStorage.getItem(`${fieldName}${storageIndex}`) !== ""
      )
    ) {
      setIndex(storageIndex);
    } else {
      if (storageIndex === "0") {
        return;
      }

      setIndex(+storageIndex - 1);
    }
  }, []);

  const displayFormInputs = () => {
    let experience = [];

    for (let i = 0; i <= index; i++) {
      experience.push(
        <div key={`expereince-${i}`} className="margin-bottom-children">
          {displayInputs(
            inputData(dirtyFields, errors, i),
            register,
            setFormState
          )}
          <div className="form__form-double-inputs margin-top-small">
            <div className="form__form-input-wrapper">
              <label htmlFor={`dateOfStart${i}`} className="form__form-label">
                დაწყების თარიღი
              </label>
              <div className="position-relative form__form-input-wrapper flex-grow-0">
                <input
                  {...register(`start_date${i}`, {
                    required: true,
                    value: localStorage.getItem(`start_date${i}`),
                    onChange: (e) => {
                      localStorage.setItem(`start_date${i}`, e.target.value);
                      setFormState((s) => !s);
                    },
                  })}
                  type="date"
                  className={`form__form-input ${addValidationClass(
                    dirtyFields[`start_date${i}`],
                    errors[`start_date${i}`]
                  )} `}
                  id={`dateOfStart${i}`}
                />
                {addValidationIconOutside(
                  dirtyFields[`start_date${i}`],
                  errors[`start_date${i}`]
                )}
              </div>
            </div>
            <div className="form__form-input-wrapper">
              <label htmlFor={`dateOfFinish${i}`} className="form__form-label">
                დამთავრების თარიღი
              </label>
              <div className="position-relative form__form-input-wrapper flex-grow-0">
                <input
                  {...register(`due_date${i}`, {
                    required: true,
                    value: localStorage.getItem(`due_date${i}`),
                    onChange: (e) => {
                      localStorage.setItem(`due_date${i}`, e.target.value);
                      setFormState((s) => !s);
                    },
                  })}
                  type="date"
                  className={`form__form-input ${addValidationClass(
                    dirtyFields[`due_date${i}`],
                    errors[`due_date${i}`]
                  )} `}
                  id={`dateOfFinish${i}`}
                />
                {addValidationIconOutside(
                  dirtyFields[`due_date${i}`],
                  errors[`due_date${i}`]
                )}
              </div>
            </div>
          </div>
          <div className="form__form-input-wrapper margin-top-small">
            <label htmlFor={`description${i}`} className="form__form-label">
              აღწერა
            </label>
            <div className="position-relative form__form-input-wrapper flex-grow-0">
              <textarea
                {...register(`description${i}`, {
                  required: true,
                  value: localStorage.getItem(`description${i}`),
                  onChange: (e) => {
                    localStorage.setItem(`description${i}`, e.target.value);
                    setFormState((s) => !s);
                  },
                })}
                className={`form__form-input form__form-input--textarea ${addValidationClass(
                  dirtyFields[`description${i}`],
                  errors[`description${i}`]
                )} `}
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                id={`description${i}`}
              />
              {addValidationIcon(
                dirtyFields[`description${i}`],
                errors[`description${i}`]
              )}
            </div>
          </div>
          <hr
            color="#c1c1c1"
            className="margin-top-large margin-bottom-medium"
          />
        </div>
      );
    }
    return experience;
  };

  return (
    <div className="form__body">
      <FormHeader header="გამოცდილება" indexOfPage={2} />

      <form className="form__form">
        {displayFormInputs()}

        <button
          className=" btn btn--blue-1 margin-bottom-medium"
          onClick={(e) =>
            onAddMoreClick(
              e,
              index,
              setIndex,
              errors,
              dirtyFields,
              "indexExp",
              requiredFields,
              setValue,
              trigger,
              setAddMoreChange
            )
          }
        >
          მეტი გამოცდილების დამატება
        </button>
      </form>

      <FormFooter
        previous="info"
        next="education"
        errors={errors}
        dirtyFields={dirtyFields}
        requiredFields={requiredFields}
        trigger={trigger}
        setValue={setValue}
        indexStorageKey="indexExp"
        addMoreChange={addMoreChange}
      />
    </div>
  );
}

export default Experience;
