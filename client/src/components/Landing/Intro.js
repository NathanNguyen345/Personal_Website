import React from "react";
import classes from "./Landing.module.css";

function Landing() {
  return (
    <div className={`${classes.background} jumbotron`}>
      <div className="container">
        <div className="intro">
          <h3 className={classes.h3}>Hey, I'm</h3>
        </div>

        <div className={`${classes.name_logo}`}>Nathan Nguyen</div>
      </div>
    </div>
  );
}

export default Landing;
