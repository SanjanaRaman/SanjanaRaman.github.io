import React, { Component } from "react";
import appimage from './app-image.png';

class Stock extends Component {
  state = {};
  render() {
    return <div className="project-top" id="stock">
      <h1 className="project-header"> Penny Stocks Recommendation System </h1>
            <img src={appimage} />
            <br />
            <br />
            <br />

            A react website to showcase  my portfolio of work.
            <br /><br />
            - Wrote for etc
    </div>
  }
}

export default Stock;
