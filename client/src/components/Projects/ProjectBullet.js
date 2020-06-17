import React, { useEffect, useRef } from "react";
import classes from "./Project.module.css";
import { gsap } from "gsap";
import ProjectImg from "./ProjectImg";

function ProjectBullet(props) {
  const { title, description, links, id } = props.exp;
  const phase = props.phase;
  const bulletRef = useRef(null);
  const leftBulletRef = useRef(null);
  const rightBulletRef = useRef(null);

  /*****
   * Intersection observer kicks off GSAP animation for slide in and fade in
   */
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        gsap.fromTo(
          leftBulletRef.current,
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.5,
          }
        );

        gsap.fromTo(
          rightBulletRef.current,
          {
            opacity: 0,
            x: 50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.5,
          }
        );
      }
    });
    observer.observe(bulletRef.current);
  }, [bulletRef]);

  const renderLinks = Object.keys(links).map((key, i) => {
    return (
      <a className={classes.repo_link} href={links[key]} key={i}>
        {key}
      </a>
    );
  });

  /*****
   * Alternate component layout depending on phase
   */
  const renderPhase = () => {
    if (phase === "left") {
      return (
        <div className={`${classes.project_row} row`} ref={bulletRef}>
          <div className={`col-lg-4`} ref={leftBulletRef}>
            <ProjectImg id={id} />
          </div>
          <div className={`col-lg-8`} ref={rightBulletRef}>
            <h3 className={classes.title_red}>{title}</h3>
            <p>{description}</p>
            {renderLinks}
          </div>
        </div>
      );
    } else {
      return (
        <div className={`${classes.project_row} row`} ref={bulletRef}>
          <div className={`col-lg-4 order-lg-12`} ref={rightBulletRef}>
            <ProjectImg id={id} />
          </div>

          <div className={`col-lg-8 order-lg-1`} ref={leftBulletRef}>
            <h3 className={classes.title_blue}>{title}</h3>
            <p>{description}</p>
            {renderLinks}
          </div>
        </div>
      );
    }
  };

  return renderPhase();
}

export default ProjectBullet;
