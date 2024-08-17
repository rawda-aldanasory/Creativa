import React, { Component } from 'react';

class ClassProps extends Component {
    render(props) {
        return (
            <div>
                <h2>I am {this.props.fname} {this.props.lname}</h2>
                <h3>I have studied :</h3>
                <h3>{this.props.c1}</h3>
                <h3>{this.props.c2}</h3>
            </div>
        )
    }
}

export default ClassProps;