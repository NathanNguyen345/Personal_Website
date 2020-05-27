import React from "react";
import classes from "./About.module.css";

function AboutImages(props) {
  const imageSelector = (id) => {
    switch (id) {
      case "0":
        return (
          <img
            src={require("../../images/About/0.jpg")}
            alt={"0"}
            className="img-fluid"
          ></img>
        );
    }
  };

  return (
    <div
      className={`${classes.img} col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12`}
    >
      {imageSelector(props.id)}
    </div>
  );
}

export default AboutImages;
