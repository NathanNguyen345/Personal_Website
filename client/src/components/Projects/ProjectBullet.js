import React, { useEffect, useRef } from "react";
import classes from "./Project.module.css";
import { gsap } from "gsap";
import ProjectImg from "./ProjectImg";

function ProjectBullet(props) {
  const { title, description, id } = props.exp;
  const phase = props.phase;
  const bulletRef = useRef(null);
  const leftBulletRef = useRef(null);
  const rightBulletRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        gsap.fromTo(
          leftBulletRef.current,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 1.5 }
        );

        gsap.fromTo(
          rightBulletRef.current,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 1.5 }
        );
      }
    });
    observer.observe(bulletRef.current);
  }, [bulletRef]);

  const renderPhase = () => {
    if (phase === "left") {
      return (
        <div className={`${classes.project_row} row`} ref={bulletRef}>
          <div className={`col-lg-4`} ref={leftBulletRef}>
            <ProjectImg id={id} />
          </div>
          <div className={`col-lg-8`} ref={rightBulletRef}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className={`${classes.project_row} row`} ref={bulletRef}>
          <div className={`col-lg-8`} ref={leftBulletRef}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className={`col-lg-4`} ref={rightBulletRef}>
            <ProjectImg id={id} />
          </div>
        </div>
      );
    }
  };

  return renderPhase();
}

export default ProjectBullet;
