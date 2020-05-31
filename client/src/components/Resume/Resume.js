import React from "react";
import ResumeTitle from "./ResumeTitle";
import ResumeBullet from "./ResumeBullet";
import classes from "./Resume.module.css";
import data from "./ResumeExpierenceData.json";

function Resume(exp) {
  const mapExpierence = data.ResumeExpierenceData.map((exp, index) => {
    return <ResumeBullet key={index} exp={exp} />;
  });

  return (
    <div className={`${classes.resume_wrapper} container resume_page`}>
      <ResumeTitle />
      {mapExpierence}
    </div>
  );
}

export default Resume;
