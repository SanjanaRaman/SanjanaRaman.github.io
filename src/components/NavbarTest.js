import React, { Component } from "react";
import classnames from "classnames";
import {Link} from "react-scroll";

export default class NavbarTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <nav
        className={classnames("navbartest", {
          "navbartest--appear": !this.state.visible
        })}
      >
      <Link
      activeClass="active"
      to="main"
      spy={true}
      smooth={true}
      duration= {1000}>&lt;/&gt;</Link>
      <Link
      activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      duration= {1000}
      >About</Link>
      <Link
      activeClass="active"
      to="contact"
      spy={true}
      smooth={true}
      duration= {1000}
      >Contact</Link>
      </nav>
    );
  }
}
