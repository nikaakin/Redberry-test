import React from "react";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";

function Education() {
  return (
    <div className="form__body">
      <FormHeader header="განათლება" indexOfPage={3} />
      <form className="form__form">
        <input type="text" id="name" placeholder="name" />
        <label htmlFor="name">Name</label>
      </form>
      <FormFooter next="დასრულება" previous="experience" />
    </div>
  );
}

export default Education;
