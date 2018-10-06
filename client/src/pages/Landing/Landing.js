import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Landing extends Component {
    state = {}

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron >
                            Login to facebook to get started.
    
                    </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Landing;