import React, { useRef } from "react";
import classes from "./Footer.module.css";
import icon from "../../images//Footer/linkedin.png";
import { TimelineMax } from "gsap";

function Footer() {
  const imgRef = useRef(null);
  const backgroundRef = useRef(null);
  const titleRef = useRef(null);
  const copyRef = useRef(null);
  const tl = new TimelineMax();

  /*****
   * GSAP scale and blur background animation
   */
  const mouseEnter = () => {
    tl.to(imgRef.current, {
      rotationZ: "360",
      scale: 1.5,
      duration: 1,
    })
      .to(
        backgroundRef.current,
        {
          background: "black",
          duration: 1,
        },
        "-=1"
      )
      .set(
        [titleRef.current, copyRef.current],
        {
          webkitFilter: "blur(2px)",
          filter: "blur(2px)",
          duration: 2,
        },
        "-=2"
      );
  };

  /*****
   * GSAP returns everthing back to normal on exit
   */
  const mouseLeave = () => {
    tl.to(imgRef.current, {
      rotationZ: "-360",
      scale: 1,
      duration: 1,
    })
      .to(
        backgroundRef.current,
        {
          background: "#661719",
          duration: 1,
        },
        "-=1"
      )
      .set(
        [titleRef.current, copyRef.current],
        {
          webkitFilter: "blur(0px)",
          filter: "blur(0px)",
          duration: 2,
        },
        "-=2"
      );
  };

  return (
    <div
      className={`${classes.footer_wrapper} footer_page`}
      ref={backgroundRef}
    >
      <h1 ref={titleRef}>Let's Connect</h1>

      <a
        href="https://www.linkedin.com/in/nathannguyen345/"
        onMouseOver={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <img
          ref={imgRef}
          className={classes.icon}
          src={icon}
          alt="LinkedIn"
        ></img>
      </a>

      <h4 ref={copyRef}>&copy; Copyright 2020</h4>
    </div>
  );
}

export default Footer;
