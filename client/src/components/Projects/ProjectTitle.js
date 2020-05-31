import React from "react";
import classes from "./Project.module.css";

function ProjectTitle() {
  return (
    <div className={`${classes.project_title} col-lg-12`}>
      <h1>Projects</h1>
    </div>
  );
}

export default ProjectTitle;
