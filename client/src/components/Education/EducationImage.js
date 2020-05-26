import React from "react";
import classes from "./Education.module.css";

function EducationImage(props) {
  const imageSelector = (id) => {
    switch (id) {
      case "2":
        return (
          <img
            src={require("../../images/Education/SJSU_logo.png")}
            className={classes.education_logo}
            alt={"Kaiser"}
          ></img>
        );
      case "1":
        return (
          <img
            src={require("../../images/Education/DeAnza_logo.png")}
            className={classes.education_logo}
            alt={"ExactBid"}
          ></img>
        );
      default:
        break;
    }
  };
  return <div>{imageSelector(props.id)}</div>;
}

export default EducationImage;
