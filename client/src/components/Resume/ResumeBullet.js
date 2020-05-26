import React from "react";
import classes from "./Resume.module.css";
import ResumeImage from "./ResumeImage";

function ResumeBullet(props) {
  const { logo, companyName, title, location, description } = props.exp;

  return (
    <div className={`${classes.resume_bullet} row justify-content-center`}>
      <div className={`col-lg-2`}>
        <ResumeImage id={logo} />
      </div>
      <div className={`col-lg-6`}>
        <div className={`row`}>
          <div className={`col-lg-12`}>{companyName}</div>
          <div className={`col-lg-12`}>{title}</div>
          <div className={`col-lg-12`}>{location}</div>
          <div className={`col-lg-12`}>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default ResumeBullet;
