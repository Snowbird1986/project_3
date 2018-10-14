import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, TextArea } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Table from "../../components/Table";
import TableRow from "../../components/TableRow";
import TableRowBill from "../../components/TableRowBill";
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
        subject: "",
        to: "",
        message: "",
        roomID:""
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        // if (this.state.title && this.state.author) {
        //   API.saveBook({
        //     title: this.state.title,
        //     author: this.state.author,
        //     synopsis: this.state.synopsis
        //   })
        //     .then(res => this.loadBooks())
        //     .catch(err => console.log(err));
        // }
    };
    viewUser =()=>{
        this.props.history.push(`/userHome`)
    }
    createTask =()=>{
        this.props.history.push(`/todoCreate`)
    }
    completeTask =()=>{
        
    }
    createBill =()=>{
        this.props.history.push(`/billCreate`)
    }
    payBill=()=>{

    }
    trashMessage=()=>{

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
                roomID: res.data[0]._id
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
                            <div className="col-md-12">
                                <h2>Tasks <button onClick={this.createTask}>Create Task</button></h2> 
                            </div>
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
                                        <td>Bob Boberson</td>
                                        <td>11/1/2018</td>
                                        <td>Weedwhack and mow lawn</td>
                                        <td><button onClick={this.completeTask}>X</button></td>
                                    </tr>
                                <tr>
                                    <th scope="row">2</th>
                                        <td>Dishes</td>
                                        <td>Frank Frankfurt</td>
                                        <td>10/15/2018</td>
                                        <td>Wash, dry, put away dishes</td>
                                        <td><button onClick={this.completeTask}>X</button></td>
                                    </tr>
                                <tr>
                                
                                </tr>
                            </tbody>
                            </Table>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-md-6" id="bills">
                            <h2>Current Bills <button onClick={this.createBill}>Create Bill</button></h2>
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
                                    {
                                    this.state.bills.map((bill, i) =>{
                                        return <TableRowBill 
                                        amount={bill.amount}
                                        assignee={bill.assignee}
                                        category={bill.category}
                                        description={bill.description}
                                        dueDate={bill.dueDate}
                                        title={bill.title}
                                        paid={bill.paid}
                                        id={bill._id}
                                        key={bill._id}
                                        />
                                        })
                                    }
                            </Table>
                        </div>


                        <div className="col-md-6" id="messages">
                            <h2>Messages</h2>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col" width="10%">Subject</th>
                                            <th scope="col" width="10%">To:</th>
                                            <th scope="col" width="15%">Date Posted</th>
                                            <th scope="col" width="60%">Message</th>
                                            <th scope="col" width="5%">Fin</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Hello</td>
                                            <td>Frank</td>
                                            <td>10/07/2018</td>
                                            <td>Have a great day!!!</td>
                                            <td><button onClick={this.trashMessage}>X</button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            <h2>New Messages</h2>
                                <form id="formdiv">
                                    <Row>
                                        <Col size="md-6">
                                            <Input
                                                value={this.state.subject}
                                                onChange={this.handleInputChange}
                                                name="subject"
                                                placeholder="Subject"
                                            />
                                        </Col>
                                        <Col size="md-6">
                                            <Input
                                                value={this.state.to}
                                                onChange={this.handleInputChange}
                                                name="to"
                                                placeholder="To:"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col size="md-12">
                                            <Input
                                                value={this.state.message}
                                                onChange={this.handleInputChange}
                                                name="message"
                                                placeholder="Message"
                                            />
                                        </Col>
                                    </Row>
                                    <div className="buttons">
                                    <FormBtn onClick={this.handleFormSubmit}>
                                        Post
                                    </FormBtn>
                                </div>
                                </form>
                        </div>
                    </Row>
                </div>
            </Col>
            
    </Container>
        )}

}


export default Room;