import React, { Component } from "react";
import SignUp from "../SignUp/SignUp";
import LogIn from "../LogIn/LogIn";
import { UseProvider } from "../../Context/Context";
class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      isSignedUp: false, 
    };

    this.switchToSignUp = this.switchToSignUp.bind(this);
    this.switchToLogIn = this.switchToLogIn.bind(this);
  }

  switchToSignUp() {
    this.setState({
      isSignedUp: true, 
    });
  }

  switchToLogIn() {
    this.setState({
      isSignedUp: false, 
    });
  }

  render() {
    return (
      <div>
        {this.state.isSignedUp ? 
        (<SignUp onSwitchToLogIn={this.switchToLogIn} />) : 
        (<LogIn onSwitchToSignUp={this.switchToSignUp} />)
        }
      </div>
    );
  }
}

export default HomePage;