import React from "react";
import AboutTitle from "./AboutTitle";
import classes from "./About.module.css";
import AboutImages from "./AboutImages";

function About() {
  return (
    <div className={`row`}>
      <AboutTitle />
      <AboutImages />
    </div>
  );
}

export default About;
