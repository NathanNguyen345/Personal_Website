import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Intro from "./components/Landing/Intro";
import Resume from "./components/Resume/Resume";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Intro />
      <Resume />
      <Education />
      <Projects />
    </div>
  );
}

export default App;
