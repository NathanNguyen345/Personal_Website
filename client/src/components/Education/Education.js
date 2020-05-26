import React from "react";
import EducationTitle from "./EducationTitle";
import data from "./EducationData.json";
import EducationBullet from "./EducationBullet";

function Education() {
  const educationExpierence = data.EducationData.map((exp) => {
    return <EducationBullet key={exp.logo} exp={exp} />;
  });

  return (
    <div className={`row`}>
      <EducationTitle />
      {educationExpierence}
    </div>
  );
}

export default Education;
