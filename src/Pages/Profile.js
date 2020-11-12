import React from "react";
import "../App.css";
import { Redirect } from "react-router-dom";
import ProfileCard from "../Components/ProfileContent/ProfileCard";

//Conditionally redirect to login if user not logged in
//
// import LogIn from "./LogIn";

// { userService.getUser() ? (
//   <Profile/>
//     ):(
//       <Redirect to="/login"/>
//     )    }
//     </div>

const Profile = () => {
  return <ProfileCard />;
};

export default Profile;
