import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import "./style.css"
import Navbar from "../../components/Navbar"

class HomePage extends Component {
  render() {
    return (
      <>
      <Navbar></Navbar>
      </>
    );
  }
}

export default withRouter(HomePage);
