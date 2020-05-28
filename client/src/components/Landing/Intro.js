import React, { useRef, useEffect } from "react";
import classes from "./Landing.module.css";
import { TweenMax, TimelineMax } from "gsap";
import LandingSlide from "./LandingSlide";

function Landing() {
  return (
    <div className={`${classes.background}`}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className={classes.backdrop}>
          <div className="row h-100">
            <div className="col-6">1</div>
            <div className="col-6">2</div>
          </div>
        </div>
        <LandingSlide />
      </div>
    </div>
  );
}

export default Landing;
