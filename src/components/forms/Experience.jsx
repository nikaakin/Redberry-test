import React from "react";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";

function Experience() {
  return (
    <div className="form__body">
      <FormHeader header="გამოცდილება" indexOfPage={2} />

      <form className="form__form">
        <div className="form__form-input-wrapper ">
          <label htmlFor="position" className="form__form-label">
            თანამდებობა
          </label>
          <input
            type="text"
            className="form__form-input"
            placeholder="დეველოპერი, დიზაინერი, ა.შ."
            name="position"
            id="position"
          />
          <span className="form__form-hint">მინიმუმ 2 ასო</span>
        </div>
        <div className="form__form-input-wrapper margin-top-small">
          <label htmlFor="hirer" className="form__form-label">
            დამსაქმებელი
          </label>
          <input
            type="text"
            className="form__form-input"
            placeholder="დამსაქმებელი"
            name="hirer"
            id="hirer"
          />
          <span className="form__form-hint">მინიმუმ 2 ასო</span>
        </div>
        <div className="form__form-double-inputs margin-top-small">
          <div className="form__form-input-wrapper">
            <label htmlFor="dateOfStart" className="form__form-label">
              დაწყების ღარიღი
            </label>
            <input
              type="date"
              className="form__form-input"
              name="dateOfStart"
              id="dateOfStart"
            />
          </div>
          <div className="form__form-input-wrapper">
            <label htmlFor="dateOfFinish" className="form__form-label">
              დამთავრების თარიღი
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
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            name="description"
            id="description"
          />
        </div>
        <hr color="#c1c1c1" className="margin-top-large margin-bottom-medium" />

        <button className=" btn btn--blue-1">მეტი გამოცდილების დამატება</button>
      </form>

      <FormFooter previous="info" next="education" />
    </div>
  );
}

export default Experience;
