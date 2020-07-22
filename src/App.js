import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import NavbarTest from "./components/NavbarTest";
import Main from "./sections/Main";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import SwaggerTest from './components/SwaggerTest';
AOS.init();

class App extends Component {

  render() {
    return (
      <div className="App">

        <NavbarTest />
        <Main />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;
