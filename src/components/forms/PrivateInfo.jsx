import React from "react";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";

function PrivateInfo() {
  return (
    <div className="form__body">
      <FormHeader header="პირადი ინფო" indexOfPage={1} />
      <form className="form__form">
        <input type="text" id="name" placeholder="name" />
        <label htmlFor="name">Name</label>
      </form>
      <FormFooter next="experience" />
    </div>
  );
}

export default PrivateInfo;
