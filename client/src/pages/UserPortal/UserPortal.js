import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
// import UserCard from "../../components/userCard";
import API from "../../utils/API";
import "./UserPortal.css";

class UserPortal extends Component {
    state = {}
    componentDidMount = () => {
        console.log(this.props)
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            User Portal:
                        </Jumbotron>
                        <div className="col-md-10 offset-md-1" id="formdiv">
                            <Row>
                                Portal needs built.
                                </Row>
                            <Row>
                                <div className="col-md-1 offset-md-1">
                                    <img src={this.props.img} />
                                </div>
                                <div className="col-md-6">
                                    {this.props.username}
                                </div>
                            </Row>
                            <Row>
                                <div className="col-md-7 offset-md-1">
                                    Display user data here, rooms, assigned todos, assigned bills, perhaps sort those or limit those by date.
                                    perhaps roommates for each room and or pending roommates needing approval.
                                    shows nothing if they do now have a room.
                                    </div>
                                <div className="col-md-3">
                                    buttons here for create a new room.
                                    </div>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default UserPortal;