import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import TableRowTodoPortal from "../../components/TableRowTodoPortal";
import TableRowBillPortal from "../../components/TableRowBillPortal";
import TableRowMessagePortal from "../../components/TableRowMessagePortal";
import TableRowUserPortal from "../../components/TableRowUserPortal";
import moment from 'moment';
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
        pendinguser: [],
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
            .then(this.props.history.push(`/refresh/userPortal`));
        })
        // console.log(e.target.value)
        // API.updateBills(e.target.value,{ paid: true }).then(this.props.history.push(`/refresh/userPortal`));
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
            .then(this.props.history.push(`/refresh/userPortal`));
        })
        // console.log(e.target.value)
        // API.updateTodos(e.target.value,{ completed: true }).then(this.props.history.push(`/refresh/userPortal`));
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
                contracts: res.data[0].contract,
                todos: res.data[0].todo,
                messages: res.data[0].message,
                pendinguser: res.data[0].pendinguser,
              })
            }
        )
    }
    componentDidUpdate =()=>{
        console.log(this.state)
        console.log(this.props)
    }
    createRoom =()=>{
        this.props.history.push(`/roomCreate`)
    }
    viewRoom =()=>{
        this.props.history.push(`/room`)
    }
    editRoom =()=>{
        this.props.history.push(`/roomEdit`)
    }
    deleteRoom =()=>{
        this.props.history.push(`/room`)
    }
    trashMessage=(e)=>{
        console.log(e.target.value)
        API.updateMessages(e.target.value,{ read: true }).then(this.props.history.push(`/refresh/userPortal`));
    }
    approveUser =()=>{
        
    }
    rejectUser =()=>{
        
    }
    viewUser =()=>{
        
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
                                    {!this.state.roomId &&
                                        <div className="col-md-2" >
                                        <button id="view" onClick={this.createRoom}>Create New Room</button>
                                        </div>
                                    }
                                    {this.state.roomId && this.props.id!==this.state.owner._id &&
                                        <div className="row col-md-7">
                                            <div className="col-md-4" >
                                            <button id="view" onClick={this.viewRoom}>View Room</button>
                                            </div>
                                            {/* <div className="col-md-4 " >
                                            <button onClick={this.editRoom}>Edit Room</button>
                                            </div>
                                            <div className="col-md-4" >
                                            <button onClick={this.deleteRoom}>Delete Room</button>
                                            </div> */}
                                        </div>
                                    }
                                    {this.props.id!==null&& this.props.id==this.state.owner._id &&
                                        <div className="row col-md-7">
                                            <div className="col-md-4" >
                                            <button id="view" onClick={this.viewRoom}>View Room</button>
                                            </div>
                                            <div className="col-md-4 " >
                                            <button id="edit" onClick={this.editRoom}>Edit Room</button>
                                            </div>
                                            <div className="col-md-4" >
                                            <button className="fin" onClick={this.deleteRoom}>Delete Room</button>
                                            </div>
                                        </div>
                                    }
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
                                            {
                                                this.state.bills.map((bill, i) =>{
                                                    return <TableRowBillPortal 
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
                                                    username={this.props.username}
                                                    />
                                                    })
                                                }
                                        </Table>
                                    </div>
                                    <div className="col-md-10 offset-md-1">
                                    <h2>Your Tasks</h2>
                                        <Table>                                            
                                            <thead>
                                                <tr>
                                                    <th scope="col"></th>
                                                    <th scope="col" width="15%">Task</th>
                                                    <th scope="col" width="20%">Assigned To</th>
                                                    {/* <th scope="col">Recurring</th> */}
                                                    <th scope="col" width="30%">Due Date</th>
                                                    {/* <th scope="col">Category</th> */}
                                                    <th scope="col" width="30%">Description</th>
                                                    <th scope="col" width="5%">Fin</th>
                                                </tr>
                                            </thead>
                                            {
                                                this.state.todos.map((todo, i) =>{
                                                    return <TableRowTodoPortal 
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
                                                    username={this.props.username}
                                                    />
                                                    })
                                                }
                                        </Table>
                                    </div>
                                    <div className="col-md-10 offset-md-1">
                                    <h2>Your Messages</h2>
                                        <Table>                                            
                                            <thead>
                                                <tr>
                                                    <th scope="col"></th>
                                                    <th scope="col" width="10%">Subject</th>
                                                    <th scope="col" width="10%">From:</th>
                                                    {/* <th scope="col" width="10%">To:</th> */}
                                                    <th scope="col" width="20%">Date Posted</th>
                                                    <th scope="col" width="55%">Message</th>
                                                    <th scope="col" width="5%">Fin</th>
                                                </tr>
                                            </thead>
                                            {
                                                this.state.messages.map((message, i) =>{
                                                    return <TableRowMessagePortal 
                                                    subject={message.title}
                                                    from={message.from}
                                                    to={message.to}
                                                    message={message.body}
                                                    datePosted={message.dateAdded}
                                                    read={message.read}
                                                    id={message._id}
                                                    key={message._id}
                                                    trashMessage={this.trashMessage}
                                                    username={this.props.username}
                                                    />
                                                    })
                                                }
                                        </Table>
                                    </div>                              
                                </Row>
                                <div className="col-md-10 offset-md-1" id="createroomButton">
                                    {/* {!this.state.roomId &&
                                        <div className="col-md-3 offset-md-1" >
                                        <button onClick={this.createRoom}>Create New Room</button>
                                        </div>
                                    } */}
                                    {this.props.id!==null&& this.props.id==this.state.owner._id &&
                                         <div>
                                         <h2>Potential Roomies</h2>
                                             <Table>                                            
                                                 <thead>
                                                    <tr>
                                                        <th scope="col"></th>
                                                        <th scope="col" width="15%">Name</th>
                                                        <th scope="col" width="15%">Phone</th>
                                                        <th scope="col" width="20%">Email</th>
                                                        <th scope="col" width="10%">Budget</th>
                                                        <th scope="col" width="5%">Age</th>
                                                        <th scope="col" width="5%">Gender</th>
                                                        <th scope="col" width="20%">Move In Date</th>
                                                        {/* <th scope="col" width="10%">City</th>
                                                        <th scope="col" width="5%">State</th>
                                                        <th scope="col" width="5%">Zip</th> */}
                                                        <th scope="col" width="5%">App</th>
                                                        <th scope="col" width="5%">Rej</th>
                                                    </tr>
                                                 </thead>
                                                 {
                                                     this.state.pendinguser.map((user, i) =>{
                                                        return <TableRowUserPortal 
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
                                                            city={user.city}
                                                            state={user.state}
                                                            zip={user.zip}
                                                            id={user._id}
                                                            key={user._id}
                                                            imgUrl={user.imgUrl}
                                                            viewUser={this.viewUser}
                                                            approveUser={this.approveUser}
                                                            rejectUser={this.rejectUser}
                                                            />
                                                        })
                                                     }
                                             </Table>
                                         </div>      
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
            </Container>
        )
    }
}


export default UserPortal;