import React from "react";
import { Container, Card } from "semantic-ui-react";
import "../App.css";
import ProfileForm from "../Components/ProfileForm/ProfileForm";

const LogIn = () => {
  return (
    <div>
      <Container>
        <Card>
          <ProfileForm />
        </Card>
      </Container>
    </div>
  );
};

export default LogIn;
