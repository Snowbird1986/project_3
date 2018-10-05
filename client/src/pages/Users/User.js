import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, TextArea } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import { Login } from "../../components/Facebook/Login";
import API from "../../utils/API";

class User extends Component {
    state={}

    render() {
        return (
    <Container fluid>
        <Row>
            <Col size="md-12">
            <Jumbotron>
              <h1>User Info</h1>
            </Jumbotron>
            <form>
                <Input
                    //value={this.Login.firstName}
                    //onChange={this.handleInputChange}
                    name="first-name"
                    placeholder="First Name"
                />
                <Input
                    //value={this.Users.lastName}
                    onChange={this.handleInputChange}
                    name="last-name"
                    placeholder="Name"
                />
                <Input
                    //value={this.fbLogin.email}
                    //onChange={this.handleInputChange}
                    name="email"
                    placeholder="Email"
                />
                <Input
                    //value={this.fbLogin.id}
                    //onChange={this.handleInputChange}
                    name="id"
                    placeholder="Username"
                />
                <Input
                    //value={this.fbLogin.birthday}
                    //onChange={this.handleInputChange}
                    name="birthday"
                    placeholder="Birthday"
                />
                <Input
                    ////value={this.fbLogin.gender}
                    onChange={this.handleInputChange}
                    name="gender"
                    placeholder="Gender"
                />
                <Input
                    //value={this.fbLogin.location}
                    //onChange={this.handleInputChange}
                    name="location"
                    placeholder="Location"
                />
                
                <FormBtn onClick={this.fbLogin}>
                    Poop
                </FormBtn>
            </form>
            </Col>
        </Row>
    </Container>


        )}
}


export default User;