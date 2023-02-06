import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Resume from "./Resume";
import leftArrow from "../assets/left-arrow.png";

function Form() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const param = location.pathname.split("/")[2];
    if (!param) return navigate("/");
  }, []);

  return (
    <div className="form">
      <Link to="/" className="form__back-home">
        <img src={leftArrow} alt="Go back to home" />
      </Link>
      <div className="form__input">
        <Outlet />
      </div>
      <div className="form__output">
        <Resume />
      </div>
    </div>
  );
}

export default Form;
