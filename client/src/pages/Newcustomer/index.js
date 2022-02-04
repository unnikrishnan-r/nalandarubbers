import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// import "./style.css"
import Navbar from "../../components/Navbar";
import API from "../../utils/API";
import {
  Row,
  Col,
  Container,
  Form,
  Button,
  Dropdown,
  Jumbotron,
  Modal,
  Table,
} from "react-bootstrap";
import { RemainingChar } from "../../components/Form";
var moment = require("moment");
var FA = require("react-fontawesome");

class NewCustomer extends Component {
  state = {
    customerList: [],
    customerNameInput: "",
    customerAddressInput: "",
    customerPhoneInput: "",
    validated: false,
  };
  componentDidMount = () => {
    this.loadCustomers();
  };

  loadCustomers = () => {
    API.getCustomerList().then((res) => {
      console.log(res);
      this.setState({ customerList: res.data });
      console.log(this.state.customerList);
    });
  };
  deleteCustomer = (id) => {
    API.deleteCustomer(id)
      .then((res) => this.loadCustomers())
      .catch((err) => console.log(err));
  };
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      this.setState({ validated: true });
    } else {
      this.setState({ validated: true });
      API.createCustomer({
        customerName: this.state.customerNameInput,
        customerAddress: this.state.customerAddressInput,
        customerPhone: 123
      })
        .then((response) => {
          this.loadCustomers();
        })
        .catch((err) => console.error(err));
    }
  };

  render() {
    return (
      <>
        <Navbar></Navbar>
        <br></br>
        <br></br>
        <Container>
          <Row>
            <Col size="md-6">
              <Form
                noValidate
                validated={this.state.validated}
                onSubmit={this.handleOnSubmit}
              >
                <Form.Group>
                  <Form.Label>
                    <strong>Customer Name</strong>
                  </Form.Label>

                  <Form.Control
                    size="lg"
                    type="text"
                    required
                    onChange={this.handleInputChange}
                    value={this.state.customerNameInput}
                    name="customerNameInput"
                  />
                  <br />
                  <Form.Label>
                    <strong>Customer Address</strong>
                  </Form.Label>

                  <Form.Control
                    size="lg"
                    type="text"
                    required
                    onChange={this.handleInputChange}
                    value={this.state.customerAddressInput}
                    name="customerAddressInput"
                  />
                  <br />

                  <Button type="submit" className="btn btn-info">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Col>

            <Col size="md-6">
              <Table bordered hover responsive>
                <thead className="bg-info">
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.customerList.map((customer) => {
                    console.log(customer);
                    return (
                      <tr key={customer.customerId}>
                        <td style={{ width: "50px" }}>{customer.customerId}</td>
                        <td style={{ width: "150px" }}>
                          {customer.customerName}{" "}
                        </td>
                        <td style={{ width: "150px" }}>
                          {customer.customerAddress}{" "}
                        </td>
                        <td style={{ width: "150px" }}>
                          {customer.customerPhone}{" "}
                        </td>

                        <td style={{ width: "50px" }}>
                          <FA
                            name="deletebutton"
                            className="fa-trash mr-3 pt-2"
                            style={{ color: "red" }}
                            role="button"
                            onClick={() =>
                              this.deleteCustomer(customer.customerId)
                            }
                          ></FA>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default withRouter(NewCustomer);
