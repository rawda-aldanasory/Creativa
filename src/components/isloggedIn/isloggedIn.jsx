import React, { Component } from 'react';

class ClassState extends Component {
    constructor(props) {
        super();
        this.state = {
            isloggedin: false,
            subscribe: "Guest"
        }
    }
    loggedin = () => {
        this.setState({
            isloggedin: true,
            subscribe: "You now have a subscription"
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.subscribe}</h1>
                <h1>{this.state.isloggedin ? "Logged in" : ""}</h1>
                <button onClick={this.loggedin}>Login Now</button>
            </div>
        )
    }
}

export default ClassState;