import React from "react";
import EducationTitle from "./EducationTitle";
import data from "./EducationData.json";
import EducationBullet from "./EducationBullet";
import classes from "./Education.module.css";

function Education() {
  const educationExpierence = data.EducationData.map((exp) => {
    return <EducationBullet key={exp.logo} exp={exp} />;
  });

  return (
    <div className={`${classes.education_wrapper} row`}>
      <EducationTitle />
      {educationExpierence}
    </div>
  );
}

export default Education;
