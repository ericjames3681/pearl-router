import React from "react";
import NavBar from "./Components/NavBar/Navbar";
import LogIn from "./Pages/LogIn";
import Profile from "./Pages/Profile";
import CreateAccount from "./Pages/CreateAccount";
import Events from "./Pages/Events";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <div className="intro-banner">
        <div className="banner-text-area">
          <h1 className="heading-2">
            Events Done
            <span>
              <em className="text-color-white"> Right!</em>
            </span>
          </h1>
          <p className="paragraph-2">
            Pearl's Office is designed to help event managers and riders have a
            great experience from start to finish.
          </p>
          <Link to="/create-account">
            <button className="nav-btn-1">
              <strong>Create Account</strong>
            </button>
          </Link>
        </div>
      </div>
      <span>
        Photo by{" "}
        <a href="https://unsplash.com/@malgonia_bujalsky?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Malgorzata Bujalska
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/horse-event?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
      <br />
    </div>
  );
};

export default App;
