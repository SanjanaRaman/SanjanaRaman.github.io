import React, { Component } from "react";
import logo from './bwphoto.jpg';

class About extends Component {
  state = {};
  render() {
    return (
    <div className="about-section" id="about">
      <div className="about-image">
      <div className="about-info" data-aos="fade-right">
      <h2>Hey there! My name is Sanjana Raman and I am an aspiring software developer. I graduated from The Georgia Institute of Technology in December 2019 and have been working as a consultant since. I like blah lah blah and i also do this and that and I hope that everything works out well because this is hard.</h2> </div>

        <img data-aos="fade-left" src={logo} />
      </div>
    </div>);
  }
}

export default About;
