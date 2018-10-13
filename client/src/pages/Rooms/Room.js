import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, TextArea } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Table from "../../components/Table";
import TableRow from "../../components/TableRow";
import "./Room.css";

class Room extends Component {
    state = {
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
    viewUser =()=>{
        this.props.history.push(`/userHome`)
    }
    componentDidMount = () => {
        console.log(this.props)
        API.getUserRoom(this.props.id).then(res =>
            console.log(res)&
            this.setState({ 
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
        )
    }

    render() {
        return (

    <Container fluid>    
        <Col size="md-12">
                <Jumbotron>
                    Welcome to Your Room : {this.state.name}
                    <br />
                    Owner: {this.state.owner.firstName} {this.state.owner.lastName}
                </Jumbotron>
                
            <div className="col-md-12" id="formdiv">
                <Row>
                    <div className="col-md-6" id="roomies">
                        <h2>Current Roomies</h2>
                        <Table>
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                this.state.users.map((user, i) =>{
                                    return <TableRow 
                                    firstName={user.firstName}
                                    lastName={user.lastName}
                                    email={user.email}
                                    introduction={user.introduction}
                                    phoneNumber={user.phoneNumber}
                                    birthday={user.birthday}
                                    gender={user.gender}
                                    budget={user.budget}
                                    moveInDate={user.moveInDate}
                                    facebookId={user.facebookId}
                                    id={user._id}
                                    key={user._id}
                                    imgUrl={user.imgUrl}
                                    />
                                    })
                                }
                            </tbody>
                            </Table>
                        </div> 
                        <div className="col-md-6" id="tasks">
                            
                            <h2>Tasks</h2>
                        <Table>
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Task</th>
                                    <th scope="col">Assigned To</th>
                                    {/* <th scope="col">Recurring</th> */}
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
                    </Row>
                    <Row>
                        <div className="col-md-6" id="bills">
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


                        <div className="col-md-6" id="messages">
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
                </div>
            </Col>
            
    </Container>
        )}

}


export default Room;