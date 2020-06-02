import React, { useRef, useEffect } from "react";
import classes from "./Landing.module.css";
import { TimelineMax } from "gsap";

function LandingSlide() {
  const slideBlock1 = useRef(null);
  const slideBlock2 = useRef(null);
  const slideBlock3 = useRef(null);
  const welcomeRef = useRef(null);
  const slideDiv = useRef(null);

  const tl = new TimelineMax();

  useEffect(() => {
    tl.to(slideBlock1.current, { x: "100vw", duration: 0.5 })
      .to(slideBlock2.current, { x: "100vw", duration: 0.5 })
      .to(slideBlock3.current, { x: "100vw", duration: 0.5 })
      .to(".welcome_text", {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
      })
      .to(
        ".welcome_text",
        {
          opacity: 0,
          duration: 1,
          stagger: 0.2,
        },
        "-=1"
      )
      .to(slideDiv.current, { y: "-96vh", zIndex: 1, duration: 0.5 }, "+=.2");
  });

  return (
    <div className={classes.slide} ref={slideDiv}>
      <div
        className={`${classes.slide_block} col-lg-12`}
        ref={slideBlock1}
      ></div>
      <div className={`${classes.slide_block} col-lg-12`} ref={slideBlock2}>
        <h3
          className={`${classes.welcome} welcome row h-100 justify-content-center align-items-center`}
          ref={welcomeRef}
        >
          <div className={`${classes.welcome_text} welcome_text`}>W</div>
          <div className={`${classes.welcome_text} welcome_text`}>E</div>
          <div className={`${classes.welcome_text} welcome_text`}>L</div>
          <div className={`${classes.welcome_text} welcome_text`}>C</div>
          <div className={`${classes.welcome_text} welcome_text`}>O</div>
          <div className={`${classes.welcome_text} welcome_text`}>M</div>
          <div className={`${classes.welcome_text} welcome_text`}>E</div>
        </h3>
      </div>
      <div
        className={`${classes.slide_block} col-lg-12`}
        ref={slideBlock3}
      ></div>
    </div>
  );
}

export default LandingSlide;
