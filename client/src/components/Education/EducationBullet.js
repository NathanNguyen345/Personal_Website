import React from "react";
import EducationImage from "./EducationImage";
import classses from "./Education.module.css";

function EducationBullet(props) {
  const { logo, schoolName, location, major } = props.exp;
  return (
    <div className={`col-lg-6`}>
      <EducationImage id={logo} />
      <h1 className={classses.school_name}>{schoolName}</h1>
      <h3>{location}</h3>
      <h3>{major}</h3>
    </div>
  );
}

export default EducationBullet;
