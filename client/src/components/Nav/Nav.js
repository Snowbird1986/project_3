import React, { Component } from "react";
import Login from "../Facebook/Login";
import NavButton from "../NavButtons/NavButtons";
import { Col, Row, Container } from "../../components/Grid";
import { TweenLite, Elastic } from 'gsap';
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    // reference to the DOM node
    this.myElement = null;
    // reference to the animation
    this.myTween = null;

  }
  state = {
    username: null,
    selectSection: 0
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log({ name, value })
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
  // reference to the DOM node

  componentDidMount() {
    // use the node ref to create the animation
    // this.myTween = TweenLite.to(this.myElement, 1, { x: 100, y: 100 });
    this.myTween = TweenLite.to("#theSquare", 11, {
      ease: Elastic.easeOut.config(11, 7),
      x: 130,
      transformOrigin: "50% 100%",
      scaleX: 1.5,
      repeat: 3,
      yoyo: true

    });
    TweenLite.to("#toBeRevealed", 1, {
      ease: Elastic.easeOut.config(9, .9),
      x: 55,
      transformOrigin: "70% 100%",
      scaleX: 1.2,
      repeat: 3,
      yoyo: true

    });

  }

  handleBtnClick = event => {
    event.preventDefault();

    // const { name, value } = event.target;
    // <Route
    //   {...history.push('/Books')}
    // ></Route>
    console.log(event)
  };

  render() {
    console.log(this.handleBtnClick)
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Container style={{ alignItems: 'flex-end' }}>
          <Row >
            <NavButton handleBtnClick={this.handleBtnClick} >
              {"BILLS"}
            </NavButton >
            <NavButton handleBtnClick={this.handleBtnClick}>
              {"CONTRACTS"}
            </NavButton >
            <NavButton handleBtnClick={this.handleBtnClick}>
              {"MESSAGES"}
            </NavButton>
            <NavButton handleBtnClick={this.handleBtnClick} >
              {"ROOMS"}
            </NavButton>
            <NavButton handleBtnClick={this.handleBtnClick} >
              {"SCHEDULE"}
            </NavButton>

            <Col size="md-3">

              <a className="navbar-brand" href="/">
                <svg id="demo" width="700" height="100" viewBox="0 0 700 100">
                  <defs>
                    <mask id="theMask">
                      <rect id="theSquare" x="-350" y="0" width="500" height="100" fill="#fff" />
                    </mask>
                  </defs>

                  <g id="toBeRevealed" mask="url(#theMask)">
                    <path class="cls-1" d="M305.62,52.89c-12.36-3.83-19.82,5.82-30.81,6.66-10.32.8-21.05-.42-31.46.08-8.88.42-16.49,1.83-24.5,6.05-23.1,12.17,2.3-10.88-5.42-12.6-4.58-1-13.5,3.81-18.93,6,.37-.15,0-3.39-.08-3.8-.29-1.76-.9-3.24-2.77-3.51-4.07-.6-8.47,1.85-12.24,3a25.93,25.93,0,0,1-4.07,1.27c-1.27.14-1.09-1-1.26-1.77-.39-1.82-2-2.43-4.41-2.07-4.14.61-8.28,2.68-12.53,3a29.77,29.77,0,0,1-12.34-2,16,16,0,0,0-12.17.69c-.3.14-.61.31-.93.5-4.6.57-11.69.55-15.9-1.07a16.77,16.77,0,0,0-12.17.69c-5.79,2.87-11,10.32-16.86,13.42C57.53,83,74.45,49.85,54,44.24c25.34.24,37.26-10.82,38.57-17.94,1.24-6.69-2.27-12.27-8.91-13-3.27-.33-16.21,1.79-18.58,4.59A76.73,76.73,0,0,0,76.42,0C62.65,6.64,46.94,14.17,33.17,20.8c4.71,1.64,16.56-.75,25.08-3.39a563.76,563.76,0,0,1-51.81,46c-2.5,1.94-5.19,4-6.27,6.92s3.37,6.56,6.38,6.25c1.73-.18,3.21-1.56,4.5-2.86l14.12-14.1c4.18-4.17,8.62-8.51,14.08-10.37,7.18-2.44,12.83,1.5,13,9,0,2.83-.68,5.7-.87,8.54-.51,7.73,6.78,11.31,14.18,11.33,14.81,0,25.58-10.15,28-11.66,0,6.16,2.7,8.43,5.79,8.87,11,1.55,18.73-11.51,19.06-18.41,2.47-.11,4.45.15,9.29,1-2.68,2.9-4.88,6.51-5.14,8.47-.75,5.62,2.67,8.87,5.79,8.88,14.47,0,18.12-15.38,18.5-18.54-.07.58,6,1.26,6.49,1.27,3.09.1,6.14-.7,9.25-.86a3.77,3.77,0,0,1,1.46.13c2.65,1-1.39,5-2.21,5.94-1.72,2-3.89,3.81-5.37,5.91s-1,3.68-1.24,5.57a42.94,42.94,0,0,0,5-2.81c1.81-1.37,3.35-3,5.22-4.36,3.38-2.43,7.34-4.31,10.75-4.68,3.05-.33,5.41.82,5.42,3.43,0,1.71-1,3.24-2.3,5.08-1.16,1.67-.69,2.87-.89,4.32a20.9,20.9,0,0,0,4-1.74c1.24-.87,2.32-2,3.54-3a33,33,0,0,1,7.36-4.29c2.09-.85,4.62-1.59,5.93-.73,1.49,1-.29,4,.78,5.31,8.81,10.69,26-6.35,36.18-7.77,13-1.8,27.07-1.7,40.11-1.34-6.77,6.78-2.62,12.07,5.59,12.78,7.75.67,16-2.3,22.82-5.71-5.48-3.39-11.28,3-17.18,2.43C281.92,71,281.6,68,286,65.79,287.48,65,323.39,58.4,305.62,52.89ZM47.54,40.43a3.54,3.54,0,0,1-1.3-.45C51.09,29.45,64.56,21.1,74.78,22.16c3,.31,3.38,2,2.09,4.56a5.72,5.72,0,0,1-1.4,1.94C67,35.29,57.85,39.63,47.54,40.43Zm57.2,28.06a3,3,0,0,1-.82-.28c-3.86-2,2.26-9.24,5.29-9.84h.09c1.29-.17,2.59.82,3.55,1.17C112.47,62.52,108.47,69.2,104.74,68.49Zm35.65-5.24a13.06,13.06,0,0,1-3.26,4,4.59,4.59,0,0,1-3.38,1.11,2.59,2.59,0,0,1-.59-.16c-1.94-.73-1.46-3.28-.49-4.94,1.09-1.85,3.37-4.66,5.63-5,1.29-.17,2.59.82,3.55,1.16C142.26,59.56,140.57,62.94,140.39,63.25Zm159.27-5.83a21.89,21.89,0,0,1-13.2,6c3.9-3.87,9.38-6.28,14.64-7.63Z" />
                  </g>
                </svg>
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
                    <div ref={div => this.myElement = div} />
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
