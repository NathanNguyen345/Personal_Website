import React, { useContext, useRef } from "react";
import classes from "./Navbar.module.css";
import { gsap } from "gsap";
import { ThemeContext } from "../../App";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function NavbarTheme() {
  const toggleRef = useRef(null);
  const themeContext = useContext(ThemeContext);

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
   * Call reducer to get state to determine which theme mode to display
   */
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
      <li className={`${classes.navbar_li} nav-item`}>
        <button
          className={`${classes.navbar_button}`}
          onClick={toggleTheme}
          onMouseOver={() => mouseOver(toggleRef)}
          onMouseOut={() => mouseOut(toggleRef)}
          ref={toggleRef}
        >
          Dark Mode
        </button>
      </li>
    </React.Fragment>
  );
}

export default NavbarTheme;
