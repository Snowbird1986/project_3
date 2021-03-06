import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, TextArea } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import RoomCard from "../../components/roomCard";
import RoomApply from "../../components/RoomApply";
import _ from 'lodash';
import Calendar from 'react-calendar';
import API from "../../utils/API";
// import ReactTimeout from 'react-timeout'

import "./RoomSearch.css";
const objectForSearch = {}


class RoomSearch extends Component {
    constructor(props) {
        super(props)
            this.state = {
                room: [],
                roomID: "",
                userID: "",
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
                on: false
            }
            this.applyRoom=this.applyRoom.bind(this)
            this.resetApply=this.resetApply.bind(this)
        }
    componentDidMount = () => {
        //this.handleClick

    }
    componentDidUpdate = () => {
        console.log(this.state)

        // if (this.state.on == false) {
        //     setTimeout(this.toggle, 5000)
        // }
        //console.log(this.state.on)
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
            // console.log(this.state[k])
            // console.log(!!this.state[k])
            // console.log(this.state[k].length)
            // console.log(this.state[k].length > 0)
            console.log(!!this.state[k] && this.state[k].length > 0)
            if (!!this.state[k] && this.state[k].length > 0) {
                if (k == "rent") {
                        matchValues.push(room[k] && parseInt(room[k]) < parseInt(this.state[k]));
                }
                else {
                    matchValues.push(room[k] && room[k] == this.state[k]);
                }
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



            API.getRooms({
                openSpots:{$gt:0}
            })
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
    applyRoom = (id) => {
        // e.preventDefault();
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.value)
        console.log(id)
        this.setState({
            roomID: id,
            apply: true,
        })
    }
    resetApply = () => {
        this.setState({
            apply: false,
            roomID: ""
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
        console.log("Nothing!!")



            API.getRooms({
                openSpots:{$gt:0}
            })
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
    // toggle = () => {
    //     this.setState({ on: !this.state.on })
    // }
    // handleClick = (e) => {
    //     console.log("handleClick Fired")
    //     setTimeout(this.toggle, 5000) 
    //     // call the `toggle` function after 5000ms
    //     // console.log(this.props)
    // }


    render() {
        let hideCalendar = this.state.hideCalender ? "react-calendarHide" : "react-calendarShow";
        let hideCalendar2 = this.state.hideCalender2 ? "react-calendarHide" : "react-calendarShow";
        var applyRoom  =   this.applyRoom;
        var resetApply  =   this.resetApply;
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">

                        {!this.state.apply &&
                        <Jumbotron>
                            Search Rooms:
                        </Jumbotron>
                        }
                        {!this.state.apply &&
                        <div style={{ margin: "10px" }} className="col-md-8 offset-md-2" id="rooms" >
                            {this.state.rooms.map((room, idx) =>
                                <RoomCard
                                    key={`img-${idx}`}
                                    applyRoom={this.applyRoom.bind(this)}
                                    roomID={this.state.roomID}
                                >{room} </RoomCard>
                            )}

                            {/* <div style={{ width: "40px", height: "40px", backgroundColor: "black" }} onClick={this.viewRoom}></div> */}
                        </div>
                        }
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
                                    resetApply={this.resetApply.bind(this)}
                                />
                            }
                        </div>
                        {!this.state.apply &&
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
                                    <FormBtn onClick={this.handleFormSubmit}>
                                        Find a room
                                    </FormBtn>
                                </div>
                            </form>
                        </div>
                        }
                    </Col>
                </Row>
            </Container >
        )
    }
}


export default RoomSearch;
