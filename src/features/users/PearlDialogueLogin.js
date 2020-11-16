import React, { Component } from "react";
import { Transition, Button } from "semantic-ui-react";

export default class TransitionExampleSingleExplorer extends Component {
  state = { animation: "scale", duration: 3000, visible: false };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  componentDidMount = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }));

  render() {
    const { animation, duration, visible } = this.state;

    return (
      <>
        <Transition animation={animation} duration={duration} visible={visible}>
          <h1 className="header-text">Welcome Back! Log in to your account.</h1>
        </Transition>
      </>
    );
  }
}
