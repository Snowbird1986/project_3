import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "../../components/Facebook/Login";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import "./Landing.css";

const Landing = props => {
    // console.log(props)
    

    // render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron >
                            Login to facebook to get started.
    
                        </Jumbotron>
                        <div className="navbar-brand col-md-12" href="/">
                        <div className="App col-md-6 offset-md-3" id="formdiv">
                            <div className="App-intro">
                                {!props.username &&
                                <div>
                                    <header className="App-header">
                                    <h1 className="App-title"> Media Login</h1>
                                    </header>
                                    <p>Click on one of any button below to login</p>
                                    <Login onLogin={props.onFacebookLogin}>
                                    <button className="btn btn-default btn-lg btn-facebook btn-block" id="fbbutton">Facebook</button>
                                    </Login>
                                </div>
                                }
                                {props.username &&
                                <p>Welcome back, {props.username}</p>
                                }
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        )
    }
// }


export default Landing;