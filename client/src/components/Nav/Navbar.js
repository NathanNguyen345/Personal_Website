import React, { useEffect, useRef } from "react";
import classes from "./Navbar.module.css";
import NavbarBullets from "./NavbarBullets";
import { TimelineMax } from "gsap";

function Navbar() {
  const navbarRef = useRef(null);
  const tl = new TimelineMax();

  useEffect(() => {
    tl.to(navbarRef.current, { opacity: 1, duration: 1 }, "+=5");
  });

  return (
    <div className={`${classes.navbar_row}`} ref={navbarRef}>
      <nav className={`${classes.navbar} navbar navbar-expand-lg fixed-top`}>
        <button
          className={`${classes.navbar_toggler} navbar-toggler`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className={`${classes.navbar_toggler_icon} navbar-toggler-icon`}
          ></span>
        </button>

        <NavbarBullets />
      </nav>
    </div>
  );
}

export default Navbar;
