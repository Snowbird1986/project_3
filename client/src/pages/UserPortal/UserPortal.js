import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import UserCard from "../../components/userCard";
import API from "../../utils/API";
import "./UserPortal.css";

class UserPortal extends Component {
    state={}

    render() {
        return (
    <Container fluid>
        <Row>
            <Col size="md-12">
                <Jumbotron>
                  <h1>User Portal:</h1>
                </Jumbotron>
                    <div className="col-md-10 offset-md-1" id="formdiv"> 
                        <Row>
                            Portal needs built.
                        </Row>
                    </div>
                </Col>
            </Row>
    </Container>
        )}
}


export default UserPortal;