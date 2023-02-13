import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";
import ReactSelect from "react-select";
import {
  removeSeparator,
  selectStyles,
} from "../../custom-styles/selectStyles";

import { onAddMoreClick } from "../../utils/addMore";
import { displayInputs } from "../../utils/displayInputData";
import {
  addValidationIconOutside,
  addValidationIcon,
} from "../../utils/addValidationIcon";
import { inputData, requiredFields } from "../../data/educationInputs";
import { addValidationClass } from "../../utils/addValidationClass";
import { useOutletContext } from "react-router-dom";

function Education() {
  const [options, setOptions] = useState([]);
  const [index, setIndex] = useState(0);
  const [addMoreChange, setAddMoreChange] = useState(0);
  const [isNextPageClicked, setIsNextPageClicked] = useState(false);
  const setFormState = useOutletContext();

  useEffect(() => {
    localStorage.getItem("indexEdu") || localStorage.setItem("indexEdu", 0);
    setTimeout(() => setFormState((s) => !s), 0);

    axios
      .get("https://resume.redberryinternship.ge/api/degrees")
      .then(({ data }) => {
        setOptions(
          data.map((option) => ({
            value: option.title,
            label: option.title,
            id: option.id,
          }))
        );
      });

    let storageIndex = localStorage.getItem("indexEdu");

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

  useEffect(() => {
    if (isNextPageClicked) {
      localStorage.getItem(`degree${index}`) ||
        setError(`degree${index}`, { type: "required" });
      dirtyFields[`degree${index}`] = true;
    }
  }, [isNextPageClicked]);

  const {
    register,
    setValue,
    trigger,
    setError,
    clearErrors,
    formState: { errors, dirtyFields },
  } = useForm({ mode: "onChange" });

  const onSelectChange = (e, i) => {
    dirtyFields[`degree${i}`] = true;
    setFormState((s) => !s);
    localStorage.setItem(`degree${i}`, e.id);
    clearErrors(`degree${index}`);
  };

  const displayFormInputs = () => {
    let education = [];

    for (let i = 0; i <= index; i++) {
      education.push(
        <div key={`education-${i}`} className="margin-bottom-children">
          {displayInputs(
            inputData(dirtyFields, errors, i),
            register,
            setFormState
          )}
          <div className="form__form-double-inputs ">
            <div className="form__form-input-wrapper">
              <label className="form__form-label">ხარისხი</label>
              <div className="position-relative ">
                <ReactSelect
                  options={options}
                  placeholder="აირჩიეთ ხარისხი"
                  components={removeSeparator}
                  styles={selectStyles()}
                  onChange={(e) => onSelectChange(e, i)}
                  onFocus={() => {
                    localStorage.getItem(`degree${i}`) ||
                      setError(`degree${i}`, { type: "required" });
                    dirtyFields[`degree${i}`] = true;
                    setFormState((s) => !s);
                  }}
                  className={`border-radius-small ${addValidationClass(
                    dirtyFields[`degree${i}`],
                    errors[`degree${i}`]
                  )}   }`}
                />
                {addValidationIconOutside(
                  dirtyFields[`degree${i}`],
                  errors[`degree${i}`]
                )}
              </div>
            </div>
            <div className="form__form-input-wrapper">
              <label htmlFor={`due_dateEdu${i}`} className="form__form-label">
                დამთავრების რიცხვი
              </label>
              <div className="position-relative form__form-input-wrapper flex-grow-0">
                <input
                  {...register(`due_dateEdu${i}`, {
                    required: true,
                    value: localStorage.getItem(`due_dateEdu${i}`),
                    onChange: (e) => {
                      localStorage.setItem(`due_dateEdu${i}`, e.target.value);
                      setFormState((s) => !s);
                    },
                  })}
                  type="date"
                  className={`form__form-input ${addValidationClass(
                    dirtyFields[`due_dateEdu${i}`],
                    errors[`due_dateEdu${i}`]
                  )} `}
                  id={`due_dateEdu${i}`}
                />
                {addValidationIconOutside(
                  dirtyFields[`due_dateEdu${i}`],
                  errors[`due_dateEdu${i}`]
                )}
              </div>
            </div>
          </div>
          <div className="form__form-input-wrapper ">
            <label htmlFor={`descriptionEdu${i}`} className="form__form-label">
              აღწერა
            </label>
            <div className="position-relative form__form-input-wrapper flex-grow-0">
              <textarea
                {...register(`descriptionEdu${i}`, {
                  required: true,
                  value: localStorage.getItem(`descriptionEdu${i}`),
                  onChange: (e) => {
                    localStorage.setItem(`descriptionEdu${i}`, e.target.value);
                    setFormState((s) => !s);
                  },
                })}
                className={`form__form-input form__form-input--textarea ${addValidationClass(
                  dirtyFields[`descriptionEdu${i}`],
                  errors[`descriptionEdu${i}`]
                )} `}
                placeholder="განათლების აღწერა"
                id={`descriptionEdu${i}`}
              />
              {addValidationIcon(
                dirtyFields[`descriptionEdu${i}`],
                errors[`descriptionEdu${i}`]
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
    return education;
  };

  return (
    <div className="form__body">
      <FormHeader header="განათლება" indexOfPage={3} />
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
              "indexEdu",
              requiredFields,
              setValue,
              trigger,
              setAddMoreChange
            )
          }
        >
          სხვა სასწავლებლის დამატება
        </button>
      </form>
      <FormFooter
        next="დასრულება"
        previous="experience"
        errors={errors}
        dirtyFields={dirtyFields}
        requiredFields={requiredFields}
        trigger={trigger}
        setValue={setValue}
        indexStorageKey="indexEdu"
        addMoreChange={addMoreChange}
        setIsNextPageClicked={setIsNextPageClicked}
      />
    </div>
  );
}

export default Education;
