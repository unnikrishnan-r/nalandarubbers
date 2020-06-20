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

class Department extends Component {
  state = {
    departmentList: [],
    departmentNameInput: "",
    validated: false,
  };
  componentDidMount = () => {
    this.loadDepartments();
  };

  loadDepartments = () => {
    API.getDepartmentList().then((res) => {
      console.log(res);
      // res.data.forEach((department) => {
      this.setState({ departmentList: res.data });
      console.log(this.state.departmentList);
      // });
    });
  };
  deleteDepartment = (id) => {
    API.deleteDepartment(id)
      .then((res) => this.loadDepartments())
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
      API.createDepartment({ departmentName: this.state.departmentNameInput })
        .then((response) => {
          this.loadDepartments();
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
                    <strong>Enter the new department name</strong>
                  </Form.Label>

                  <Form.Control
                    size="lg"
                    type="text"
                    required
                    onChange={this.handleInputChange}
                    value={this.state.departmentNameInput}
                    name="departmentNameInput"
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
                    <th>Department Name</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.departmentList.map((dept) => {
                    console.log(dept);
                    return (
                      <tr key={dept.id}>
                        <td style={{ width: "50px" }}>{dept.id}</td>
                        <td style={{ width: "150px" }}>
                          {dept.departmentName}{" "}
                        </td>
                        <td style={{ width: "50px" }}>
                          <FA
                            name="deletebutton"
                            className="fa-trash mr-3 pt-2"
                            style={{ color: "red" }}
                            role="button"
                            onClick={() => this.deleteDepartment(dept.id)}
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

export default withRouter(Department);
