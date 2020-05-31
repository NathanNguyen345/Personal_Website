import React from "react";
import data from "./ProjectData.json";
import classes from "./Project.module.css";
import ProjectBullet from "./ProjectBullet";
import ProjectTitle from "./ProjectTitle";

function Projects() {
  const projectExpierence = data.ProjectData.map((exp) => {
    if (exp.id % 2 === 0) {
      return <ProjectBullet key={exp.id} exp={exp} phase={"left"} />;
    } else {
      return <ProjectBullet key={exp.id} exp={exp} phase={"right"} />;
    }
  });

  return (
    <div className={`${classes.project_wrapper} project_page`}>
      <ProjectTitle />
      {projectExpierence}
    </div>
  );
}

export default Projects;
