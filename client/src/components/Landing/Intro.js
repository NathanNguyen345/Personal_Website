import React, { useEffect, useRef } from "react";
import classes from "./Landing.module.css";
import LandingSlide from "./LandingSlide";
import Backdrop from "./Backdrop";
import Navbar from "../Nav/Navbar";
import { gsap } from "gsap";

function Landing() {
  const textRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [textRef.current, nameRef.current],
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 1.5, delay: 6.5, ease: "bounce" }
    );
  }, [textRef, nameRef]);
  return (
    <div className={`${classes.background} home_page`}>
      <div className={`${classes.grid}`}>
        <Navbar />
        <div className={`${classes.center}`}>
          <Backdrop />
          <h1 className={classes.name} ref={nameRef}>
            NATHAN
            <br />
            NGUYEN
          </h1>
        </div>
        <div className={`${classes.bottom}`} ref={textRef}>
          <h1>WELCOME</h1>
        </div>
      </div>
      <LandingSlide />
    </div>
  );
}

export default Landing;
