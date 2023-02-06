import React from "react";
import { Link } from "react-router-dom";

function FormFooter({ previous, next }) {
  // if (!previous) return;
  // <div className="form__footer">
  //   <Link
  //     to={"Resume"}
  //     className="btn btn--primary font-medium"
  //   >
  //     შემდეგი
  //   </Link>
  // </div>;

  // if (next === "დასრულება")
  //   return (
  //     <div className="form__footer">
  //       <Link
  //         to={`/form/experience`}
  //         className="btn btn--primary font-medium "
  //       >
  //         უკან
  //       </Link>
  //       <Link
  //         to={"Resume"}
  //         className="btn btn--primary font-medium"
  //       >
  //         დასრულება
  //       </Link>
  //     </div>
  //   );
  return (
    <div
      className={`form__footer ${previous ? "justify-between" : "justify-end"}`}
    >
      {previous && (
        <Link
          to={`/form/${previous}`}
          className="btn btn--primary font-medium "
        >
          უკან
        </Link>
      )}

      <Link
        to={`${next === "დასრულება" ? "resume" : `/form/${next}`}`}
        className="btn btn--primary font-medium "
      >
        {next === "დასრულება" ? "დასრულება" : "შემდეგი"}
      </Link>
    </div>
  );
}

export default FormFooter;
