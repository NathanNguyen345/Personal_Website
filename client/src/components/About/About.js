import React from "react";
import AboutTitle from "./AboutTitle";
import classes from "./About.module.css";
import AboutImages from "./AboutImages";
import AboutMe from "./AboutMe";

function About() {
  return (
    <div className={`${classes.about_wrapper} row about_page`}>
      <AboutTitle />
      <AboutMe />
      <AboutImages />
    </div>
  );
}

export default About;
