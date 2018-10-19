import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, TextArea } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import RoomCard from "../../components/roomCard";
<<<<<<< HEAD
import RoomApply from "../../components/RoomApply";
import _ from 'lodash';
=======
import Calendar from 'react-calendar';
>>>>>>> SearchRoom
import API from "../../utils/API";

import "./RoomSearch.css";
const objectForSearch = {}


class RoomSearch extends Component {
    state = {
        room: [],
        roomID:"",
        userID:"",
        name: "",
        description: "",
        rent: "",
        budget: "",
        category: "",
        openSpots: "",
        dateAdded: "",
        phone: "",
        gender: "",
        city: "",
        state: "",
        zip: "",
        img: "",
        apply: false,
        rooms: [],
        roomates: [],
        availableDate: "",
        date: new Date(),
        hideCalender: true,
        hideCalender2: true,
    }
    componentDidMount = () => {
        //console.log(this.props)

            // API.getUsers({}).then(res => {
            //         console.log(res)&
            //         this.setState({
            //             img: res.data[0].imgUrl,
            //             name: res.data[0].firstName.toString() + " " + res.data[0].lastName.toString(),
            //             phone: res.data[0].phoneNumber,
            //             gender: res.data[0].gender,
            //             city: res.data[0].city,
            //             state: res.data[0].state,
            //             zip: res.data[0].zip,
            //             budget: res.data[0].budget,
            //             id: res.data[0]._id
            //         });
                    
            //         //console.log(this.state.img)
            //         //console.log(this.state.name)
            //         // console.log(res.data[0].imgUrl)
            //     })
            //     .catch(err => console.log(err));

    }
    componentDidUpdate=()=>{
        console.log(this.state)
    }
    

    filterRoom(room) {
        let comparisons = ["rent",
            "category",
            "openSpots",
            "availableDate",
            "city",
            "state",
            "zip"];

        let matchValues = []
        comparisons.forEach(k => {
            console.log(k, this.state[k], room[k], typeof this.state[k] === "string");
            if (!!this.state[k] && this.state[k].length > 0) {

                matchValues.push(room[k] && room[k] == this.state[k]);
            }
        })

        console.log(matchValues);
        const valid = matchValues.reduce((acc, i) => {
            console.log(acc && i);
            return acc && i
        }, true);
        console.log(valid);
        return valid;
    }

    viewRoom = (event) => {
        event.preventDefault();
        // console.log(this.state.budget.replace(/[^0-9]/, ''))


            API.getRooms({})
                .then(res => {
                    //console.log(this.state.rent)
                    const validRooms = res.data.filter(this.filterRoom.bind(this));

                    this.setState({
                        rooms: validRooms,
                        roomates: Array.apply(null, Array(Number(validRooms.length ? validRooms[0].openSpots : 0)))
                        //roomates: new Array(Number(res.data[0].openSpots))
                    });
                })
                .catch(err => console.log(err));




    };
    applyRoom = (event) => {
        event.preventDefault();
        this.setState({
            roomID:event.target.value,
            apply:true,
        })
    }
    resetApply = () =>{
        this.setState({
            apply:false,
            roomID:""
        })
    }

    handleInputChange = event => {
        //this.handleSearchChange
        console.log(this.availableDate)
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        //console.log(this.availableDate)




    };

    handleSearchChange = event => {
        //const { name, value } = event.target;
        this.setState({

            category: "",
            rent: "",
            openSpots: "",
            availableDate: "",
            dateAdded: "",
            phone: "",
            gender: "",
            city: "",
            state: "",
            zip: ""
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
        // this.setState()
    };
    onChange2 = date => {
        // console.log(this.availableDate)
        //var date = date.toString().slice(0, -41);
        console.log(date)
        this.setState({ date: date });
        this.availableDate(date);
        this.setState({ hideCalender: !this.state.hideCalender });

    };
    changeAvailableDate = event => {
        this.setState({ hideCalender: !this.state.hideCalender });
        //console.log(document.getElementById('react-calendar').style);
        //console.log(event.target.style)
        // if(this.state.hideCalender==false){

        // }
    }
    availableDate = value => {
        value = value.toString().slice(0, -41)
        this.setState({
            availableDate: value
        });
    }

    render() {
        let hideCalendar = this.state.hideCalender ? "react-calendarHide" : "react-calendarShow";
        let hideCalendar2 = this.state.hideCalender2 ? "react-calendarHide" : "react-calendarShow";
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            Search Rooms:
                        </Jumbotron>
                        <div id="rooms">
                            {this.state.rooms.map((room, idx) =>
                                <RoomCard 
                                key={`img-${idx}`}
                                applyRoom={this.applyRoom}
                                roomID={this.state.roomID}
                                >{room} </RoomCard>
                            )}

                            {/* <div style={{ width: "40px", height: "40px", backgroundColor: "black" }} onClick={this.viewRoom}></div> */}
                        </div>
                        <div id="apply">
                            {this.state.apply &&
                                <RoomApply 
                                    userID={this.props.id}
                                    roomID={this.state.roomID}
                                    username={this.props.username}
                                    firstName={this.props.firstName}
                                    lastName={this.props.lastName}
                                    gender={this.props.gender}
                                    budget={this.props.budget}
                                    email={this.props.email}
                                    img={this.props.img}
                                    birthday={this.props.birthday}
                                    resetApply={this.resetApply}
                                />
                            }
                        </div>
                        <div className="col-md-8 offset-md-2" id="formdiv">
                            <form>
                                <Row>
                                    <div className="col-md-8 offset-md-2">
                                        <Input
                                            value={this.state.name}
                                            onChange={this.handleInputChange}
                                            name="name"
                                            placeholder="Title"
                                        />
                                    </div>
                                </Row>
                                <Row>
                                    <div className="col-md-8 offset-md-2">
                                        <Input
                                            value={this.state.category}
                                            onChange={this.handleInputChange}
                                            name="category"
                                            placeholder="Category"
                                        />
                                    </div>
                                </Row>
                                <Row>
                                    <div className="col-md-8 offset-md-2">
                                        <Input
                                            value={this.state.rent}
                                            onChange={this.handleInputChange}
                                            name="rent"
                                            placeholder="Rent"
                                        />
                                    </div>
                                </Row>
                                <Row>
                                    <div className="col-md-8 offset-md-2">
                                        <Input
                                            value={this.state.openSpots}
                                            onChange={this.handleInputChange}
                                            name="openSpots"
                                            placeholder="Roommate spots Remaining"
                                        />
                                    </div>
                                </Row>
                                <Row>
                                    <div className="col-md-8 offset-md-2">
                                        <Input
                                            value={this.state.availableDate}
                                            onChange={this.handleInputChange}
                                            name="availableDate"
                                            placeholder={this.state.availableDate}
                                            onClick={this.changeAvailableDate.bind(this)}
                                        // onClick={console.log("clicked")}
                                        ></Input>
                                        <Calendar
                                            className={hideCalendar}
                                            onChange={this.onChange2}
                                            value={this.state.date}>
                                        </Calendar>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="col-md-8 offset-md-2">
                                        <Row>
                                            <div className="col-md-5">
                                                <Input
                                                    value={this.state.city}
                                                    onChange={this.handleInputChange}
                                                    name="city"
                                                    placeholder="City"
                                                />
                                            </div>
                                            <div className="col-md-3">
                                                <Input
                                                    value={this.state.state}
                                                    onChange={this.handleInputChange}
                                                    name="state"
                                                    placeholder="State"
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <Input
                                                    value={this.state.zip}
                                                    onChange={this.handleInputChange}
                                                    name="zip"
                                                    placeholder="Zip"
                                                />
                                            </div>
                                        </Row>
                                    </div>
                                </Row>
                                <div className="buttons">
                                    <FormBtn onClick={this.viewRoom}>
                                        Find a room
                                    </FormBtn>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container >
        )
    }
}


export default RoomSearch;