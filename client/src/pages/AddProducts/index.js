import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import "./style.css"
import Navbar from "../../components/Navbar";
import {
  Row,
  Col,
  Container,
  Form,
  Button,
  Dropdown,
  Jumbotron,
  Modal,
} from "react-bootstrap";
import {RemainingChar} from "../../components/Form"
var moment = require("moment");

const DEPARTMENT_LIST = [ 
  {departmentName: "Rubber", departmentId: 1},
  {departmentName: "Mattress", departmentId: 2},
  {departmentName: "Pollution Check", departmentId: 3}
]
class AddProducts extends Component {
  state = {
    productId: null,
    productName: "",
    productDescription: "",
    productCost: 0,
    SUPPLIER_LIST: [],
    modalStatus: false,
    validated: false
  };
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Container fluid>
          <div className="bg">
            <div className="paddingWD">
              <Row>
                <Col size="md-6">
                  <Form
                    noValidate
                    validated={this.state.validated}
                    onSubmit={this.handleFormSubmit}
                  >
                    <Form.Group>
                      <div className="titleText">
                        <Form.Label>Product Name</Form.Label>
                      </div>
                      <Form.Control
                        type="text"
                        placeholder="Enter the product name"
                        value={this.state.productName}
                        onChange={this.handleInputChange}
                        name="productName"
                        maxLength={50}
                        required
                      />
                      <RemainingChar
                        remainingCharCount={50 - this.state.productName.length}
                      ></RemainingChar>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                      <br></br>
                      <div className="titleText">
                        <Form.Label>Product Description</Form.Label>
                      </div>
                      <Form.Control
                        as="textarea"
                        rows="3"
                        value={this.state.productDescription}
                        onChange={this.handleInputChange}
                        name="productDescription"
                        placeholder="Please enter some description for your product"
                        maxLength={250}
                        required
                      />
                      <RemainingChar
                        remainingCharCount={
                          250 - this.state.productDescription.length
                        }
                      ></RemainingChar>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                      <br></br>
                      <div className="titleText">
                        <Form.Label>Supplied By</Form.Label>
                      </div>
                      <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                          {this.state.supplierName ||
                            "Choose from your suppliers..."}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {this.state.SUPPLIER_LIST.map((supplier) => (
                            <Dropdown.Item
                              eventKey={supplier.fullName}
                              key={supplier.locationId}
                              id={supplier.locationId}
                              onSelect={this.handleDropDownSelection}
                              name="supplierName"
                            >
                              {supplier.fullName}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                      <br></br>

                      <div className="titleText">
                        <Form.Label>Department</Form.Label>
                      </div>
                      <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                          {this.state.supplierName ||
                            "Choose product department"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {DEPARTMENT_LIST.map((department) => (
                            <Dropdown.Item
                              eventKey={department.departmentName}
                              key={department.departmentId}
                              id={department.departmentId}
                              onSelect={this.handleDropDownSelection}
                              name="department"
                            >
                              {department.departmentName}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                      <br></br>
                      <div className="titleText">
                        <Form.Label>Product Cost</Form.Label>
                      </div>
                      <Form.Control
                        type="number"
                        placeholder="Enter the cost of the product"
                        value={this.state.productCost}
                        onChange={this.handleInputChange}
                        name="productCost"
                        required
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                      <br></br>

                      <Button
                        id="subBtn"
                        variant="info"
                        type="submit"
                        className="btn btn-success"
                      >
                        Submit
                      </Button>
                    </Form.Group>
                  </Form>
                </Col>

                <Col size="md-6">
                  <Jumbotron className="bg-white">
                    {/* <FileUpload
                      handleUpload={this.handleUpload.bind(this)}
                      handleFileChange={this.handleFileChange.bind(this)}
                      message={this.state.message}
                    ></FileUpload> */}
                    <br></br>
                    <br></br>
                  </Jumbotron>
                </Col>
              </Row>
              <Modal
                show={this.state.modalStatus}
                onHide={this.handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Succesfully added the product!!
                  </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                  <Button onClick={this.handleClose}>OK</Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default withRouter(AddProducts);
