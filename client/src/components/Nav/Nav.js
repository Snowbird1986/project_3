import React, { Component } from "react";
import Login from "../Facebook/Login";
import { Col, Row, Container } from "../../components/Grid";

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



render() {
  return (
    <Container fluid>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Row>
          <a className="navbar-brand" href="/">
            <div className="App">
              <header className="App-header">
                <h1 className="App-title"> Media Login</h1>
              </header>
              <div className="App-intro">
                {!this.state.username &&
                  <div>
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
        </Row>
      </nav>
    </Container>
  );
}
}

export default Nav;
