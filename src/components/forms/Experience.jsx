import React from "react";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";

function Experience() {
  return (
    <div className="form__body">
      <FormHeader header="გამოცდილება" indexOfPage={2} />
      <form className="form__form">
        <input type="text" id="name" placeholder="name" />
        <label htmlFor="name">Name</label>
      </form>
      <FormFooter previous="info" next="education" />
    </div>
  );
}

export default Experience;
