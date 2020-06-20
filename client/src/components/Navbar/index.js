import React, { Component } from "react";
import { Navbar, Nav,NavDropdown } from "react-bootstrap";
export default class index extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Nalanda Industries</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item href="addproducts">
                Add Products
              </NavDropdown.Item>
              <NavDropdown.Item href="productcatalogue">
                Product Catalogue
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#customers">Customer Management</Nav.Link>
            <Nav.Link href="#orders">Purchase Order</Nav.Link>
            <Nav.Link href="#sales">Generate Bill</Nav.Link>
            <Nav.Link href="#sales">Reports</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
