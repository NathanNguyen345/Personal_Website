import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Intro from "./components/Landing/Intro";
import Resume from "./components/Resume/Resume";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Navbar from "./components/Nav/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Intro />
      <Resume />
      <Education />
      <Projects />
      <About />
    </div>
  );
}

export default App;
