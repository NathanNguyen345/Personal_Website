import React, { useEffect, useRef } from "react";
import classes from "./Landing.module.css";
import img from "./me.JPG";
import { TimelineMax } from "gsap";

function Backdrop() {
  const centerRef = useRef(null);
  const spinnerRef = useRef(null);
  const tl = new TimelineMax();

  useEffect(() => {
    tl.from(centerRef.current, {
      y: -300,
      duration: 1.5,
      ease: "bounce",
      delay: 5,
    })
      .to(centerRef.current, { opacity: 1, duration: 1.5 }, "-=1.5")
      .to(spinnerRef.current, {
        rotate: 180,
        duration: 2.5,
        repeat: -1,
        ease: "none",
      });
  });
  return (
    <div>
      <div className={`${classes.center_circle}`} ref={centerRef}>
        <div className={`${classes.center_spinner_border}`}>
          <img className={classes.center_picture} src={img}></img>
        </div>
        <div className={`${classes.center_spinner}`} ref={spinnerRef}></div>
      </div>
    </div>
  );
}

export default Backdrop;
