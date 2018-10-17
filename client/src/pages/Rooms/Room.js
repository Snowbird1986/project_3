import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, TextArea } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Table from "../../components/Table";
import TableRow from "../../components/TableRow";
import TableRowBill from "../../components/TableRowBill";
import TableRowMessage from "../../components/TableRowMessage";
import TableRowTodo from "../../components/TableRowTodo";
import BillUserCard from "../../components/BillUserCard";
import moment from 'moment';
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
    handleOnChange2 = (e) => {
        this.setState({
            to: e.target.value
        })
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        console.log(this.props)
        let messageData = {
            title: this.state.subject,
            to: this.state.to,
            from: this.props.username,
            body: this.state.message, 
        }
        console.log(messageData)
        if (this.state.subject &&
            this.state.to &&
            this.props.username &&
            this.state.message
        ) {
            API.saveMessages(
                // {
                messageData
                // title: this.state.name,
                // category: this.state.description,
                // description: this.state.rent,
                // amount: this.state.category,
                // dueDate: this.state.openSpots,
                // assignee: this.state.availableDate,
            // }
        )
                .then(result => {
                    // function(err,docsInserted){
                    // // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
                    // // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
                    // // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
                    // return 
                    // console.log(result.data._id)
                    // console.log(this.props.id)
                    API.updateRooms(this.state.roomID,{"$push":{ message: result.data._id }}).then(console.log)
                    .then(res => this.props.history.push(`/room`));
                  }
                )
                .catch(err => console.log(err));
            } else { "did not post" }
    };
    viewUser =()=>{
        this.props.history.push(`/userHome`)
    }
    createTask =()=>{
        this.props.history.push(`/todoCreate`)
    }
    completeTask =(event)=>{
        event.persist()
        API.getTodo(event.target.value).then(res=> {
            event.persist()
            API.updateTodos(event.target.value,
                { 
                completed: !res.data.recurring,
                dueDate:moment(res.data.dueDate).add(1, res.data.frequency)?moment(res.data.dueDate).add(1, res.data.frequency):""
            })
            .then(this.props.history.push(`/refresh/room`));
        })
        // console.log(e.target.value)
        // API.updateTodos(e.target.value,{ completed: true }).then(this.props.history.push(`/refresh/room`));
    }
    createBill =()=>{
        this.props.history.push(`/billCreate`)
    }
    payBill=(event)=>{
        event.persist()
        API.getBill(event.target.value).then(res=> {
            event.persist()
            API.updateBills(event.target.value,
                { 
                paid: !res.data.recurring,
                dueDate:moment(res.data.dueDate).add(1, res.data.frequency)?moment(res.data.dueDate).add(1, res.data.frequency):""
            })
            .then(this.props.history.push(`/refresh/room`));
        })
        // console.log(e.target.value)
        // API.updateBills(e.target.value,{ paid: true }).then(this.props.history.push(`/refresh/room`));
    }
    trashMessage=(e)=>{
        console.log(e.target.value)
        API.updateMessages(e.target.value,{ read: true }).then(this.props.history.push(`/refresh/room`));
    }
    componentDidMount = () => {
        console.log(this.props)
        API.getUserRoom(this.props.id).then(res =>
            // console.log(res)&
            {res.data[0]&&
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
            }
        )
    }
    componentDidUpdate=()=>{
        console.log(this.state)
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
                                    // viewUser={this.state.viewUser}
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
                            {
                                this.state.todos.map((todo, i) =>{
                                    return <TableRowTodo 
                                    assignee={todo.assignee}
                                    category={todo.category}
                                    body={todo.body}
                                    dueDate={todo.dueDate}
                                    completed={todo.completed}
                                    recurring={todo.recurring}
                                    frequency={todo.frequency}
                                    title={todo.title}
                                    id={todo._id}
                                    key={todo._id}
                                    completeTask={this.completeTask}
                                    />
                                    })
                                }
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
                                        payBill={this.payBill}
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
                                            <th scope="col" width="10%">From:</th>
                                            <th scope="col" width="10%">To:</th>
                                            <th scope="col" width="15%">Date Posted</th>
                                            <th scope="col" width="50%">Message</th>
                                            <th scope="col" width="5%">Fin</th>
                                        </tr>
                                    </thead>
                                    {
                                    this.state.messages.map((message, i) =>{
                                        return <TableRowMessage 
                                        subject={message.title}
                                        from={message.from}
                                        to={message.to}
                                        message={message.body}
                                        datePosted={message.dateAdded}
                                        read={message.read}
                                        id={message._id}
                                        key={message._id}
                                        trashMessage={this.trashMessage}
                                        />
                                        })
                                    }
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
                                            <select defaultValue="" onChange={this.handleOnChange2}>
                                                <option value="">To:</option>
                                                {
                                                this.state.users.map((user, i) =>{
                                                    return <BillUserCard 
                                                    firstName={user.firstName}
                                                    lastName={user.lastName}
                                                    id={user._id}
                                                    key={user._id}
                                                    imgUrl={user.imgUrl}
                                                    />
                                                    })
                                                }
                                            </select>
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
                                        Post Message
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