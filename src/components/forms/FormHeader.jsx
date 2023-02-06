import React from "react";

function FormHeader({ header, indexOfPage }) {
  return (
    <div className="form__header">
      <div className="font-large-1">{header}</div>
      <div className="font-large ">{indexOfPage}/3</div>
    </div>
  );
}

export default FormHeader;
