import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import User from "./pages/Users";
import UserHome from "./pages/UserHome";
import UserPortal from "./pages/UserPortal";
import UserSearch from "./pages/UserSearch";
import Landing from "./pages/Landing";
import Room from "./pages/Rooms";
import Refresh from "./pages/Refresh";
import RoomSearch from "./pages/RoomSearch";
import RoomCreate from "./pages/RoomCreate";
import RoomEdit from "./pages/RoomEdit";
import TodoCreate from "./pages/TodoCreate";
import BillCreate from "./pages/BillCreate";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import API from "./utils/API";
import RoomCard from "./components/roomCard";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      firstName: null,
      lastName: null,
      email: null,
      facebookId: null,
      gender: null,
      birthday: null,
      location: null,
      img: null,
      id: null,
      roomID:null,
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
      // setTimeout(window.location="/userPortal",3000)
      // window.location="/userPortal"
      API.getFBUser(this.state.facebookId).then(res =>
        // console.log(res))
        
        this.setState({
          gender: res.data[0].gender,
          // email: res.email,
          birthday: res.data[0].birthday,
          location: res.data[0].location,
          id: res.data[0]._id
        })&
        API.getUserRoom(this.state.id).then(res =>
          // console.log(res)&
          {res.data[0]&&
          this.setState({ 
              name: res.data[0].name,
              description: res.data[0].description,
              rent: res.data[0].rent,
              category: res.data[0].category,
              openSpots: res.data[0].openSpots,
              availableDate: res.data[0].availableDate,
              city: res.data[0].city,
              state: res.data[0].state,
              zip: res.data[0].zip,
              users: res.data[0].user,
              owner: res.data[0].user[0],
              bills: res.data[0].bill,
              todos: res.data[0].todo,
              messages: res.data[0].message,
              roomID: res.data[0]._id
            })
          }
      )
      )
        .catch(err => console.log(err));
    } else {
      alert('Facebook login error');
    }
  }
  componentDidUpdate() {
    console.log(this.state)
  }
  render() {
    return (
      <Router>
        <div>
          <Nav username={this.state.username} id={this.state.id} />
          <Switch>
            <Refresh path="/refresh" />
            <Route exact path="/" render={(props) => (this.state.username ? (<Redirect to="/user" />) : (<Landing {...props}
              onFacebookLogin={this.onFacebookLogin}
              username={this.state.username}
              facebookId={this.state.facebookId}
              // facebookToken={this.state.facebookToken}
              img={this.state.img}
              id={this.state.id}
            />))} />
            <Route exact path="/user" render={(props) => (this.state.id ? (<Redirect to="/userPortal" />) : (<User {...props}
              username={this.state.username}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              gender={this.state.gender}
              email={this.state.email}
              // location={this.state.location}
              facebookId={this.state.facebookId}
              // facebookToken={this.state.facebookToken}
              birthday={this.state.birthday}
              img={this.state.img}
              id={this.state.id}
            />
            ))} />
            <Route exact path="/userPortal" render={(props) => <UserPortal {...props}
              username={this.state.username}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              gender={this.state.gender}
              email={this.state.email}
              // location={this.state.location}
              // facebookToken={this.state.facebookToken}
              facebookId={this.state.facebookId}
              birthday={this.state.birthday}
              img={this.state.img}
              id={this.state.id}
              owner={this.state.owner}
            />
            } />
            <Route exact path="/userHome" component={UserHome} />
            <Route exact path="/room" render={(props) =><Room {...props} 
                  id={this.state.id}
                  username={this.state.username}
                />
              } />
            <Route exact path="/userSearch" component={UserSearch}
            />
            <Route exact path="/roomSearch" render={(props) => <RoomSearch {...props}
              username={this.state.username}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              gender={this.state.gender}
              email={this.state.email}
              // location="Kansas City"
              // facebookToken={this.state.facebookToken}
              facebookId={this.state.facebookId}
              birthday={this.state.birthday}
              img={this.state.img}
              id={this.state.id} >
            </RoomSearch>
            } />
<<<<<<< HEAD
            <Route exact path="/roomCreate" component={RoomCreate} />
            <Route exact path="/todoCreate" component={TodoCreate} />
            <Route exact path="/billCreate" component={BillCreate} />
=======
            <Route exact path="/roomCard" render={(props) => <RoomCard {...props}
              state={this.state}>
            </RoomCard>
            } />
            <Route exact path="/roomCreate" render={(props) =><RoomCreate {...props} 
                  id={this.state.id}
                />
              } />
            <Route exact path="/roomEdit" render={(props) =><RoomEdit {...props} 
                  id={this.state.id}
                  name={this.state.name}
                  description={this.state.description}
                  rent={this.state.rent}
                  category={this.state.category}
                  openSpots={this.state.openSpots}
                  availableDate={this.state.availableDate}
                  city={this.state.city}
                  state={this.state.state}
                  zip={this.state.zip}
                  users={this.state.users}
                  owner={this.state.owner}
                  bills={this.state.bills}
                  todos={this.state.todos}
                  messages={this.state.messages}
                  roomID={this.state.roomID}
                />
              } />
            <Route exact path="/todoCreate" render={(props) =><TodoCreate {...props} 
                  id={this.state.id}
                  roomID={this.state.roomID}
                />
              } />
            <Route exact path="/billCreate" render={(props) =><BillCreate {...props} 
                  id={this.state.id}
                  roomID={this.state.roomID}
                />
              } />
>>>>>>> 46e3cd9d650f78bde5c6a1b0f88417fb2d8100f2
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  };
}



export default App;

