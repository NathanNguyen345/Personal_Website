import React, { useContext, useRef, useEffect } from "react";
import ResumeTitle from "./ResumeTitle";
import ResumeBullet from "./ResumeBullet";
import classes from "./Resume.module.css";
import data from "./ResumeExpierenceData.json";
import { ThemeContext } from "../../App";
import { gsap } from "gsap";

function Resume(exp) {
  const themeContext = useContext(ThemeContext);
  const backgroundRef = useRef(null);

  /******
   * This hook will change the background from light to dark theme.
   */
  useEffect(() => {
    if (themeContext.lightTheme.light) {
      gsap.to([backgroundRef.current, "body", ".about_page"], {
        background: "#fafafa",
        duration: 1,
      });
      gsap.to(["p", ".theme"], {
        color: "black",
        duration: 1,
      });
    } else {
      gsap.to([backgroundRef.current, "body", ".about_page"], {
        background: "#444444 ",
        duration: 1,
      });
      gsap.to(["p", ".theme"], {
        color: "white",
        duration: 1,
      });
    }
  }, [themeContext.lightTheme]);

  /*****
   * Map resume expierence to their own component
   */
  const mapExpierence = data.ResumeExpierenceData.map((exp, index) => {
    return <ResumeBullet key={index} exp={exp} />;
  });

  return (
    <div
      className={`${classes.resume_wrapper} container resume_page`}
      ref={backgroundRef}
    >
      <ResumeTitle />
      {mapExpierence}
    </div>
  );
}

export default Resume;
