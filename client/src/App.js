import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import Books from "./pages/Books";
=======
import User from "./pages/Users";
import UserHome from "./pages/UserHome";
import UserSearch from "./pages/UserSearch";
import Landing from "./pages/Landing";
import Room from "./pages/Rooms";
import RoomSearch from "./pages/RoomSearch";
import RoomCreate from "./pages/RoomCreate";
import TodoCreate from "./pages/TodoCreate";
import BillCreate from "./pages/BillCreate";
>>>>>>> c449b351b0f6b9772151d30bfc22eeb07f5cd939
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => (

  <Router>
    <div>
      <Nav />
      <Switch>
<<<<<<< HEAD
        {/* <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} />
        <Books /> */}
=======
        <Route exact path="/" component={Landing} />
        <Route exact path="/user" component={User} />
        <Route exact path="/userHome" component={UserHome} />
        <Route exact path="/room" component={Room} />
        <Route exact path="/userSearch" component={UserSearch} />
        <Route exact path="/roomSearch" component={RoomSearch} />
        <Route exact path="/roomCreate" component={RoomCreate} />
        <Route exact path="/todoCreate" component={TodoCreate} />
        <Route exact path="/billCreate" component={BillCreate} />
        <Route component={NoMatch} />
>>>>>>> c449b351b0f6b9772151d30bfc22eeb07f5cd939
      </Switch>
      <Footer />
    </div>
  </Router>

);



export default App;

