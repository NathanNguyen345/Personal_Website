import React from "react";
import AboutTitle from "./AboutTitle";
import classes from "./About.module.css";
import AboutImages from "./AboutImages";

function About() {
  return (
    <div className={`${classes.about_wrapper} row about_page`}>
      <AboutTitle />
      <AboutImages />
    </div>
  );
}

export default About;
