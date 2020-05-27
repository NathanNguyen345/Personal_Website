import React from "react";
import AboutTitle from "./AboutTitle";
import AboutImages from "./AboutImages";
import classes from "./About.module.css";

function About() {
  //   const data = [...Array(16).keys()];
  const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const renderImages = data.map((id) => {
    return <AboutImages key={id} id={`${id}`} />;
  });

  return (
    <div className={`row`}>
      <AboutTitle />
      <div className={`${classes.gallery} row`}>{renderImages}</div>
    </div>
  );
}

export default About;
