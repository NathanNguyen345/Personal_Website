import React, { useRef, useContext, useEffect } from "react";
import classes from "./Navbar.module.css";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ThemeContext } from "../../App";

gsap.registerPlugin(ScrollToPlugin);

function NavbarBullets() {
  const homeRef = useRef(null);
  const resumeRef = useRef(null);
  const educationRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const toggleRef = useRef(null);
  const themeContext = useContext(ThemeContext);

  const mouseOver = (ref) => {
    gsap.to(ref.current, { scale: 1.2, duration: 0.5 });
  };

  const mouseOut = (ref) => {
    gsap.to(ref.current, { scale: 1, duration: 0.5 });
  };

  const clickHandler = (location, ref) => {
    gsap.to(window, { duration: 1, scrollTo: location });
  };

  const toggleTheme = () => {
    if (themeContext.lightTheme.light) {
      gsap.to(toggleRef.current, { innerText: "Light Theme", duration: 1 });
    } else {
      gsap.to(toggleRef.current, { innerText: "Dark Theme", duration: 1 });
    }
    themeContext.themeDispatch({ type: "themeToggle" });
  };

  return (
    <React.Fragment>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className={`${classes.navbar_li} nav-item active`}>
            <button
              className={`${classes.navbar_button}`}
              onMouseOver={() => mouseOver(homeRef)}
              onMouseOut={() => mouseOut(homeRef)}
              onClick={() => clickHandler(".home_page")}
              ref={homeRef}
            >
              Home
            </button>
          </li>
          <li className={`${classes.navbar_li} nav-item`}>
            <button
              className={`${classes.navbar_button}`}
              onMouseOver={() => mouseOver(resumeRef)}
              onMouseOut={() => mouseOut(resumeRef)}
              onClick={() => clickHandler(".resume_page")}
              ref={resumeRef}
            >
              Resume
            </button>
          </li>
          <li className={`${classes.navbar_li} nav-item`}>
            <button
              className={`${classes.navbar_button}`}
              onMouseOver={() => mouseOver(educationRef)}
              onMouseOut={() => mouseOut(educationRef)}
              onClick={() => clickHandler(".education_page")}
              ref={educationRef}
            >
              Education
            </button>
          </li>
          <li className={`${classes.navbar_li} nav-item`}>
            <button
              className={`${classes.navbar_button}`}
              onMouseOver={() => mouseOver(projectRef)}
              onMouseOut={() => mouseOut(projectRef)}
              onClick={() => clickHandler(".project_page")}
              ref={projectRef}
            >
              Projects
            </button>
          </li>
          <li className={`${classes.navbar_li} nav-item`}>
            <button
              className={`${classes.navbar_button}`}
              onMouseOver={() => mouseOver(aboutRef)}
              onMouseOut={() => mouseOut(aboutRef)}
              onClick={() => clickHandler(".about_page")}
              ref={aboutRef}
            >
              About Me
            </button>
          </li>
          <li className={`${classes.navbar_li} nav-item`}>
            <button
              className={`${classes.navbar_button}`}
              onMouseOver={() => mouseOver(contactRef)}
              onMouseOut={() => mouseOut(contactRef)}
              onClick={() => clickHandler(".footer_page")}
              ref={contactRef}
            >
              Contact
            </button>
          </li>
          <li className={`${classes.navbar_li} nav-item`}>
            <button
              className={`${classes.navbar_button}`}
              onClick={toggleTheme}
              onMouseOver={() => mouseOver(toggleRef)}
              onMouseOut={() => mouseOut(toggleRef)}
              ref={toggleRef}
            >
              Dark Theme
            </button>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default NavbarBullets;
