import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import User from "./pages/Users";
import UserSearch from "./pages/UserSearch";
import Landing from "./pages/Landing";
import Room from "./pages/Rooms";
import RoomSearch from "./pages/RoomSearch";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (

  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/user" component={User} />
        <Route exact path="/room" component={Room} />
        <Route exact path="/userSearch" component={UserSearch} />
        <Route exact path="/roomSearch" component={RoomSearch} />
        {/* <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} /> */}
        <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>

);



export default App;

