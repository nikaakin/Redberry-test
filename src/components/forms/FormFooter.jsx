import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { allFields as allFieldsEdu } from "../../data/educationInputs";
import { allFields as allFieldsExp } from "../../data/experienceInputs";
import { allFields as allFieldsInfo } from "../../data/privateInfoInputs";
import { buildFormData } from "../../utils/buildFormDataFromObject";

function FormFooter({
  previous,
  next,
  errors,
  dirtyFields,
  requiredFields,
  trigger,
  setValue,
  setIsNextPageClicked = false,
  indexStorageKey = "no need",
  addMoreChange,
}) {
  const navigate = useNavigate();
  const [curIndex, setCurIndex] = useState();

  useEffect(() => {
    setTimeout(() => setCurIndex(localStorage.getItem(indexStorageKey), 0));
  }, []);

  useEffect(() => {
    setCurIndex(localStorage.getItem(indexStorageKey));
  }, [addMoreChange]);

  const isDisabled = () => {
    let newIndex = curIndex;

    if (curIndex === "" || curIndex === null) {
      if (
        requiredFields.every((fieldName) => errors[fieldName] === undefined) &&
        requiredFields.every((fieldName) => dirtyFields[fieldName] === true)
      ) {
        return "";
      }
      return "none";
    } else {
      if (
        requiredFields.every(
          (fieldName) =>
            localStorage.getItem(`${fieldName}${curIndex}`) === null ||
            localStorage.getItem(`${fieldName}${curIndex}`) === ""
        )
      ) {
        if (newIndex != 0) {
          newIndex = +curIndex - 1;
          setCurIndex(newIndex);
        }
      }
      for (let i = 0; i <= newIndex; i++) {
        if (
          requiredFields.every(
            (fieldName) => errors[`${fieldName}${i}`] === undefined
          ) &&
          requiredFields.every(
            (fieldName) => dirtyFields[`${fieldName}${i}`] === true
          )
        ) {
          continue;
        }

        return "none";
      }
      return "";
    }
  };

  const fatOnClick = async () => {
    if (curIndex === "" || curIndex === null) {
      if (isDisabled() === "none") {
        requiredFields.forEach(async (fieldName) => {
          setValue(fieldName, localStorage.getItem(fieldName), {
            shouldDirty: true,
          });
          await trigger(fieldName, { shouldFocus: true });
        });
        setIsNextPageClicked && setIsNextPageClicked(true);
      } else {
        navigate(`${next === "დასრულება" ? "resume" : `/form/${next}`}`);
      }
    } else {
      if (isDisabled() === "none") {
        for (let i = 0; i <= +curIndex; i++) {
          requiredFields.forEach(async (fieldName) => {
            setValue(
              `${fieldName}${i}`,
              localStorage.getItem(`${fieldName}${i}`),
              {
                shouldDirty: true,
              }
            );
            await trigger(`${fieldName}${i}`, { shouldFocus: true });
          });
          setIsNextPageClicked && setIsNextPageClicked(true);
        }
      } else {
        if (next === "დასრულება") {
          let indexExp = localStorage.getItem("indexExp");
          let indexEdu = localStorage.getItem("indexEdu");

          let formData = {};
          allFieldsInfo.forEach(
            (fieldName) =>
              (formData[fieldName] = localStorage.getItem(fieldName))
          );

          // ****

          if (
            allFieldsExp.every(
              (fieldName) =>
                localStorage.getItem(`${fieldName}${indexExp}`) == "" ||
                localStorage.getItem(`${fieldName}${indexExp}`) == null
            )
          ) {
            indexExp = +indexEdu - 1;
          }

          let experiences = [];

          for (let i = 0; i <= indexExp; i++) {
            const singleExperienceObj = {};
            allFieldsExp.forEach(
              (fieldName) =>
                (singleExperienceObj[fieldName] = localStorage.getItem(
                  `${fieldName}${i}`
                ))
            );
            experiences.push(singleExperienceObj);
          }

          formData["experiences"] = experiences;

          // *****
          if (
            allFieldsEdu.every(
              (fieldName) =>
                localStorage.getItem(`${fieldName}${indexEdu}`) == "" ||
                localStorage.getItem(`${fieldName}${indexEdu}`) == null
            )
          ) {
            indexEdu = +indexEdu - 1;
          }

          let educations = [];

          for (let i = 0; i <= indexEdu; i++) {
            const singleEducationObj = {};
            allFieldsEdu.forEach(
              (fieldName) =>
                (singleEducationObj[fieldName] = localStorage.getItem(
                  `${fieldName}${i}`
                ))
            );
            singleEducationObj["due_date"] = localStorage.getItem(
              `due_dateEdu${i}`
            );
            singleEducationObj["description"] = localStorage.getItem(
              `descriptionEdu${i}`
            );
            singleEducationObj["degree_id"] = localStorage.getItem(
              `degree${i}`
            );

            educations.push(singleEducationObj);
          }

          formData["educations"] = educations;
          formData.phone_number = localStorage
            .getItem("phone_number")
            .replaceAll(" ", "");

          const data = new FormData();

          const blob = await fetch(localStorage.getItem("image")).then((res) =>
            res.blob()
          );

          buildFormData(data, formData);

          const file = new File([blob], "image.png", {
            type: blob.type,
          });

          data.append("image", file);

          console.log(formData);

          axios
            .post("https://resume.redberryinternship.ge/api/cvs", data)
            .then((data) => console.log(data));
        }
        navigate(`${next === "დასრულება" ? "/resume" : `/form/${next}`}`);
      }
    }
  };

  return (
    <div
      className={`form__footer margin-top-small ${
        previous ? "justify-between" : "justify-end"
      } `}
    >
      {previous && (
        <Link
          to={`/form/${previous}`}
          className="btn btn--primary font-medium  "
        >
          უკან
        </Link>
      )}

      <div
        className="cursor-pointer btn btn--primary font-medium "
        onClick={fatOnClick}
      >
        {next === "დასრულება" ? "დასრულება" : "შემდეგი"}
      </div>
    </div>
  );
}

export default FormFooter;
