import React from "react";
import NavBar from "./Components/NavBar/Navbar";
import LogIn from "./Pages/LogIn";
import Profile from "./Pages/Profile";
import Events from "./Pages/Events";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={LogIn} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default App;
