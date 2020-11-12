import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo-link-block">
        <img
          className="pearl-nav-icon"
          src="./illustratorPEARLBnav.png"
          alt=""
        />
        <Link className="link-style" to="/">
          <h3 className="text-block">Pearl's Office</h3>
        </Link>
      </div>

      <div className="user-nav w-inline-block">
        <Link className="link-style" to="/events">
          <div>Events</div>
        </Link>
      </div>

      <div className="user-nav w-inline-block">
        <Link className="link-style" to="/profile">
          <div>Profile</div>
        </Link>
      </div>
      <div className="nav-right">
        <Link className="link-style" to="/create-account">
          <button className="nav-btn-1">Make "Create Account"</button>
        </Link>
        <Link className="link-style" to="/login">
          <button className="nav-btn-2">Log In</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
