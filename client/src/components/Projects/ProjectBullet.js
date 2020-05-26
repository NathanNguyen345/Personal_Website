import React from "react";

function ProjectBullet(props) {
  const { title, description } = props.exp;
  const phase = props.phase;

  const renderPhase = () => {
    if (phase === "left") {
      return (
        <div className={`col-lg-6`}>
          <h2>{title}</h2>
          <h3>{description}</h3>
        </div>
      );
    } else {
      return (
        <div className={`col-lg-6 offset-md-6`}>
          <h2>{title}</h2>
          <h3>{description}</h3>
        </div>
      );
    }
  };
  return renderPhase();
}

export default ProjectBullet;
