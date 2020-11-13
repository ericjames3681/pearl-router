import React from "react";
import "../../App.css";
import { Image, Container, Header } from "semantic-ui-react";

//profileSlice for avatar and name?

const ProfileHeader = () => {
  return (
    <div>
      <Container fluid>
        <br />
        <br />
        <Image
          src=""
          centered
          className="profile-image"
          alt="profileSlice user avatar here"
        />

        <Header as="h1">
          <strong>profileSlice userName Here</strong>
        </Header>
      </Container>
    </div>
  );
};

export default ProfileHeader;
