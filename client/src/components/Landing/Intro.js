import React, { useRef, useEffect } from "react";
import classes from "./Landing.module.css";
import LandingSlide from "./LandingSlide";
import Backdrop from "./Backdrop";

function Landing() {
  useEffect(() => {});

  return (
    <div className={`${classes.background}`}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className={`${classes.backdrop_split} col-lg-4`}>1</div>
        <div className={`${classes.backdrop_split} col-lg-4`}>
          <Backdrop />
        </div>
        <div className={`${classes.backdrop_split} col-lg-4`}>3</div>
        <LandingSlide />
      </div>
    </div>
  );
}

export default Landing;
