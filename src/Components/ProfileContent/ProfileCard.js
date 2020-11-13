import React, { Component } from "react";
import "../../App.css";
import ProfileHeader from "./ProfileHeader";
import { Container, Button, Menu } from "semantic-ui-react";
import AboutMe from "./AboutMe";
import Horses from "./Horses";
import "./ProfileContent.scss";

class Profile extends Component {
  state = { activeItem: "rider-profile" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Container className="main-content">
          <ProfileHeader />
          <br />
          <Container>
            <Menu className="event-nav" widths={2}>
              <Menu.Item
                name="rider-profile"
                active={activeItem === "rider-profile"}
                onClick={this.handleItemClick}
                color="blue"
              >
                <div className="event-nav-button">
                  <img
                    className="event-nav-icon"
                    loading="lazy"
                    src="./Profile v1.svg"
                    alt=""
                  />
                  <div>Rider Profile</div>
                </div>
              </Menu.Item>
              <Menu.Item
                name="my-horses"
                active={activeItem === "my-horses"}
                onClick={this.handleItemClick}
                color="blue"
              >
                <div className="event-nav-button">
                  <img
                    className="event-nav-icon"
                    loading="lazy"
                    src="./Horse v1.svg"
                    alt=""
                  />
                  <div>My Horses</div>
                </div>
              </Menu.Item>
            </Menu>
            {activeItem === "rider-profile" ? <AboutMe /> : <Horses />}
          </Container>
        </Container>
      </div>
    );
  }
}

export default Profile;
