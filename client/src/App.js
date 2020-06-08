import React, { useReducer } from "react";
import "./App.css";
import Intro from "./components/Landing/Intro";
import Resume from "./components/Resume/Resume";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

export const ThemeContext = React.createContext();

const initialThemeState = { light: true };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "themeToggle":
      return { light: !state.light };

    default:
      return;
  }
};

function App() {
  const [light, dispatch] = useReducer(themeReducer, initialThemeState);

  return (
    <div className="App">
      <ThemeContext.Provider
        value={{ lightTheme: light, themeDispatch: dispatch }}
      >
        <Intro />
        <Resume />
        <Education />
        <Projects />
        <About />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
