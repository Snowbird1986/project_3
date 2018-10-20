import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, TextArea } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import Calendar from 'react-calendar';
import API from "../../utils/API";
import "./RoomApply.css";
// var ObjectId = require('mongoose').Types.ObjectId


class RoomApply extends Component {
    state = {
        room: [],
        name: "",
        userID: "",
        email: "",
        img: "",
        description: "",
        rent: "",
        roomID: "",
        gender: "",
        length: "",
        availableDate: "Available Date",
        date: new Date(),
        hideCalender: true
    }

    componentDidMount = () => {
        this.setState({
            name: this.props.firstName,
            rent: this.props.budget,
            userID: this.props.userID,
            email: this.props.email,
            gender: this.props.gender,
            img: this.props.img,
            birthday: this.props.birthday,
            roomID: this.props.roomID
        })
    }

    handleOnChange = (e) => {
        this.setState({
            length: e.target.value
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
        let contractData = {
            userID: this.state.userID,
            roomID: this.state.roomID,
            description: this.state.description,
            length: this.state.length,
            rent: this.state.rent,
            availableDate: this.state.availableDate,

        }
        console.log(contractData)
        if (
            this.state.rent &&
            this.state.userID &&
            this.state.length &&
            this.state.description &&
            this.state.availableDate &&
            this.state.roomID
        ) {
            API.saveContracts(contractData)
                .then(result => {

                    API.updateRooms(this.props.roomID, { "$push": { contract: result.data._id } })
                    API.updateRooms(this.props.roomID, { "$push": { pendinguser: this.props.userID } })
                        .then(this.props.resetApply);
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
                            Enter Contract Offer Details
                </Jumbotron>
                        <div className="col-md-8 offset-md-2" id="formdiv">
                            <form>
                                <Row>
                                    <Col size="md-4">
                                        <select defaultValue="" onChange={this.handleOnChange}>
                                            <option value="">Frequency</option>
                                            <option value="months">Monthly</option>
                                            <option value="months">Semi-Annual</option>
                                            <option value="years">Yearly</option>
                                        </select>
                                    </Col>
                                    <Col size="md-3">
                                        <Input
                                            value={this.state.rent}
                                            onChange={this.handleInputChange}
                                            name="rent"
                                            placeholder="Rent"
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
                                        Submit Application
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


export default RoomApply;