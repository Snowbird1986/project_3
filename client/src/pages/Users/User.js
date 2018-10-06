import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, TextArea } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import { Login } from "../../components/Facebook/Login";
import API from "../../utils/API";
import "./user.css";

class User extends Component {
    state={
        user: [],
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber:"",
        birthday: "",
        gender: "",
        city: "",
        state: "",
        zip: "",
        budget: "",
        moveInDate: "",
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
      handleFormSubmit = event => {
        event.preventDefault();
        // if (this.state.title && this.state.author) {
        //   API.saveBook({
        //     title: this.state.title,
        //     author: this.state.author,
        //     synopsis: this.state.synopsis
        //   })
        //     .then(res => this.loadBooks())
        //     .catch(err => console.log(err));
        // }
      };

    render() {
        return (
    <Container fluid>
        <Row>
            <Col size="md-12">
            <Jumbotron>
              <h1>Enter User Info</h1>
            </Jumbotron>
                    <div className="col-md-8 offset-md-2" id="formdiv"> 
                        <form>
                            <Row>
                                <Col size="md-6">
                                    <Input
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange}
                                        name="firstName"
                                        placeholder="First Name"
                                    />
                                </Col>
                                <Col size="md-6">
                                    <Input
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange}
                                        name="lastName"
                                        placeholder="Last Name"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-12">
                                    <Input
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        name="email"
                                        placeholder="Email"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-6">
                                    <Input
                                        value={this.state.phoneNumber}
                                        onChange={this.handleInputChange}
                                        name="phoneNumber"
                                        placeholder="Phone Number"
                                    />
                                </Col>
                                <Col size="md-6">
                                    <Input
                                    value={this.state.birthday}
                                    onChange={this.handleInputChange}
                                    name="birthday"
                                    placeholder="Birthday"
                                />
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-4">
                                    <select>
                                        <option value="">Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Not Disclosed">Not Disclosed</option>
                                    </select>
                                </Col>
                                <Col size="md-4">
                                    <Input
                                        value={this.state.budget}
                                        onChange={this.handleInputChange}
                                        name="budget"
                                        placeholder="Budget ($/Month)"
                                    />
                                </Col>
                                <Col size="md-4">
                                    <Input
                                    value={this.state.moveInDate}
                                    onChange={this.handleInputChange}
                                    name="moveInDate"
                                    placeholder="Move In Date"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-5">
                                    <Input
                                        value={this.state.city}
                                        onChange={this.handleInputChange}
                                        name="city"
                                        placeholder="City"
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Input
                                        value={this.state.state}
                                        onChange={this.handleInputChange}
                                        name="state"
                                        placeholder="State"
                                    />
                                </Col>
                                <Col size="md-4">
                                    <Input
                                        value={this.state.zip}
                                        onChange={this.handleInputChange}
                                        name="zip"
                                        placeholder="Zip"
                                    />
                                </Col>
                            </Row>
                            <FormBtn onClick={this.handleFormSubmit}>
                                Poop
                            </FormBtn>
                        </form>
                    </div>
            </Col>
        </Row>
    </Container>


        )}
}


export default User;