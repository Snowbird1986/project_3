import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, TextArea } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import { Login } from "../../components/Facebook/Login";
import Calendar from 'react-calendar';
import API from "../../utils/API";
import "./user.css";

class User extends Component {

    state={

        user: [],
        firstName: "",
        lastName: "",
        email: "",
        introduction: "",
        phoneNumber: "",
        birthday: "Birthday",
        gender: "",
        city: "",
        state: "",
        zip: "",
        budget: "",
        moveInDate: "Move In Date",
        date: new Date(),
        date2: new Date(),
        hideCalender: true,
        hideCalender2: true

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
    changeMoveInDate = event =>{
        this.setState({ hideCalender: !this.state.hideCalender });
        //console.log(document.getElementById('react-calendar').style);
        //console.log(event.target.style)
        // if(this.state.hideCalender==false){

        // }
    }
    onChange = date => {
        // console.log("clicked1")
        this.setState({ date: date });
        this.moveInDate(date);
        this.setState({ hideCalender: !this.state.hideCalender });

    };
    moveInDate = (value) => {
        value = value.toString().slice(0, -41)
        this.setState({
            moveInDate: value
        });
    }
    changeBirthday = event =>{
        this.setState({ hideCalender2: !this.state.hideCalender2 });
        //console.log(document.getElementById('react-calendar').style);
        //console.log(event.target.style)
        // if(this.state.hideCalender==false){

        // }
    }
    onChange2 = date2 => {
        // console.log("clicked2")
        this.setState({ date2: date2 });
        this.Birthday(date2);
        this.setState({ hideCalender2: !this.state.hideCalender2 });

    };
    Birthday = (value) => {
        value = value.toString().slice(0, -41)
        this.setState({
            birthday: value
        });
    }

    componentDidMount=()=>{
        console.log(this.props)
    }


    render() {
        let hideCalendar = this.state.hideCalender ? "react-calendarHide" : "react-calendarShow";
        let hideCalendar2 = this.state.hideCalender2 ? "react-calendarHide" : "react-calendarShow";
        return (

            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Enter User Info</h1>
                        </Jumbotron>
                        <div className="col-md-8 offset-md-2" id="formdiv">
                            <form>
                                <Row>
                                    <Col size="md-6">
                                        <Input
                                            value={this.state.firstName==="" ? this.props.firstName : this.state.firstName}
                                            onChange={this.handleInputChange}
                                            name="firstName"
                                            placeholder={this.props.firstName ? this.props.firstName : "First Name"}
                                        />
                                    </Col>
                                    <Col size="md-6">
                                        <Input
                                            value={this.state.lastName==="" ? this.props.lastName : this.state.lastName}
                                            onChange={this.handleInputChange}
                                            name="lastName"
                                            placeholder={this.props.lastName ? this.props.lastName : "Last Name"}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="md-12">
                                        <Input
                                            value={this.state.email==="" ? this.props.email : this.state.email}
                                            onChange={this.handleInputChange}
                                            name="email"
                                            placeholder={this.props.email ? this.props.email : "Email"}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="md-6">
                                        <Input
                                            value={this.state.phoneNumber}
                                            onChange={this.handleInputChange}
                                            name="phoneNumber"
                                            placeholder="Phone Number"
                                        />
                                    </Col>
                                    <Col size="md-6">
                                        {/* <Input
                                            value={this.state.birthday}
                                            onChange={this.handleInputChange}
                                            name="birthday"
                                            placeholder="Birthday"
                                        /> */}
                                        <Input
                                            value={this.state.birthday}
                                            onChange={this.handleInputChange}
                                            name="birthday"
                                            placeholder={this.state.birthday}
                                            onClick={this.changeBirthday.bind(this)}
                                        ></Input>
                                        <Calendar
                                            className={hideCalendar2}
                                            onChange={this.onChange2}
                                            value={this.state.date2}>
                                        </Calendar>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="md-4">
                                        <select>
                                            <option value="">Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Not Disclosed">Not Disclosed</option>
                                        </select>
                                    </Col>
                                    <Col size="md-4">
                                        <Input
                                            value={this.state.budget}
                                            onChange={this.handleInputChange}
                                            name="budget"
                                            placeholder="Budget ($/Month)"
                                        />
                                    </Col>
                                    <Col size="md-4">
                                        <Input
                                            value={this.state.moveInDate}
                                            onChange={this.handleInputChange}
                                            name="moveInDate"
                                            placeholder={this.state.moveInDate}
                                            onClick={this.changeMoveInDate.bind(this)}
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
                                            value={this.state.introduction}
                                            onChange={this.handleInputChange}
                                            name="introduction"
                                            placeholder="Introduction"
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


export default User;