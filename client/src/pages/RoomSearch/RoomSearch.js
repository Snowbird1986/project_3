import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, TextArea } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import RoomCard from "../../components/roomCard";
import API from "../../utils/API";
import "./RoomSearch.css";

class RoomSearch extends Component {
    componentDidMount = () => {
        console.log(this.props)
    }
    state = {
        room: [],
        name: "",
        description: "",
        rent: "",
        category: "",
        openSpots: "",
        availableDate: "",
        dateAdded: "",
        city: "",
        state: "",
        zip: "",
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
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            Search Rooms:
                        </Jumbotron>
                        <RoomCard>{this.props.img} </RoomCard>
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


export default RoomSearch;