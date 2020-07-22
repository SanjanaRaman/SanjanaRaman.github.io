import React, { Component } from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Contact from "./Contact";
import Stock from "./projects/Stock";
import ProjectTabs from "./ProjectTabs";

class Projects extends Component {
  state = {};
  render() {
    return <div className="projects-section" id="projects">
      <ProjectTabs />
    </div>
  }
}

export default Projects;
