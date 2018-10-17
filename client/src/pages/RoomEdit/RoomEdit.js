import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, TextArea } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import Calendar from 'react-calendar';
import API from "../../utils/API";
import "./RoomEdit.css";
// var ObjectId = require('mongoose').Types.ObjectId


class RoomCreate extends Component {
    state = {
        room: [],
        name: "",
        description: "",
        rent: "",
        category: "",
        openSpots: "",
        availableDate: "",
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
            name: this.state.name?this.state.name:this.props.name,
            description: this.state.description?this.state.description:this.props.description,
            rent: this.state.rent?this.state.rent:this.props.rent,
            category: this.state.category?this.state.category:this.props.category,
            openSpots: this.state.openSpots?this.state.openSpots:this.props.openSpots,
            availableDate: this.state.availableDate?this.state.availableDate:this.props.availableDate,
            city: this.state.city?this.state.city:this.props.city,
            state: this.state.state?this.state.state:this.props.state,
            zip: this.state.zip?this.state.zip:this.props.zip,
            
        }
        console.log(roomData)
        if ((this.state.name|| this.props.name)&&
            (this.state.description|| this.props.description)&&
            (this.state.rent|| this.props.rent)&&
            (this.state.category|| this.props.category)&&
            (this.state.openSpots|| this.props.openSpots)&&
            (this.state.availableDate|| this.props.availableDate)&&
            (this.state.city|| this.props.city)&&
            (this.state.state|| this.props.state)&&
            (this.state.zip|| this.props.zip)
        ) {
            API.updateRooms(this.props.roomID, roomData)
                // .then(result => {
                    // function(err,docsInserted){
                    // // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
                    // // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
                    // // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
                    // return 
                    // console.log(result.data._id)
                    // console.log(this.props.id)
                    // API.updateRooms(result.data._id,{"$push":{ user: this.props.id }})
                    .then(res => this.props.history.push(`/room`))
                    // ;
                //   }
                // )
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
                                            placeholder={this.props.name}
                                        />
                                    </Col>
                                    <Col size="md-6">
                                        <select defaultValue="" onChange={this.handleOnChange}>
                                            <option value="">{this.props.category}</option>
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
                                            placeholder={this.props.rent}
                                        />
                                    </Col>
                                    <Col size="md-4">
                                        <Input
                                            value={this.state.openSpots}
                                            onChange={this.handleInputChange}
                                            name="openSpots"
                                            placeholder={this.props.openSpots}
                                        />
                                    </Col>
                                    <Col size="md-5">
                                        <Input
                                            value={this.state.availableDate}
                                            onChange={this.handleInputChange}
                                            name="availableDate"
                                            placeholder={this.props.availableDate}
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
                                            placeholder={this.props.city}
                                        />
                                    </Col>
                                    <Col size="md-3">
                                        <Input
                                            value={this.state.state}
                                            onChange={this.handleInputChange}
                                            name="state"
                                            placeholder={this.props.state}
                                        />
                                    </Col>
                                    <Col size="md-4">
                                        <Input
                                            value={this.state.zip}
                                            onChange={this.handleInputChange}
                                            name="zip"
                                            placeholder={this.props.zip}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="md-12">
                                        <TextArea
                                            value={this.state.description}
                                            onChange={this.handleInputChange}
                                            name="description"
                                            placeholder={this.props.description}
                                            id="description"
                                        />
                                    </Col>
                                </Row>
                                <div className="buttons">
                                    <FormBtn onClick={this.handleFormSubmit}>
                                        Update Room
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