import React, { useEffect, useRef } from "react";
import classes from "./Landing.module.css";
import LandingSlide from "./LandingSlide";
import Backdrop from "./Backdrop";
import Navbar from "../Nav/Navbar";
import test from "./LandingTest.module.css";
import BackdropTest from "./BackDropTest";

import { gsap } from "gsap";
import useWindowDimensions from "../Hooks/useWindowDimensions ";

function Landing() {
  const textRef = useRef(null);
  // const { height, width } = useWindowDimensions();

  // useEffect(() => {
  //   gsap.to{textRef.current, {scale: ()}}
  // }, [width]);

  return (
    // <div className={`${classes.background} home_page`}>
    //   <div className="row h-100 justify-content-center align-items-center">
    //     <Navbar />
    //     <div className={`${classes.backdrop_split} col-lg-4`}>1</div>
    //     <div className={`${classes.backdrop_split} col-lg-4`}>
    //       <Backdrop />
    //     </div>
    //     <div className={`${classes.backdrop_split} col-lg-4`}>3</div>
    //     <LandingSlide />
    //   </div>
    // </div>

    <div className={`${test.background} home_page`}>
      <div className={`${test.grid}`}>
        <div className={`${test.left}`}>1</div>
        <div className={`${test.center}`}>
          <BackdropTest />
          <h1 className={test.name} ref={textRef}>
            NATHAN
            <br />
            NGUYEN
          </h1>
        </div>
        <div className={`${test.right}`}></div>
      </div>

      <div className={`${test.bottom}`}>
        <h1>WELCOME</h1>
      </div>
    </div>
  );
}

export default Landing;
