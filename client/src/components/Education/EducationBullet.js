import React from "react";
import EducationImage from "./EducationImage";

function EducationBullet(props) {
  const { logo, schoolName, location, major } = props.exp;
  return (
    <div className={`col-lg-6`}>
      <EducationImage id={logo} />
      <h3>{schoolName}</h3>
      <h3>{location}</h3>
      <h3>{major}</h3>
    </div>
  );
}

export default EducationBullet;
