import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import UserCard from "../../components/userCard";
import API from "../../utils/API";
import "./UserHome.css";

class UserHome extends Component {
    state={}

    render() {
        return (
    <Container fluid>
        <Row>
                <Col size="md-12">
                <Jumbotron>
                  <h1>User Details:</h1>
                </Jumbotron>
                    <div className="col-md-8 offset-md-2" id="formdiv"> 
                        <Row>
                            <UserCard />
                        </Row>
                    </div>
                </Col>
            </Row>
    </Container>
        )}
}


export default UserHome;