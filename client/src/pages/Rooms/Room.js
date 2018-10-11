import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, TextArea } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Table from "../../components/Table";

class Room extends Component {
    state={}

    render() {
        return (
    <Container fluid>    
        <Col size="md-12">
            <Row>
                <Jumbotron>
                    <h1>Welcome to Your Room</h1>
                </Jumbotron>
            </Row>
                
            <Row>
                    <div id="roomies">
                        <h2>Current Roomies</h2>
                        <Table>
                            <thead>
                                <tr>
                                    <th scope="col">Roomies</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Contract Ends</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Bob</td>
                                    <td>Boberson</td>
                                    <td>11/01/2019</td>
                                    <td>111-111-1111</td>
                                    <td>bob@bob.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Frank</td>
                                    <td>Frankfurt</td>
                                    <td>01/01/2019</td>
                                    <td>999-999-9999</td>
                                    <td>frank@frank.gov</td>
                                </tr>
                            </tbody>
                            </Table>
                        </div> 
                    </Row>

                    <Row>
                        <div id="tasks">
                            
                            <h2>Tasks</h2>
                        <Table>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Task</th>
                                    <th scope="col">Assigned To</th>
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
                                        <td>Bob Boberson</td>
                                        <td>false</td>
                                        <td>11/1/2018</td>
                                        <td>Yardwork</td>
                                        <td>Weedwhack and mow lawn</td>
                                    </tr>
                                <tr>
                                    <th scope="row">2</th>
                                        <td>Dishes</td>
                                        <td>Frank Frankfurt</td>
                                        <td>true</td>
                                        <td>10/15/2018</td>
                                        <td>Daily</td>
                                        <td>Wash, dry, put away dishes</td>
                                    </tr>
                                <tr>
                                
                                </tr>
                            </tbody>
                            </Table>
                        </div>

                        <div id="bills">
                            <h2>Current Bills</h2>
                            <Table>
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Bill</th>
                                    <th scope="col">Assigned To</th>
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
                                            <td>Frank</td>
                                            <td>$95</td>
                                            <td>11/1/2018</td>
                                            <td>Utilities</td>
                                            <td>Mail check by Friday</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Row>

                    <Row>
                        <div id="messages">
                            <h2>Messages</h2>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Subject</th>
                                            <th scope="col">Date Posted</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                                <td>Hello</td>
                                                <td>10/07/2018</td>
                                                <td>Have a great day!!!</td>
                                        </tr>
                                    </tbody>
                                </Table>

                        </div>
                </Row>
            </Col>
            
    </Container>
        )}
}


export default Room;