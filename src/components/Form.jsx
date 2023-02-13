import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Resume from "./Resume";
import leftArrow from "../assets/left-arrow.png";

function Form() {
  const [formState, setFormState] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const param = location.pathname.split("/")[2];
    if (!param) return navigate("/");
  }, []);

  return (
    <div className="form">
      <Link
        to="/"
        className="form__back-home"
        onClick={() => {
          localStorage.clear();
        }}
      >
        <img src={leftArrow} alt="Go back to home" />
      </Link>
      <div className="form__input">
        <Outlet context={setFormState} />
      </div>
      <div className="form__output">
        <Resume formState={formState} />
      </div>
    </div>
  );
}

export default Form;
