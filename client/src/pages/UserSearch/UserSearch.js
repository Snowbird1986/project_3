import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, TextArea } from "../../components/Form";
import Table from "../../components/Table";
import TableRow from "../../components/TableRow";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import "./UserSearch.css";
import UserCard from "../../components/userCard";
import _ from 'lodash';

class UserSearch extends Component {
    componentDidMount = () => {
        console.log(this.props);

        // if("search" == "search") {
        //     API.getUsers({

        //     })
        //     .then(res => {
        //         this.setState({
        //             img: res.data[0].imgUrl,
        //             name: res.data[0].firstName.toString(),
        //             phone: res.data[0].phoneNumber,
        //             gender: res.data[0].gender,
        //             city: res.data[0].city,
        //             state: res.data[0].state,
        //             zip: res.data[0].zip,
        //             budget: res.data[0].budget
        //         });
        //         console.log(res);
        //     })
        //     .catch(err => console.log(err));
        // } else { "did not post" }
    }
    
    state = {
        user: [],
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        birthday: "",
        gender: "",
        city: "",
        state: "",
        zip: "",
        budget: "",
        moveInDate: "",
        users: [],
        roommates: [],
        imgUrl: ""
    }

    filterUser(user) {
        let comparisons = [
            "firstName",
            "lastName",
            "email",
            "phoneNumber",
            "birthday",
            "city",
            "state",
            "zip",
            "gender",
            "budget",
            "moveInDate"
        ];

        

        let matchValues = []
        comparisons.forEach(k => {
            // console.log(k, this.state[k], user[k], typeof this.state[k] === "string");
            // console.log(this.state[k])
            // console.log(!!this.state[k])
            // console.log(this.state[k].length)
            // console.log(this.state[k].length > 0)
            // console.log(!!this.state[k] && this.state[k].length > 0)         
            if (!!this.state[k] && this.state[k].length > 0) {

                if (k == "budget") {
                    // console.log('user[k]', user[k], 'this.state[k]', this.state[k])
                    // console.log('greatere than?', parseInt(user[k]) > parseInt(this.state[k]))
                    matchValues.push(user[k] && parseInt(user[k]) > parseInt(this.state[k]));
                } else {
                    matchValues.push(user[k] && user[k] == this.state[k]);
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

    viewUsers = (event) => {
        event.preventDefault();
        

        // if ("search" == "search") {
            API.getUsers({

            })
            .then(res => {
                const validUsers = res.data.filter(this.filterUser.bind(this));

                this.setState({
                    users: validUsers,
                    roommates: this.state.users,
                });
            })
            .catch(err => console.log(err));

        // } else { "did not post" }
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSearchChange = event => {
        this.setState({
            user: [],
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            birthday: "",
            gender: "",
            city: "",
            state: "",
            zip: "",
            budget: "",
            moveInDate: "",
            imgUrl: ""
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        
    };

    componentDidUpdate = () => {
        console.log(this.state.users);
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            Search Users:
                        </Jumbotron>
                                                                                                            
                                    {
                                    this.state.users.map((user) =>{
                                        return <UserCard 
                                        imgUrl={user.imgUrl}
                                        firstName={user.firstName}
                                        lastName={user.lastName}
                                        email={user.email}
                                        phoneNumber={user.phoneNumber}
                                        budget={user.budget}
                                        moveInDate={user.moveInDate}
                                        />
                                        })
                                    }                        
                            

                        <div className="col-md-8 offset-md-2" id="formdiv">
                            <form>
                                <Row>
                                    <Col size="md-6">
                                        <Input
                                            value={this.state.firstName}
                                            onChange={this.handleInputChange}
                                            name="firstName"
                                            placeholder="First Name"
                                        />
                                    </Col>
                                    <Col size="md-6">
                                        <Input
                                            value={this.state.lastName}
                                            onChange={this.handleInputChange}
                                            name="lastName"
                                            placeholder="Last Name"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="md-12">
                                        <Input
                                            value={this.state.email}
                                            onChange={this.handleInputChange}
                                            name="email"
                                            placeholder="Email"
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
                                        <Input
                                            value={this.state.birthday}
                                            onChange={this.handleInputChange}
                                            name="birthday"
                                            placeholder="Birthday"
                                        />
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
                                            placeholder="Move In Date"
                                        />
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
                                <div className="buttons">
                                    <FormBtn onClick={this.viewUsers}>
                                        Find Users
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


export default UserSearch;