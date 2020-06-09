import React from "react";
import classes from "./Navbar.module.css";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

/****
 * Mouse over to scale up nav bullets
 */
const mouseOver = (ref) => {
  gsap.to(ref.current, { scale: 1.2, duration: 0.5 });
};

/*****
 * Scale down nav bullets on exit
 */
const mouseOut = (ref) => {
  gsap.to(ref.current, { scale: 1, duration: 0.5 });
};

/*****
 * GSAP scroll to div on click
 */
const clickHandler = (location) => {
  gsap.to(window, { duration: 1, scrollTo: location });
};

const NavBarItem = React.forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <li className={`${classes.navbar_li} nav-item active`}>
        <button
          className={`${classes.navbar_button}`}
          onMouseOver={() => mouseOver(ref)}
          onMouseOut={() => mouseOut(ref)}
          onClick={() => clickHandler(`${props.divName}`)}
          ref={ref}
        >
          {props.name}
        </button>
      </li>
    </React.Fragment>
  );
});

export default NavBarItem;
