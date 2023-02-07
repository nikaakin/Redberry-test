import React from "react";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";

function Education() {
  return (
    <div className="form__body">
      <FormHeader header="განათლება" indexOfPage={3} />
      <form className="form__form">
        <div className="form__form-input-wrapper ">
          <label htmlFor="position" className="form__form-label">
            სასწავლებელი
          </label>
          <input
            type="text"
            className="form__form-input"
            placeholder="სასწავლებელი"
            name="position"
            id="position"
          />
          <span className="form__form-hint">მინიმუმ 2 ასო</span>
        </div>

        <div className="form__form-double-inputs margin-top-small">
          <div className="form__form-input-wrapper">
            <label htmlFor="degree" className="form__form-label">
              ხარისხი
            </label>
            <select className="form__form-input" name="degree" id="degree">
              <option value="" disabled selected>
                აირჩიეთ ხარისხი
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="form__form-input-wrapper">
            <label htmlFor="dateOfFinish" className="form__form-label">
              დამთავრების რიცხვი
            </label>
            <input
              type="date"
              className="form__form-input"
              name="dateOfFinish"
              id="dateOfFinish"
            />
          </div>
        </div>
        <div className="form__form-input-wrapper margin-top-small">
          <label htmlFor="description" className="form__form-label">
            აღწერა
          </label>
          <textarea
            className="form__form-input form__form-input--textarea"
            placeholder="განათლების აღწერა"
            name="description"
            id="description"
          />
        </div>
        <hr color="#c1c1c1" className="margin-top-large margin-bottom-medium" />

        <button className=" btn btn--blue-1 margin-bottom-medium">
          სხვა სასწავლებლის დამატება
        </button>
      </form>
      <FormFooter next="დასრულება" previous="experience" />
    </div>
  );
}

export default Education;
