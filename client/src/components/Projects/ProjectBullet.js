import React from "react";

function ProjectBullet(props) {
  const { title, description } = props.exp;
  const phase = props.phase;

  const renderPhase = () => {
    if (phase === "left") {
      return (
        <div className={`col-lg-6`}>
          <div className="card border-info mb-3">
            <div className="card-header">{title}</div>
            <div className="card-body">
              <h5 className="card-title">Primary card title</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={`col-lg-6 offset-lg-6`}>
          <div className="card border-info mb-3">
            <div className="card-header">{title}</div>
            <div className="card-body">
              <h5 className="card-title">Success card title</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      );
    }
  };
  return renderPhase();
}

export default ProjectBullet;
