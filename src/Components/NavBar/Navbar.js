import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <a href="/" className="logo-link-block w-inline-block w--current">
        <div className="text-block">
          <img
            className="pearl-nav-icon"
            src="./illustratorPEARLBnav.png"
            alt=""
          />
          <Link className="link-style" to="/">
            <strong>Pearl's Office</strong>
          </Link>
        </div>
      </a>
      <div className="user-nav-bar">
        <Link className="link-style" to="/events">
          <a href="/events" aria-current="page" className="user-nav">
            <img
              className="main-nav-icon"
              loading="lazy"
              src="./Events v1.svg"
              alt=""
            />
            <div>Events</div>
          </a>
        </Link>
        <Link className="link-style" to="/profile">
          <a href="/profile" aria-current="page" className="user-nav">
            <img
              className="main-nav-icon"
              loading="lazy"
              src="./Profile v1.svg"
              alt=""
            />
            <div>My Profile</div>
          </a>
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/create-account">
          <button className="nav-btn-1">
            <strong>Create Account</strong>
          </button>
        </Link>
        <Link className="link-style" to="/login">
          <button className="nav-btn-2">
            <strong>Log In</strong>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
