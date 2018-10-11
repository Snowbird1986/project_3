import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, TextArea } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Room extends Component {
    componentDidMount = () => {
        console.log(this.props)

    }
    state = {}

    render() {
        return (
            <Container fluid>
                <Col size="md-12">
                    <Row>
                        <Jumbotron>
                            Welcome to Your Room
                </Jumbotron>
                    </Row>

                    <Row>
                        <div className="col-md-8 offset-md-2" id="formdiv">
                            <div id="roomies">
                                <h2>Current Roomies</h2>

                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Roomies</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Contract Ends</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Bob</td>
                                            <td>Boberson</td>
                                            <td>11/01/2019</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Frank</td>
                                            <td>Frankfurt</td>
                                            <td>01/01/2019</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div id="tasks">

                                <h2>Tasks</h2>
                                <table className="table table-borderless">
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
                                </table>
                            </div>

                            <div id="bills">
                                <h2>Current Bills</h2>
                                <table className="table table-borderless">
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
                                </table>
                            </div>

                            <div id="messages">
                                <h2>Messages</h2>
                                <table className="table table-borderless">
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
                                </table>

                            </div>

                        </div>
                    </Row>
                </Col>

            </Container>
        )
    }
}


export default Room;