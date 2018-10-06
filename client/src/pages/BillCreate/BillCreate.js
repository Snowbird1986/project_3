import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, TextArea } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import "./BillCreate.css";

class BillCreate extends Component {
    state={
        bill:[],
        title:"",
        category:"",
        body:"",
        amount:"",
        dueDate:"",
        paid:"",
        assignee:"",
        dateAdded:"",
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
                  <h1>Enter Bill Info</h1>
                </Jumbotron>
                        <div className="col-md-8 offset-md-2" id="formdiv"> 
                            <form>
                                <Row>
                                    <Col size="md-6">
                                        <Input
                                            value={this.state.title}
                                            onChange={this.handleInputChange}
                                            name="title"
                                            placeholder="Title"
                                        />
                                    </Col>
                                    <Col size="md-6">
                                        <Input
                                            value={this.state.assignee}
                                            onChange={this.handleInputChange}
                                            name="assignee"
                                            placeholder="Assign responsibility"
                                        />
                                    </Col>
                                    {/* <Col size="md-6">
                                        <Input
                                            value={this.state.lastName}
                                            onChange={this.handleInputChange}
                                            name="lastName"
                                            placeholder="Last Name"
                                        />
                                    </Col> */}
                                </Row>
                                <Row>
                                    <Col size="md-6">
                                        <Input
                                            value={this.state.amount}
                                            onChange={this.handleInputChange}
                                            name="amount"
                                            placeholder="Amount"
                                        />
                                    </Col>
                                    <Col size="md-6">
                                        <Input
                                        value={this.state.dueDate}
                                        onChange={this.handleInputChange}
                                        name="dueDate"
                                        placeholder="Due Date"
                                    />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="md-12">
                                        <Input
                                            value={this.state.category}
                                            onChange={this.handleInputChange}
                                            name="category"
                                            placeholder="Category"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="md-12">
                                        <TextArea
                                            value={this.state.body}
                                            onChange={this.handleInputChange}
                                            name="body"
                                            placeholder="Description"
                                            id="description"
                                        />
                                    </Col>
                                </Row>
                                <div className="buttons">
                                    <FormBtn onClick={this.handleFormSubmit}>
                                        Create Bill
                                    </FormBtn>
                                </div>
                            </form>
                        </div>
                </Col>
            </Row>
        </Container>
        )}
}


export default BillCreate;