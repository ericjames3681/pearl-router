import React from "react";
import "./NavBar.scss";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo-link-block">
        <img
          className="pearl-nav-icon"
          src="./illustratorPEARLBnav.png"
          alt=""
        />
        <h3 className="text-block">Pearl's Office</h3>
      </div>

      <div className="user-nav w-inline-block">
        <div>Events</div>
      </div>

      <div className="user-nav w-inline-block">
        <div>Profile</div>
      </div>
      <div className="nav-right">
        <button>Home</button>
        <button>Events</button>
      </div>
    </nav>
  );
};

export default Navbar;
