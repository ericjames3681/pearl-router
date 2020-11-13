import React, { useEffect, useState } from "react";
import { Card, Container } from "semantic-ui-react";

const AboutMe = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("dummyJSON.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <br />
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <>
            <h2 style={{ textAlign: "left" }}>Rider Profile</h2>
            <Card fluid>
              <Container className="profile-container">
                <h1 style={{ textAlign: "left" }}>About Me</h1>

                <h3 style={{ textAlign: "left" }}>First Name</h3>
                <Card.Content style={{ textAlign: "left" }}>
                  {item.firstName}
                </Card.Content>

                <h3 style={{ textAlign: "left" }}>Last Name</h3>
                <Card.Content style={{ textAlign: "left" }}>
                  {item.lastName}
                </Card.Content>

                <h3 style={{ textAlign: "left" }}>Email</h3>
                <Card.Content style={{ textAlign: "left" }}>
                  {item.email}
                </Card.Content>

                <h3 style={{ textAlign: "left" }}>Phone</h3>
                <Card.Content style={{ textAlign: "left" }}>
                  {item.phone}
                </Card.Content>

                <h3 style={{ textAlign: "left" }}>Horse Details</h3>
                <Card.Content style={{ textAlign: "left" }}>
                  Amet ex ullamco labore excepteur nisi dolor ullamco anim.
                  Officia pariatur deserunt aute deserunt voluptate irure
                  laborum anim excepteur labore occaecat anim non. Voluptate
                  proident deserunt culpa Lorem qui exercitation eiusmod.
                </Card.Content>
              </Container>
            </Card>
            <br />
            <Card fluid>
              <Container className="profile-container">
                <h1 style={{ textAlign: "left" }}>Connect Profiles</h1>

                <h3 style={{ textAlign: "left" }}>Parents</h3>
                <Card.Content style={{ textAlign: "left" }}>
                  {item.socialMedia}
                </Card.Content>

                <h3 style={{ textAlign: "left" }}>Facebook</h3>
                <Card.Content style={{ textAlign: "left" }}>
                  {item.socialMedia}
                </Card.Content>
              </Container>
            </Card>
            <br />
            <Card fluid>
              <Container className="profile-container">
                <h1 style={{ textAlign: "left" }}>Social Media</h1>

                <h3 style={{ textAlign: "left" }}>Instagram</h3>
                <Card.Content style={{ textAlign: "left" }}>
                  {item.socialMedia}
                </Card.Content>

                <h3 style={{ textAlign: "left" }}>Facebook</h3>
                <Card.Content style={{ textAlign: "left" }}>
                  {item.socialMedia}
                </Card.Content>
              </Container>
            </Card>
          </>
        ))}
    </div>
  );
};

export default AboutMe;
