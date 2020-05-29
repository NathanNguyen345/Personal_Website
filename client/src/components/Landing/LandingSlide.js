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
      .to(welcomeRef.current, { opacity: 1, duration: 1.5 })
      .to(welcomeRef.current, { opacity: 0, duration: 1.5 })
      .to(slideDiv.current, { y: "-100vh", duration: 0.5 });
  }, []);

  return (
    <div className={classes.slide} ref={slideDiv}>
      <div
        className={`${classes.slide_block} col-lg-12`}
        ref={slideBlock1}
      ></div>
      <div className={`${classes.slide_block} col-lg-12`} ref={slideBlock2}>
        <h3
          className={`${classes.welcome} row h-100 justify-content-center align-items-center`}
          ref={welcomeRef}
        >
          Welcome
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
