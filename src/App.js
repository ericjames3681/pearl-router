import React from "react";
import NavBar from "./Components/NavBar/Navbar";
import Home from "./Home";
import Profile from "./Profile";
import Events from "./Events";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/home" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
