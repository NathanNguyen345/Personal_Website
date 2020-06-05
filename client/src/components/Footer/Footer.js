import React, { useEffect, useRef } from "react";
import classes from "./Footer.module.css";
import icon from "../../images//Footer/linkedin.png";
import { gsap, TimelineMax } from "gsap";

function Footer() {
  const imgRef = useRef(null);
  const backgroundRef = useRef(null);
  const tl = new TimelineMax();

  const mouseEnter = () => {
    tl.to(imgRef.current, {
      rotationZ: "360",
      scale: 1.5,
      duration: 1,
    }).to(
      backgroundRef.current,
      {
        background: "black",
        duration: 1,
      },
      "-=1"
    );
    // gsap.to(imgRef.current, {
    //   rotationZ: "360",
    //   scale: 1.5,
    //   duration: 1,
    // });
  };

  const mouseLeave = () => {
    tl.to(imgRef.current, {
      rotationZ: "-360",
      scale: 1,
      duration: 1,
    }).to(
      backgroundRef.current,
      {
        background: "#661719",
        duration: 1,
      },
      "-=1"
    );
    // gsap.to(imgRef.current, {
    //   rotationZ: "-360",
    //   scale: 1,
    //   duration: 1,
    // });
  };

  return (
    <div
      className={`${classes.footer_wrapper} footer_page`}
      ref={backgroundRef}
    >
      <h1>Let's Connect</h1>

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

      <h4>&copy; Copyright 2020</h4>
    </div>
  );
}

export default Footer;
