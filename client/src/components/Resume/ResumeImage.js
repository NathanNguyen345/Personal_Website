import React from "react";
import classes from "./Resume.module.css";

function ResumeImage(props) {
  const imageSelector = (id) => {
    switch (id) {
      case "5":
        return (
          <img
            src={require("../../images/Resume/Adobe_logo.png")}
            className={classes.company_logo}
            alt={"Adobe"}
          ></img>
        );
      case "4":
        return (
          <img
            src={require("../../images/Resume/Nutanix_logo.png")}
            className={classes.company_logo}
            alt={"Nutanix"}
          ></img>
        );
      case "3":
        return (
          <img
            src={require("../../images/Resume/SCVMC_logo.png")}
            className={classes.company_logo}
            alt={"Santa Clara Valley Medical Center"}
          ></img>
        );
      case "2":
        return (
          <img
            src={require("../../images/Resume/Kaiser_logo.png")}
            className={classes.company_logo}
            alt={"Kaiser"}
          ></img>
        );
      case "1":
        return (
          <img
            src={require("../../images/Resume/Exactbid_logo.png")}
            className={classes.company_logo}
            alt={"ExactBid"}
          ></img>
        );
      default:
        break;
    }
  };

  return <React.Fragment>{imageSelector(props.id)}</React.Fragment>;
}

export default ResumeImage;
