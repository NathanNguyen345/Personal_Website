import React from "react";
import classes from "./Education.module.css";

function EducationTitle() {
  return (
    <div className={`col-lg-12`}>
      <h1
        className={`${classes.title} row h-100 justify-content-center align-items-center`}
      >
        Education
      </h1>
    </div>
  );
}

export default EducationTitle;
