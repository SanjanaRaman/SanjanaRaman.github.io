import React, { Component } from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import MediaQuery from "react-responsive";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className="main-section" id="main">
      <MediaQuery query='(max-device-width: 899px)'>
          <Typist avgTypingDelay={160}
            cursor={{blink:true}}
            onTypingDone={this.renderAbout} className="main-header">
            &lt;Hello-World/&gt; <br /> <br />I'm Sanjana!</Typist>
      </MediaQuery>
      <MediaQuery query='(min-device-width: 900px)'>
          <Typist avgTypingDelay={160}
            cursor={{blink:true}}
            onTypingDone={this.renderAbout} className="main-header">
            &lt; Hello World
            <br />
            I'm Sanjana! /&gt;</Typist>
      </MediaQuery>
      </div>
    );
  }
}

export default Main;
