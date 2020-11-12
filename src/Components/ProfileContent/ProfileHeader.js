import React from "react";
import "../../App.css";
import { Image, Container, Header } from "semantic-ui-react";

const ProfileHeader = () => {
  return (
    <div>
      <Container fluid>
        <br />
        <br />
        <br />
        <Image src="./Eric.jpeg" circular size="small" centered />{" "}
        <Header as="h1">Eric Peterson</Header>
      </Container>
    </div>
  );
};

export default ProfileHeader;
