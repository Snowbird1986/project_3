import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, TextArea } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import Calendar from 'react-calendar';
import API from "../../utils/API";
import "./TodoCreate.css";

class TodoCreate extends Component {
    state = {
        todo: [],
        title: "",
        body: "",
        completed: "",
        recurring: "",
        frequency: "",
        assignee: "",
        dateAdded: "",
        dueDate: "Due Date",
        date: new Date(),
        hideCalender: true
    }

    handleOnChange = (e) => {
        this.setState({
            category: e.target.value
        })
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

    render() {
        let hideCalendar = this.state.hideCalender ? "react-calendarHide" : "react-calendarShow";
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            Enter Chore Info
                </Jumbotron>
                        <div className="col-md-8 offset-md-2" id="formdiv">
                            <form>
                                <Row>
                                    <Col size="md-6">
                                        <Input
                                            value={this.state.title}
                                            onChange={this.handleInputChange}
                                            name="title"
                                            placeholder="Title"
                                        />
                                    </Col>
                                    <Col size="md-6">
                                        <Input
                                            value={this.state.assignee}
                                            onChange={this.handleInputChange}
                                            name="assignee"
                                            placeholder="Assign responsibility"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="md-4">
                                        <select>
                                            <option value="null">Recurring:</option>
                                            <option value="True">True</option>
                                            <option value="False">False</option>
                                        </select>
                                    </Col>
                                    <Col size="md-4">
                                        <Input
                                            value={this.state.frequency}
                                            onChange={this.handleInputChange}
                                            name="frequency"
                                            placeholder="Frequency"
                                        />
                                    </Col>
                                    <Col size="md-4">
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
                                        <Input
                                            value={this.state.category}
                                            onChange={this.handleInputChange}
                                            name="category"
                                            placeholder="Category"
                                        />
                                        {/* <select defaultValue="" onChange={this.handleOnChange}>
                                            <option value="">Category</option>
                                            <option value="Dormroom">Dorm Room</option>
                                            <option value="Apartment">Apartment</option>
                                            <option value="Duplex">Duplex</option>
                                            <option value="House">House</option>
                                        </select> */}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="md-12">
                                        <TextArea
                                            value={this.state.body}
                                            onChange={this.handleInputChange}
                                            name="body"
                                            placeholder="Description"
                                            id="description"
                                        />
                                    </Col>
                                </Row>
                                <div className="buttons">
                                    <FormBtn onClick={this.handleFormSubmit}>
                                        Poop
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


export default TodoCreate;