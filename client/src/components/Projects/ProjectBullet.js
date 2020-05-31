import React, { useRef, useState } from "react";
import classes from "./Project.module.css";
import { gsap } from "gsap";

function ProjectBullet(props) {
  const { title, description } = props.exp;
  const bulletName = `project_${props.exp.id}`;

  const getImage = (id) => {
    switch (id) {
      case "4":
        return (
          <img
            className={classes.card_img}
            src={require("../../images/Projects/workflow.jpg")}
          ></img>
        );
      case "3":
        return (
          <img
            className={classes.card_img}
            src={require("../../images/Projects/user_sync.jpg")}
          ></img>
        );
      case "2":
        return (
          <img
            className={classes.card_img}
            src={require("../../images/Projects/user_sync.jpg")}
          ></img>
        );
      case "1":
        return (
          <img
            className={classes.card_img}
            src={require("../../images/Projects/user_sync.jpg")}
          ></img>
        );

      default:
        break;
    }
  };

  const mouseOver = () => {
    gsap.to(`.${bulletName}`, { y: "-10", duration: 1 });
  };

  const mouseOut = () => {
    gsap.to(`.${bulletName}`, { y: "0", duration: 1 });
  };

  return (
    <div
      className={`col-lg-3 d-flex align-items-stretch ${bulletName}`}
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
    >
      <div className={`${classes.card} card`}>
        <div className={`${classes.card_header}card-header`}>
          {getImage(props.exp.id)}
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectBullet;
