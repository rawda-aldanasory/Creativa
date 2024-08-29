import React, { Component } from 'react'; 
import axios from 'axios'; 
import './GetComponent.css'

class GetComponent extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                console.log(response.data); 
                this.setState({ posts: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { posts } = this.state;
        return (
            <div className="card-container">
                {
                    posts.map((post) => (
                        <div key={post.id} className="card">
                            <h2>{post.name}</h2>
                            <h3>{post.email}</h3>
                            <p>{post.body}</p>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default GetComponent;