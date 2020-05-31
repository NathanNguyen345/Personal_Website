import React, { useRef, useEffect } from "react";
import classes from "./Resume.module.css";
import ResumeImage from "./ResumeImage";
import { gsap } from "gsap";

function ResumeBullet(props) {
  const bulletRef = useRef(null);
  const { logo, companyName, title, location, description } = props.exp;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        gsap.fromTo(
          bulletRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.5 }
        );
      }
    });

    observer.observe(bulletRef.current);
  }, [bulletRef]);

  return (
    <div
      className={`${classes.bullet} row justify-content-center`}
      ref={bulletRef}
    >
      <div className={`col-lg-2`}>
        <ResumeImage id={logo} />
      </div>
      <div className={`col-lg-8`}>
        <div className={`row`}>
          <div className={`col-lg-12`}>
            <h2 className={classes.companyName}>{companyName}</h2>
          </div>
          <div className={`col-lg-12`}>
            <h3 className={classes.title}>{title}</h3>
          </div>
          <div className={`col-lg-12`}>
            <h4 className={classes.location}>{location}</h4>
          </div>
          <div className={`col-lg-12`}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeBullet;
