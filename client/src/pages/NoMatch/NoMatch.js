import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const NoMatch = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          404 Page Not Found

            <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
            </span>

        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default NoMatch;
