import React from "react";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";

function PrivateInfo() {
  return (
    <div className="form__body">
      <FormHeader header="პირადი ინფო" indexOfPage={1} />
      <form className="form__form">
        <div className="form__form-double-inputs">
          <div className="form__form-input-wrapper">
            <label htmlFor="name" className="form__form-label">
              სახელი
            </label>
            <input
              type="text"
              className="form__form-input"
              placeholder="სახელი"
              name="name"
              id="name"
            />
            <span className="form__form-hint">
              მინიმუმ 2 ასო, ქართული ასოები
            </span>
          </div>
          <div className="form__form-input-wrapper">
            <label htmlFor="surname" className="form__form-label">
              გვარი
            </label>
            <input
              type="text"
              className="form__form-input"
              placeholder="გვარი"
              name="surname"
              id="surname"
            />
            <span className="form__form-hint">
              მინიმუმ 2 ასო, ქართული ასოები
            </span>
          </div>
        </div>

        <div className="form__form--photo">
          <label htmlFor="photo" className="form__form-label--photo">
            პირადი ფოტოს ატვირთვა
          </label>
          <label htmlFor="photo" className=" btn btn--blue">
            ატვირთვა
          </label>
          <input
            type="file"
            accept="image/gif, image/jpeg, image/png"
            className="display-none"
            placeholder="photo"
            name="photo"
            id="photo"
          />
        </div>

        <div className="form__form-input-wrapper">
          <label htmlFor="generalInfo" className="form__form-label">
            ჩემ შესახებ (არასავალდებულო)
          </label>
          <textarea
            className="form__form-input form__form-input--textarea"
            placeholder="ზოგადი ინფო შენ შესახებ"
            name="generalInfo"
            id="generalInfo"
          />
        </div>

        <div className="form__form-input-wrapper margin-top-small">
          <label htmlFor="email" className="form__form-label">
            ელ.ფოსტა
          </label>
          <input
            type="email"
            className="form__form-input "
            placeholder="example123@redberry.ge"
            name="email"
            id="email"
          />
          <span className="form__form-hint">
            უნდა მთავრდებოდეს @redberry.ge-ით
          </span>
        </div>

        <div className="form__form-input-wrapper margin-top-small">
          <label htmlFor="number" className="form__form-label ">
            მობილურის ნომერი
          </label>
          <input
            type="text"
            className="form__form-input  "
            placeholder="+995 551 12 34 56"
            name="number"
            id="number"
          />
          <span className="form__form-hint">
            უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
          </span>
        </div>
      </form>
      <FormFooter next="experience" />
    </div>
  );
}

export default PrivateInfo;
