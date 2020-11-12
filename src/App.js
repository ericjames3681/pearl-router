import React from "react";
import NavBar from "./Components/NavBar/Navbar";
import LogIn from "./Pages/LogIn";
import Profile from "./Pages/Profile";
import CreateAccount from "./Pages/CreateAccount";
import Events from "./Pages/Events";
import { Image } from "semantic-ui-react";
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
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/login" component={LogIn} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <div>
        <Image src="./jarett-lopez-vD9jjh0sGxY-unsplash.jpg" alt="" />
      </div>
      <span>
        Photo by{" "}
        <a href="https://unsplash.com/@jarettlopez?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Jarett Lopez
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/horse-dressage?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
      <br />
    </div>
  );
};

export default App;
