import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
// import UserCard from "../../components/userCard";
import API from "../../utils/API";
import "./UserPortal.css";
import Table from "../../components/Table";

class UserPortal extends Component {
    state = {
        roomId:"",
        name: "",
        description: "",
        rent: "",
        category: "",
        openSpots: "",
        availableDate: "",
        city: "",
        state: "",
        zip: "",
        users:[],
        owner: "",
        bills: [],
        todos: [],
        messages: [],
    }

    payBill=()=>{

    }
    completeTask =()=>{
        
    }
    componentDidMount = () => {
        console.log(this.props)&
        API.getUserRoom(this.props.id).then(res =>
            // console.log(res)&
            {res.data[0]&&
            this.setState({ 
                roomId: res.data[0]._id,
                name: res.data[0].name,
                description: res.data[0].description,
                rent: res.data[0].rent,
                category: res.data[0].category,
                openSpots: res.data[0].openSpots,
                availableDate: res.data[0].availableDate,
                city: res.data[0].city,
                state: res.data[0].state,
                zip: res.data[0].zip,
                users: res.data[0].user,
                owner: res.data[0].user[0],
                bills: res.data[0].bill,
                todos: res.data[0].todo,
                messages: res.data[0].message,
              })
            }
        )
    }
    createRoom =()=>{
        this.props.history.push(`/roomCreate`)
    }
    viewRoom =()=>{
        this.props.history.push(`/room`)
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
                                                    <th scope="col"></th>
                                                    <th scope="col" width="15%">Bill Name</th>
                                                    <th scope="col" width="20%">Assigned To</th>
                                                    <th scope="col" width="10%">Amount</th>
                                                    <th scope="col" width="20%">Due Date</th>
                                                    <th scope="col" width="30%">Description</th>
                                                    <th scope="col" width="5%">Fin</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row"></th>
                                                        <td>Electric</td>
                                                        <td>Jeff Kounter</td>
                                                        <td>$95</td>
                                                        <td>11/1/2018</td>
                                                        <td>Utilities</td>
                                                        <td><button onClick={this.payBill}>X</button></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div className="col-md-10 offset-md-1">
                                    <h2>Your Tasks</h2>
                                        <Table>                                            
                                            <thead>
                                                <tr>
                                                    <th scope="col"></th>
                                                    <th scope="col" width="20%">Task</th>
                                                    <th scope="col" width="25%">Assigned To</th>
                                                    {/* <th scope="col">Recurring</th> */}
                                                    <th scope="col" width="20%">Due Date</th>
                                                    {/* <th scope="col">Category</th> */}
                                                    <th scope="col" width="30%">Description</th>
                                                    <th scope="col" width="5%">Fin</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                        <td>Mow yard</td>
                                                        <td>Jeff Kounter</td>
                                                        <td>11/1/2018</td>
                                                        <td>Weedwhack and mow lawn</td>
                                                        <td><button onClick={this.completeTask}>X</button></td>
                                                    </tr>
                                            </tbody>
                                        </Table>
                                    </div>                          
                                </Row>
                                <div className="col-md-12" id="createroomButton">
                                        {!this.state.roomId &&
                                            <div className="col-md-3 offset-md-1" >
                                            <button onClick={this.createRoom}>Create New Room</button>
                                            </div>
                                        }
                                        {this.state.roomId &&
                                            <div className="col-md-3 offset-md-1" >
                                            <button onClick={this.viewRoom}>View Room</button>
                                            </div>
                                        }
                                        {/* <div className="col-md-3 offset-md-1" >
                                            <button onClick={this.createRoom}>Create New Room</button>
                                        </div> */}
                                        {/* <div className="col-md-3 offset-md-1" >
                                            <button onClick={this.viewRoom}>View Room</button>
                                        </div> */}
                                    </div>
                            </div>
                        </Col>
                    </Row>
            </Container>
        )
    }
}


export default UserPortal;