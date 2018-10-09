import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./pages/Users";
import UserHome from "./pages/UserHome";
import UserPortal from "./pages/UserPortal";
import UserSearch from "./pages/UserSearch";
import Landing from "./pages/Landing";
import Room from "./pages/Rooms";
import RoomSearch from "./pages/RoomSearch";
import RoomCreate from "./pages/RoomCreate";
import TodoCreate from "./pages/TodoCreate";
import BillCreate from "./pages/BillCreate";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props){
    super (props)
    this.state={
      username:null,
      firstName: null,
      lastName: null,
      email: null,
      facebookId:null,
      gender:null,
      birthday:null,
      location:null,
      img:null,
    }
  }
  onFacebookLogin = (loginStatus, resultObject) => {
    
    if (loginStatus === true) {
      console.log(resultObject)
      this.setState({
        username: resultObject.user.name,
        firstName: resultObject.user.first_name,
        lastName: resultObject.user.last_name,
        // gender: resultObject.user.gender,
        email: resultObject.user.email,
        // birthday: resultObject.user.birthday,
        img: resultObject.user.picture.data.url,
        // location: resultObject.user.location.name,
        facebookId: resultObject.user.id,
      });
    } else {
      alert('Facebook login error');
    }
  }
  componentDidUpdate(){
    console.log(this.state)
  }
  render (){
    return (
      <Router>
        <div>
          <Nav username={this.state.username}/>
          <Switch>
            <Route exact path="/" render={(props) =><Landing {...props} onFacebookLogin={this.onFacebookLogin} username={this.state.username}/>} />
            <Route exact path="/user" render={(props) =><User {...props} 
                  username={this.state.username}
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  gender={this.state.gender}
                  email={this.state.email}
                  // location={this.state.location}
                  facebookId={this.state.facebookId}
                  birthday={this.state.birthday}
                />
              } />
            <Route exact path="/userPortal" component={UserPortal} />
            <Route exact path="/userHome" component={UserHome} />
            <Route exact path="/room" component={Room} />
            <Route exact path="/userSearch" component={UserSearch} />
            <Route exact path="/roomSearch" component={RoomSearch} />
            <Route exact path="/roomCreate" component={RoomCreate} />
            <Route exact path="/todoCreate" component={TodoCreate} />
            <Route exact path="/billCreate" component={BillCreate} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  };
}



export default App;

