import React, { useEffect, useState } from "react";
import ResumeLogo from "../assets/resume-logo.png";
import EmailLogo from "../assets/email.png";
import PhoneLogo from "../assets/phone.png";
import leftArrow from "../assets/left-arrow.png";
import { Link, useLocation } from "react-router-dom";

function Resume({ formState }) {
  const [page, setPage] = useState(false);
  const [open, setOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const param = location.pathname.split("/")[1];
    if (param === "resume") {
      setPage(true);
    }
  }, []);

  useEffect(() => {
    if (!open) {
      setTimeout(() => localStorage.clear(), 1000);
    }
  }, [open]);

  const displayInfoResumeFields = () => {
    const name = localStorage.getItem("name");
    const surname = localStorage.getItem("surname");
    const email = localStorage.getItem("email");
    const phoneNumber = localStorage.getItem("phone_number");
    const image = localStorage.getItem("image");

    return (
      <div className="resume__info-wrapper resume__border-bottom">
        <div className="resume__info-first-column">
          <h1 className="resume__main-header">
            <span>{name}</span>
            <span>{surname}</span>
          </h1>
          <div className="margin-bottom-tiny">
            {email && (
              <div>
                <img src={EmailLogo} className="resume__info-contact-logo" />{" "}
                <span className="resume__contact-me">{email}</span>
              </div>
            )}
            {phoneNumber && (
              <div>
                <img src={PhoneLogo} className="resume__info-contact-logo" />{" "}
                <span className="resume__contact-me">{phoneNumber}</span>
              </div>
            )}
          </div>

          {localStorage.getItem("about_me") && (
            <div className="resume__about-me">
              <h3 className="resume__header">ჩემ შესახებ</h3>
              <p className="resume__about-me">
                {localStorage.getItem("about_me")}
              </p>
            </div>
          )}
        </div>
        <div>
          <img className="resume__image" src={image} />
        </div>
      </div>
    );
  };

  const displayExperienceResumeFields = () => {
    let experiences = [];
    const index = localStorage.getItem("indexExp");

    for (let i = 0; i <= index; i++) {
      const employer = localStorage.getItem(`employer${i}`);
      const position = localStorage.getItem(`position${i}`);
      const dueDate = localStorage.getItem(`due_date${i}`);
      const startDate = localStorage.getItem(`start_date${i}`);
      const description = localStorage.getItem(`description${i}`);

      if (
        [employer, position, dueDate, startDate, description].every(
          (field) => field == "" || field == null
        )
      ) {
        if (index == 0 || index == null) {
          return null;
        }
        continue;
      }

      experiences.push(
        <div
          className="resume__experience-wrapper "
          key={`experience${i}-resume`}
        >
          <div>
            {position && (
              <span className="resume__header-span">{position}</span>
            )}
            {position && employer && ", "}
            {employer && (
              <span className="resume__header-span">, {employer}</span>
            )}
          </div>
          <div>
            {startDate && (
              <span className="resume__header-date">{startDate} - </span>
            )}
            {dueDate && <span className="resume__header-date">{dueDate}</span>}
          </div>

          {description && (
            <div className="resume__about-me margin-top-tiny">
              <p className="resume__about-me">{description}</p>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className=" resume__border-bottom">
        <h3 className="resume__header">გამოცდილება</h3>
        {experiences}
      </div>
    );
  };

  const displayEducationResumeFields = () => {
    let education = [];
    const index = localStorage.getItem("indexEdu");

    for (let i = 0; i <= index; i++) {
      const institute = localStorage.getItem(`institute${i}`);
      const degree = localStorage.getItem(`degree${i}`);
      const dueDate = localStorage.getItem(`due_dateEdu${i}`);
      const descriptionEdu = localStorage.getItem(`descriptionEdu${i}`);

      if (
        [institute, degree, dueDate, descriptionEdu].every(
          (field) => field == "" || field == null
        )
      ) {
        if (index == 0 || index == null) {
          return null;
        }
        continue;
      }
      education.push(
        <div
          className="resume__experience-wrapper "
          key={`education${i}-resume`}
        >
          <div>
            {institute && (
              <span className="resume__header-span">{institute}</span>
            )}
            {institute && degree && ", "}
            {degree && <span className="resume__header-span">{degree}</span>}
          </div>
          <div>
            {dueDate && <span className="resume__header-date">{dueDate}</span>}
          </div>

          {descriptionEdu && (
            <div className="resume__about-me margin-top-tiny">
              <p className="resume__about-me">{descriptionEdu}</p>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className=" resume__border-bottom">
        <h3 className="resume__header">განათლება</h3>
        {education}
      </div>
    );
  };

  const displayPopup = () => {
    if (!page) return null;
    if (!open) return null;

    return (
      <div className="resume__popup">
        {" "}
        <span className="resume__popup-text">
          რეზიუმე წარმატებით გაიგზავნა 🎉
        </span>{" "}
        <button
          onClick={() => setOpen(false)}
          className="btn resume__popup-button"
        >
          &#10005;
        </button>
      </div>
    );
  };

  const displayLink = () => {
    if (!page) return null;

    return (
      <Link
        to="/"
        className="form__back-home"
        onClick={() => {
          localStorage.clear();
        }}
      >
        <img src={leftArrow} alt="Go back to home" />
      </Link>
    );
  };

  return (
    <React.Fragment>
      {displayLink()}

      <div
        className={`resume ${
          page ? "resume-border  margin-auto margin-bottom-large" : ""
        }`}
      >
        {displayInfoResumeFields()}
        {displayExperienceResumeFields()}
        {displayEducationResumeFields()}

        <img src={ResumeLogo} className="resume__logo" />
        {displayPopup()}
      </div>
    </React.Fragment>
  );
}

export default Resume;
