import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, TextArea } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import Calendar from 'react-calendar';
import API from "../../utils/API";
import "./RoomCreate.css";

class RoomCreate extends Component {
    state = {
        room: [],
        name: "",
        description: "",
        rent: "",
        category: "",
        openSpots: "",
        availableDate: "Available Date",
        dateAdded: "",
        city: "",
        state: "",
        zip: "",
        date: new Date(),
        hideCalender: true
    }

    changeAvailableDate = event => {
        this.setState({ hideCalender: !this.state.hideCalender });
        //console.log(document.getElementById('react-calendar').style);
        //console.log(event.target.style)
        // if(this.state.hideCalender==false){

        // }
    }
    onChange = date => {
        this.setState({ date: date });
        this.availableDate(date);
        this.setState({ hideCalender: !this.state.hideCalender });

    };
    availableDate = (value) => {
        value = value.toString().slice(0, -41)
        this.setState({
            availableDate: value
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
                            Enter Room Info
                </Jumbotron>
                        <div className="col-md-8 offset-md-2" id="formdiv">
                            <form>
                                <Row>
                                    <Col size="md-6">
                                        <Input
                                            value={this.state.name}
                                            onChange={this.handleInputChange}
                                            name="name"
                                            placeholder="Title"
                                        />
                                    </Col>
                                    <Col size="md-6">
                                        <Input
                                            value={this.state.category}
                                            onChange={this.handleInputChange}
                                            name="category"
                                            placeholder="Category"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="md-3">
                                        <Input
                                            value={this.state.rent}
                                            onChange={this.handleInputChange}
                                            name="rent"
                                            placeholder="Rent"
                                        />
                                    </Col>
                                    <Col size="md-4">
                                        <Input
                                            value={this.state.openSpots}
                                            onChange={this.handleInputChange}
                                            name="openSpots"
                                            placeholder="Roommate spots Remaining"
                                        />
                                    </Col>
                                    <Col size="md-5">
                                        <Input
                                            value={this.state.availableDate}
                                            onChange={this.handleInputChange}
                                            name="availableDate"
                                            placeholder={this.state.availableDate}
                                            onClick={this.changeAvailableDate.bind(this)}
                                        ></Input>
                                        <Calendar
                                            className={hideCalendar}
                                            onChange={this.onChange}
                                            value={this.state.date}>
                                        </Calendar>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="md-5">
                                        <Input
                                            value={this.state.city}
                                            onChange={this.handleInputChange}
                                            name="city"
                                            placeholder="City"
                                        />
                                    </Col>
                                    <Col size="md-3">
                                        <Input
                                            value={this.state.state}
                                            onChange={this.handleInputChange}
                                            name="state"
                                            placeholder="State"
                                        />
                                    </Col>
                                    <Col size="md-4">
                                        <Input
                                            value={this.state.zip}
                                            onChange={this.handleInputChange}
                                            name="zip"
                                            placeholder="Zip"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="md-12">
                                        <TextArea
                                            value={this.state.description}
                                            onChange={this.handleInputChange}
                                            name="description"
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


export default RoomCreate;