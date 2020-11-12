import React from "react";
import { Card, Container } from "semantic-ui-react";

const Horses = () => {
  return (
    <div>
      <br />
      <h2 style={{ textAlign: "left" }}> My Horses</h2>
      <Card fluid>
        <Container className="profile-container">
          <h1 style={{ textAlign: "left" }}>Hey Jude</h1>

          <h3 style={{ textAlign: "left" }}>Horse Details</h3>
          <Card.Content style={{ textAlign: "left" }}>
            Amet ex ullamco labore excepteur nisi dolor ullamco anim. Officia
            pariatur deserunt aute deserunt voluptate irure laborum anim
            excepteur labore occaecat anim non. Voluptate proident deserunt
            culpa Lorem qui exercitation eiusmod.
          </Card.Content>
          <h3 style={{ textAlign: "left" }}>Horse Details</h3>

          <Card.Content style={{ textAlign: "left" }}>
            Amet ex ullamco labore excepteur nisi dolor ullamco anim. Officia
            pariatur deserunt aute deserunt voluptate irure laborum anim
            excepteur labore occaecat anim non. Voluptate proident deserunt
            culpa Lorem qui exercitation eiusmod.
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

export default Horses;
