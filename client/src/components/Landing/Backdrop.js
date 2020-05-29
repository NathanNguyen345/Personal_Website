import React, { useEffect, useRef } from "react";
import classes from "./Landing.module.css";
import img from "./me.JPG";
import { TimelineMax } from "gsap";

function Backdrop() {
  const spinnerRef = useRef(null);
  const centerRef = useRef(null);
  const tl = new TimelineMax();

  useEffect(() => {
    tl.to(centerRef.current, { opacity: 1, duration: 1.5, delay: 5 }).to(
      spinnerRef.current,
      {
        rotate: 180,
        duration: 5,
        repeat: -1,
        ease: "none",
      }
    );
  });
  return (
    <React.Fragment>
      <div
        className={`${classes.center_img} row justify-content-center align-items-center`}
        ref={centerRef}
      >
        <div className={classes.center_spinner}></div>
        <div className={classes.center_spinner_top} ref={spinnerRef}></div>
        <div className={classes.center_spinner_bottom}>
          <img className={classes.center_picture} src={img}></img>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Backdrop;
