import React, { Component } from "react";
import Login from "../Facebook/Login";
import { Col, Row, Container } from "../../components/Grid";
import "./Nav.css";

class Nav extends Component {
  state = {
    username: null,
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
  }
  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name
      });
    } else {
      alert('Facebook login error');
    }
  }
  // onFacebookLogout= response =>{
  //   this.FB.logout(function (response) {
  //       // user is now logged out
  //   });



render() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Container fluid>
          <Row>
            <Col size="md-3">
              <a className="navbar-brand" href="/">
                <div className="App">
                  <div className="App-intro">
                    {!this.state.username &&
                      <div>
                        <header className="App-header">
                          <h1 className="App-title"> Media Login</h1>
                        </header>
                        <p>Click on one of any button below to login</p>
                        <Login onLogin={this.onFacebookLogin}>
                          <button>Facebook</button>
                        </Login>
                      </div>
                    }
                    {this.state.username &&
                      <p>Welcome back, {this.state.username}</p>

                    }
                  </div>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </nav>
    
  );
}
}

export default Nav;
