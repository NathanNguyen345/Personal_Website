import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Intro from "./components/Landing/Intro";
import Resume from "./components/Resume/Resume";
import Education from "./components/Education/Education";

function App() {
  return (
    <div className="App">
      <Intro />
      <Resume />
      <Education />
    </div>
  );
}

export default App;
