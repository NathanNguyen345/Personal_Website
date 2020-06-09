import React from "react";
import classes from "./Project.module.css";

function ProjectImg(props) {
  const id = props.id;

  const getImage = (id) => {
    switch (id) {
      case "4":
        return (
          <img
            className={classes.card_img}
            src={require("../../images/Projects/workflow.jpg")}
            alt={"Adobe Sign Workflow"}
          ></img>
        );
      case "3":
        return (
          <img
            className={classes.card_img}
            src={require("../../images/Projects/user_sync.jpg")}
            alt={"Sign User Sync"}
          ></img>
        );
      case "2":
        return (
          <img
            className={classes.card_img}
            src={require("../../images/Projects/sf_crime.jpg")}
            alt={"SF Crime Data"}
          ></img>
        );
      case "1":
        return (
          <img
            className={classes.card_img}
            src={require("../../images/Projects/yelp-logo.png")}
            alt={"Yelp NLP"}
          ></img>
        );

      default:
        break;
    }
  };
  return getImage(id);
}

export default ProjectImg;
