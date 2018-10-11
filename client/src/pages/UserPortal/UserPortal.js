import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
// import UserCard from "../../components/userCard";
import API from "../../utils/API";
import "./UserPortal.css";
import Table from "../../components/Table";

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
                                <div className="col-md-12" id="userinfo">
                                    <Row>
                                    <div className="col-md-1 offset-md-1">
                                        <img src={this.props.img} />

                                    </div>
                                    <div className="col-md-3">
                                        {this.props.username}
                                        </div>
                                    </Row>
                                </div>
                                <br />
                                <Row>
                                    <div className="col-md-10 offset-md-1">
                                    <h2>Your Bills</h2>
                                        <Table>            
                                            <thead>
                                                <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Bill</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Due Date</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                        <td>Electric</td>
                                                        <td>$95</td>
                                                        <td>11/1/2018</td>
                                                        <td>Utilities</td>
                                                        <td>Mail check by Friday</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div className="col-md-10 offset-md-1">
                                    <h2>Your Tasks</h2>
                                        <Table>                                            
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Task</th>
                                                    <th scope="col">Recurring</th>
                                                    <th scope="col">Due Date</th>
                                                    <th scope="col">Category</th>
                                                    <th scope="col">Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                        <td>Mow yard</td>
                                                        <td>false</td>
                                                        <td>11/1/2018</td>
                                                        <td>Yardwork</td>
                                                        <td>Weedwhack and mow lawn</td>
                                                    </tr>
                                            </tbody>
                                        </Table>
                                    </div>                          
                                </Row>
                                <div className="col-md-12" id="createroomButton">
                                        <div className="col-md-3 offset-md-1" >
                                            <button>Create New Room</button>
                                        </div>
                                    </div>
                            </div>
                        </Col>
                    </Row>
            </Container>
        )
    }
}


export default UserPortal;