import React from "react";
import EducationImage from "./EducationImage";
import classses from "./Education.module.css";

function EducationBullet(props) {
  const { logo, schoolName, location, major } = props.exp;
  return (
    <div className={`col-lg-6`}>
      <div>
        <EducationImage id={logo} />
        <h1 className={classses.school_name}>{schoolName}</h1>
        <h2 className={classses.major}>{major}</h2>
        <h3 className={classses.location}>{location}</h3>
      </div>
    </div>
  );
}

export default EducationBullet;
