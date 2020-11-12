import React from "react";
import { Card, Container } from "semantic-ui-react";

const AboutMe = () => {
  return (
    <div>
      <br />
      <h2 style={{ textAlign: "left" }}>Rider Profile</h2>
      <Card fluid>
        <Container className="profile-container">
          <h1 style={{ textAlign: "left" }}>About Me</h1>

          <h3 style={{ textAlign: "left" }}>First Name</h3>
          <Card.Content style={{ textAlign: "left" }}>Eric</Card.Content>

          <h3 style={{ textAlign: "left" }}>Last Name</h3>
          <Card.Content style={{ textAlign: "left" }}>Peterson</Card.Content>

          <h3 style={{ textAlign: "left" }}>Phone</h3>
          <Card.Content style={{ textAlign: "left" }}>
            (555)555-5555
          </Card.Content>

          <h3 style={{ textAlign: "left" }}>Email</h3>
          <Card.Content style={{ textAlign: "left" }}>
            email@email.com
          </Card.Content>

          <h3 style={{ textAlign: "left" }}>Horse Details</h3>
          <Card.Content style={{ textAlign: "left" }}>
            Amet ex ullamco labore excepteur nisi dolor ullamco anim. Officia
            pariatur deserunt aute deserunt voluptate irure laborum anim
            excepteur labore occaecat anim non. Voluptate proident deserunt
            culpa Lorem qui exercitation eiusmod.
          </Card.Content>
        </Container>
      </Card>
    </div>
  );
};

export default AboutMe;
