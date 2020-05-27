import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Intro from "./components/Landing/Intro";
import Resume from "./components/Resume/Resume";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Intro />
      <Resume />
      <Education />
      <Projects />
      <About />
    </div>
  );
}

export default App;
