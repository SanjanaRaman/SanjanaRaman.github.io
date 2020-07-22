import React, { Component } from "react";
import linkedinlogo from './linkedinlogo.png';
import githublogo from './githublogo.png';
import apilogo from './apilogo.png';
import MediaQuery from "react-responsive";

class Contact extends Component {
  state = {};
  render() {
    return <div className="contact" id="contact">
    <MediaQuery query='(max-device-width: 409px)'>
    <div className="headers" data-aos="zoom-in">&lt;Say Hi/&gt;</div>
    </MediaQuery>
    <MediaQuery query='(min-device-width: 410px)'>
    <div className="headers" data-aos="zoom-in">&lt; Get In Touch /&gt;</div>
    </MediaQuery>

    <br />
      <MediaQuery query='(min-device-width: 900px)'>
        <div className="logos">
          <img src={githublogo} />
          <img src={linkedinlogo} />
          <img src={apilogo} />
        </div>
        <div className="email">Or shoot me an email at <a href="mailto:sanjanasraman@gmail.com">sanjanasraman@gmail.com </a></div>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 899px)'>
          <div className="logosmobile">
            <img src={githublogo} /> <br />
            <img src={linkedinlogo} /> <br />
            <img src={apilogo} /> <br /> <br />
            <div className="email">Or shoot me an email at <a href="mailto:sanjanasraman@gmail.com">sanjanasraman@gmail.com </a></div>

          </div>
          </MediaQuery>
    </div>
  }
}

export default Contact;
