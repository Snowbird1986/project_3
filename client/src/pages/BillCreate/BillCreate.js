import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, TextArea } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import BillUserCard from "../../components/BillUserCard";
import Calendar from 'react-calendar';
import API from "../../utils/API";
import "./BillCreate.css";

class BillCreate extends Component {
    state = {
        bill: [],
        title: "",
        category: "",
        description: "",
        amount: "",
        dueDate: "Due Date",
        paid: "",
        assignee: "",
        dateAdded: "",
        date: new Date(),
        hideCalender: true,
        users:[]
    }

    handleOnChange = (e) => {
        this.setState({
            category: e.target.value
        })
    }
    handleOnChange2 = (e) => {
        this.setState({
            assignee: e.target.value
        })
    }
    componentDidMount(){
        console.log(this.props)
        API.getUserRoom(this.props.id).then(res =>
            console.log(res)&
            this.setState({
                users: res.data[0].user
              })
        )
    }

    changeDueDate = event => {
        this.setState({ hideCalender: !this.state.hideCalender });
        //console.log(document.getElementById('react-calendar').style);
        //console.log(event.target.style)
        // if(this.state.hideCalender==false){

        // }
    }
    onChange = date => {
        this.setState({ date: date });
        this.dueDate(date);
        this.setState({ hideCalender: !this.state.hideCalender });

    };
    dueDate = (value) => {
        value = value.toString().slice(0, -41)
        this.setState({
            dueDate: value
        });
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
        let billData = {
            title: this.state.title,
            category: this.state.category,
            assignee: this.state.assignee,
            amount: this.state.amount,
            dueDate: this.state.dueDate,
            description: this.state.description, 
        }
        console.log(billData)
        if (this.state.title &&
            this.state.category &&
            this.state.assignee &&
            this.state.dueDate &&
            this.state.amount &&
            this.state.description
        ) {
            API.saveBills(
                // {
                billData
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
                    API.updateRooms(this.props.roomID,{"$push":{ bill: result.data._id }}).then(console.log)
                    .then(res => this.props.history.push(`/room`));
                  }
                )
                .catch(err => console.log(err));
            } else { "did not post" }
    };

    render() {
        let hideCalendar = this.state.hideCalender ? "react-calendarHide" : "react-calendarShow";
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            Enter Bill Info
                </Jumbotron>
                        <div className="col-md-8 offset-md-2" id="formdiv">
                            <form>
                                <Row>
                                    <Col size="md-5">
                                        <Input
                                            value={this.state.title}
                                            onChange={this.handleInputChange}
                                            name="title"
                                            placeholder="Title"
                                        />
                                    </Col>
                                    <Col size="md-5">
                                        <select defaultValue="" onChange={this.handleOnChange2}>
                                            <option value="">Assign Responsibility</option>
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
                                    <Col size="md-2">
                                        <select defaultValue="" onChange={this.handleOnChange}>
                                            <option value="">Category</option>
                                            <option value="Gas">Gas</option>
                                            <option value="Electric">Electric</option>
                                            <option value="Trash">Trash</option>
                                            <option value="Water">Water</option>
                                        </select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="md-6">
                                        <Input
                                            value={this.state.amount}
                                            onChange={this.handleInputChange}
                                            name="amount"
                                            placeholder="Amount"
                                        />
                                    </Col>
                                    <Col size="md-6">
                                        <Input
                                            value={this.state.dueDate}
                                            onChange={this.handleInputChange}
                                            name="dueDate"
                                            placeholder={this.state.dueDate}
                                            onClick={this.changeDueDate.bind(this)}
                                        ></Input>
                                        <Calendar
                                            className={hideCalendar}
                                            onChange={this.onChange}
                                            value={this.state.date}>
                                        </Calendar>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="md-12">
                                        <TextArea
                                            value={this.state.body}
                                            onChange={this.handleInputChange}
                                            name="description"
                                            placeholder="Description"
                                            id="description"
                                        />
                                    </Col>
                                </Row>
                                <div className="buttons">
                                    <FormBtn onClick={this.handleFormSubmit}>
                                        Post Bill
                                    </FormBtn>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default BillCreate;