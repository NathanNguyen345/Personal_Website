import React, { useRef } from "react";
import NavbarItem from "./NavbarItem";
import NavbarTheme from "./NavbarTheme";

function NavbarBullets() {
  const homeRef = useRef(null);
  const resumeRef = useRef(null);
  const educationRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <React.Fragment>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <NavbarItem ref={homeRef} name={"Home"} divName={".home_page"} />
          <NavbarItem
            ref={resumeRef}
            name={"Resume"}
            divName={".resume_page"}
          />
          <NavbarItem
            ref={educationRef}
            name={"Education"}
            divName={".education_page"}
          />
          <NavbarItem
            ref={projectRef}
            name={"Projects"}
            divName={".project_page"}
          />
          <NavbarItem
            ref={aboutRef}
            name={"About Me"}
            divName={".about_page"}
          />
          <NavbarItem
            ref={contactRef}
            name={"Contact"}
            divName={".footer_page"}
          />
          <NavbarTheme />
        </ul>
      </div>
    </React.Fragment>
  );
}

export default NavbarBullets;
