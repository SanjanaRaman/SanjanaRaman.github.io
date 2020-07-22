import React, { Component } from "react";
import MediaQuery from "react-responsive";

class Skills extends Component {
  state = {};
  render() {
    return <div className="skills" id="skills">
    <MediaQuery query='(max-device-width: 409px)'>
      <div className="skills-header" data-aos="zoom-in">&lt;Skills/&gt;</div>
    </MediaQuery>
    <MediaQuery query='(min-device-width: 410px)'>
      <div className="skills-header" data-aos="zoom-in">&lt; Skills /&gt;</div>
    </MediaQuery>
      <div className="skills-section">
        <div className="skills1" data-aos="fade-right">
          CSS <br />
          HTML <br />
          Python <br />
        </div>
        <div className="stars1" data-aos="fade-left">
        ★★★★★<br />
        ★★★★★<br />
        ★★★★★<br />

        </div>
      </div>

    </div>
  }
}

export default Skills;
