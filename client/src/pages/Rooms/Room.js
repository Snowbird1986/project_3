import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, TextArea } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Room extends Component {
    state={}

    render() {
        return (
    <Container fluid>
            <Row>
                <Col size="md-12">
                <Jumbotron>
                    <h1>Room</h1>
                </Jumbotron>
                <Row>
                    <div class="list-group">
                    <a href="/message" class="list-group-item list-group-item-action">
                        Messages
                    </a>
                    <a href="/bill" class="list-group-item list-group-item-action">
                        Bills
                    </a>
                    <a href="/user" class="list-group-item list-group-item-action">
                        Users
                    </a>
                    <a href="/todo" class="list-group-item list-group-item-action">
                        To Dos
                    </a>
                    <a href="/contract" class="list-group-item list-group-item-action">
                        Contracts
                    </a>
                    </div>
                </Row>
                </Col>
            </Row>
    </Container>
        )}
}


export default Room;