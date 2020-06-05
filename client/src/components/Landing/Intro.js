import React, { useEffect, useRef, useContext } from "react";
import classes from "./Landing.module.css";
import LandingSlide from "./LandingSlide";
import Backdrop from "./Backdrop";
import Navbar from "../Nav/Navbar";
import { gsap, TimelineMax } from "gsap";
import { ThemeContext } from "../../App";

function Landing() {
  const textRef = useRef(null);
  const nameRef = useRef(null);
  const backgroundRef = useRef(null);
  const themeContext = useContext(ThemeContext);
  const tl = new TimelineMax();

  /******
   *  Thie hook will bounce in welcome and name of the page.
   */
  useEffect(() => {
    tl.fromTo(
      [textRef.current, nameRef.current],
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 1.5, delay: 6.5, ease: "bounce" }
    );
  }, [textRef, nameRef]);

  /******
   * This hook will change the background from light to dark theme.
   */
  useEffect(() => {
    if (themeContext.lightTheme.light) {
      gsap.to([backgroundRef.current, ".project_page"], {
        background: "white",
        duration: 1,
      });
    } else {
      gsap.to([backgroundRef.current, ".project_page"], {
        background: "black",
        duration: 1,
      });
    }
  }, [themeContext.lightTheme]);

  return (
    <div className={`${classes.background} home_page`} ref={backgroundRef}>
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
