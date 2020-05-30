import React, { useRef } from "react";
import classes from "./Navbar.module.css";
import { TweenMax } from "gsap";

function NavbarBullets() {
  const homeRef = useRef(null);
  const resumeRef = useRef(null);
  const educationRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);

  const mouseOver = (ref) => {
    TweenMax.to(ref.current, { scale: 1.2, duration: 0.5 });
  };

  const mouseOut = (ref) => {
    TweenMax.to(ref.current, { scale: 1, duration: 0.5 });
  };

  return (
    <React.Fragment>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className={`${classes.navbar_li} nav-item active`}>
            <button
              className={`${classes.navbar_button} test`}
              onMouseOver={() => mouseOver(homeRef)}
              onMouseOut={() => mouseOut(homeRef)}
              ref={homeRef}
            >
              Home
            </button>
          </li>
          <li className={`${classes.navbar_li} nav-item`}>
            <button
              className={`${classes.navbar_button} test`}
              onMouseOver={() => mouseOver(resumeRef)}
              onMouseOut={() => mouseOut(resumeRef)}
              ref={resumeRef}
            >
              Resume
            </button>
          </li>
          <li className={`${classes.navbar_li} nav-item`}>
            <button
              className={`${classes.navbar_button} test`}
              onMouseOver={() => mouseOver(educationRef)}
              onMouseOut={() => mouseOut(educationRef)}
              ref={educationRef}
            >
              Education
            </button>
          </li>
          <li className={`${classes.navbar_li} nav-item`}>
            <button
              className={`${classes.navbar_button} test`}
              onMouseOver={() => mouseOver(projectRef)}
              onMouseOut={() => mouseOut(projectRef)}
              ref={projectRef}
            >
              Projects
            </button>
          </li>
          <li className={`${classes.navbar_li} nav-item`}>
            <button
              className={`${classes.navbar_button} test`}
              onMouseOver={() => mouseOver(aboutRef)}
              onMouseOut={() => mouseOut(aboutRef)}
              ref={aboutRef}
            >
              About Me
            </button>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default NavbarBullets;
