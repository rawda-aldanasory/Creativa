import React, { Component } from 'react';
import axios from "axios";
import './PostComponent.css';

class PostComponent extends Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            email: '',
            position: ''
        };
    }

    handelChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault(); 
        const { fname, email, position } = this.state;
        const data = { fname, email, position };

        axios
            .post("https://jsonplaceholder.typicode.com/comments", data)
            .then((response) => {
                console.log("Form submitted:", response.data);
            })
            .catch((error) => {
                console.error("Error: ", error);
            });
    }

    render() {
        return (
            <div className="center-container">
                <h2>Welcome!</h2>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="inputForm">
                        <input 
                            className="input" 
                            type="text" 
                            name="fname" 
                            placeholder="First Name" 
                            value={this.state.fname} 
                            onChange={this.handelChange}
                        />
                    </div>
                    <div className="inputForm">
                        <input 
                            className="input" 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={this.state.email} 
                            onChange={this.handelChange}
                        />
                    </div>
                    <div className="inputForm">
                        <input 
                            className="input" 
                            type="text" 
                            name="position" 
                            placeholder="Position" 
                            value={this.state.position} 
                            onChange={this.handelChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default PostComponent;