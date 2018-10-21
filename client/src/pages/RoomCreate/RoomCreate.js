import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, TextArea } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import Calendar from 'react-calendar';
import API from "../../utils/API";
import "./RoomCreate.css";
// var ObjectId = require('mongoose').Types.ObjectId


class RoomCreate extends Component {
    state = {
        room: [],
        name: "",
        description: "",
        rent: "",
        category: "",
        openSpots: "",
        availableDate: "Available Date",
        city: "",
        state: "",
        zip: "",
        date: new Date(),
        hideCalender: true
    }

    handleOnChange = (e) => {
        this.setState({
            category: e.target.value
        })
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
        console.log(this.state)
        console.log(this.props)
        let roomData = {
            name: this.state.name,
            description: this.state.description,
            rent: this.state.rent,
            category: this.state.category,
            openSpots: this.state.openSpots,
            availableDate: this.state.availableDate,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            
        }
        console.log(roomData)
        if (this.state.name &&
            this.state.description &&
            this.state.rent &&
            this.state.category &&
            this.state.openSpots &&
            this.state.availableDate &&
            this.state.city &&
            this.state.state &&
            this.state.zip 
        ) {
            API.saveRooms({
                name: this.state.name,
                description: this.state.description,
                rent: this.state.rent,
                category: this.state.category,
                openSpots: this.state.openSpots,
                availableDate: this.state.availableDate,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
            })
                .then(result => {
                    // function(err,docsInserted){
                    // // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
                    // // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
                    // // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
                    // return 
                    // console.log(result.data._id)
                    // console.log(this.props.id)
                    API.updateRooms(result.data._id,{"$push":{ user: this.props.id }})
                    .then(result =>{this.props.setRoomID(result.data._id)})
                    .then(res => this.props.history.push(`/room`));
                  }
                )
                .catch(err => console.log(err));
            } else { "did not post" }
    };

    render() {
        let hideCalendar = this.state.hideCalender ? "react-calendarHide" : "react-calendarShow";
        var setRoomID=this.props.setRoomID;
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
                                        <select defaultValue="" onChange={this.handleOnChange}>
                                            <option value="">Category</option>
                                            <option value="Dormroom">Dorm Room</option>
                                            <option value="Apartment">Apartment</option>
                                            <option value="Duplex">Duplex</option>
                                            <option value="House">House</option>
                                        </select>
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
                                        Post Room
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