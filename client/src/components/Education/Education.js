import React, { useRef, useEffect } from "react";
import EducationTitle from "./EducationTitle";
import data from "./EducationData.json";
import EducationBullet from "./EducationBullet";
import classes from "./Education.module.css";
import { gsap } from "gsap";

function Education() {
  const educationRef = useRef(null);

  /*****
   * Intersection observer initates GSAP bounce animation
   */
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        gsap.to(educationRef.current, {
          x: "100vw",
          duration: 2.5,
          ease: "bounce",
        });
      }
    });

    observer.observe(educationRef.current);
  }, [educationRef]);

  /*****
   * Map education to a component
   */
  const educationExpierence = data.EducationData.map((exp) => {
    return <EducationBullet key={exp.logo} exp={exp} />;
  });

  return (
    <div className={classes.education_outter}>
      <div
        className={`${classes.education_wrapper} education_page`}
        ref={educationRef}
      >
        <div className="container">
          <div className="row">
            <EducationTitle />
            {educationExpierence}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
