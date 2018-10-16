import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, TextArea } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import RoomCard from "../../components/roomCard";
import _ from 'lodash';
import API from "../../utils/API";

import "./RoomSearch.css";

class RoomSearch extends Component {
    componentDidMount = () => {
        //console.log(this.props)
        if ("farts" == "farts") {
            API.getUsers({

            })
                .then(res => {
                    this.setState({
                        img: res.data[0].imgUrl,
                        name: res.data[0].firstName.toString() + " " + res.data[0].lastName.toString(),
                        phone: res.data[0].phoneNumber,
                        gender: res.data[0].gender,
                        city: res.data[0].city,
                        state: res.data[0].state,
                        zip: res.data[0].zip,
                        budget: res.data[0].budget
                    });
                    //console.log(this.state.img)
                    //console.log(this.state.name)
                    // console.log(res.data[0].imgUrl)
                })
                .catch(err => console.log(err));
        } else { "did not post" }
    }
    state = {
        room: [],
        name: "",
        description: "",
        rent: "",
        budget: "",
        category: "",
        openSpots: "",
        availableDate: "",
        dateAdded: "",
        phone: "",
        gender: "",
        city: "",
        state: "",
        zip: "",
        img: "",
        rooms: [],
        roomates: []
    }
    viewRoom = (event) => {
        event.preventDefault();
        // console.log(this.state.budget.replace(/[^0-9]/, ''))

        if ("farts" == "farts") {
            API.getRooms({

            })
                .then(res => {

                    this.setState({
                        rooms: res.data.filter(rooms => {
                            return rooms.rent == 800
                        }),
                        roomates: Array.apply(null, Array(Number(res.data[0].openSpots)))
                        //roomates: new Array(Number(res.data[0].openSpots))
                    });

                    // let roomFilter = res.data.filter(rooms => {
                    //     return rooms.rent == 800
                    // })
                    //console.log(roomFilter);
                    //console.log(this.state.img)
                    // console.log(res.data[0].imgUrl)
                })
                .catch(err => console.log(err));
        } else { "did not post" }



    };


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
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            Search Rooms:
                        </Jumbotron>
                        <div id="rooms">
                            {this.state.rooms.map((room, idx) =>
                                <RoomCard key={`img-${idx}`}>{this.state.rooms[idx]} </RoomCard>
                            )}

                            <div style={{ width: "40px", height: "40px", backgroundColor: "black" }} onClick={this.viewRoom}></div>
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
                                            placeholder="Available Date"
                                        />
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