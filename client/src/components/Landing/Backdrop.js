import React, { useEffect, useRef, useContext } from "react";
import classes from "./Landing.module.css";
import img from "./me.JPG";
import { gsap, TimelineMax } from "gsap";
import { ThemeContext } from "../../App";

function Backdrop() {
  const centerRef = useRef(null);
  const spinnerRef = useRef(null);
  const themeContext = useContext(ThemeContext);
  const tl = new TimelineMax();

  /******
   *  This hook is for the introduction animation. It will slide the img from top of
   *  screen into view. It will also change the opacity and create a spinning effect.
   */
  useEffect(() => {
    tl.from(
      centerRef.current,
      {
        y: -1000,
        duration: 1.5,
        ease: "bounce",
        delay: 5.5,
      },
      "+=1"
    )
      .to(centerRef.current, { opacity: 1, duration: 1.5 }, "-=1.5")
      .to(spinnerRef.current, { opacity: 1, duration: 0.5 })
      .to(spinnerRef.current, {
        rotateZ: "360",
        duration: 2.5,
        repeat: -1,
        ease: "none",
      });
  }, []);

  /******
   *  This hook will switch the circle from light theme to dark theme.
   */
  useEffect(() => {
    if (themeContext.lightTheme.light) {
      gsap.to(spinnerRef.current, {
        css: { borderColor: "#661719 white" },
        duration: 1,
      });
    } else {
      gsap.to(spinnerRef.current, {
        css: { borderColor: "#661719 black" },
        duration: 1,
      });
    }
  }, [themeContext.lightTheme]);

  return (
    <div className={`${classes.flex}`}>
      <div className={`${classes.center_circle}`} ref={centerRef}>
        <div className={`${classes.center_spinner_border}`}>
          <img className={classes.center_picture} src={img} alt="Myself"></img>
        </div>
        <div className={`${classes.center_spinner}`} ref={spinnerRef}></div>
      </div>
    </div>
  );
}

export default Backdrop;
