import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Nalanda Industries</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item href={"/"} className="mr-3 pt-2">
              <Link to={"/"} style={{ color: "white" }}>
                HOME
              </Link>
            </Nav.Item>
            <NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to={"/department"}>Department</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/supplier"}>Suppliers</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/products"}>Products</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
