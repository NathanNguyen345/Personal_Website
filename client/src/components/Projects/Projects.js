import React from "react";
import data from "./ProjectData.json";
import classes from "./Project.module.css";
import ProjectBullet from "./ProjectBullet";
import ProjectTitle from "./ProjectTitle";

function Projects() {
  const projectExpierence = data.ProjectData.map((exp) => {
    return <ProjectBullet key={exp.id} exp={exp} />;
  });

  return (
    <div className={`${classes.project_wrapper} project_page`}>
      <div className="container">
        <div className="row">
          <ProjectTitle />
          {projectExpierence}
        </div>
      </div>
    </div>
  );
}

export default Projects;
