import React, { Component } from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

class MobileMain extends Component {
  state = {};
  render() {
    return (
      <div className="mobile-main-section" id="mobile-main">
          <Typist avgTypingDelay={160}
            cursor={{blink:true}}
            onTypingDone={this.renderAbout} className="mobile-main-header">
            &lt; Hello World
            <br />
            I'm Sanjana! /&gt;</Typist>

      </div>
    );
  }
}

export default MobileMain;
