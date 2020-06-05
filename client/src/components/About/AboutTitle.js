import React from "react";
import classes from "./About.module.css";

function AboutTitle() {
  return (
    <div className={`${classes.about_title} col-lg-12`}>
      <h1 className={`theme`}>About Me</h1>
    </div>
  );
}

export default AboutTitle;
