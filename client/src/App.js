import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Intro from "./components/Landing/Intro";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Intro />
      <Resume />
    </div>
  );
}

export default App;
