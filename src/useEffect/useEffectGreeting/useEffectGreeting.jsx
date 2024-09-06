import React, { useEffect, useState } from "react";
import './greeting.css';

function UsernameGreeting() {
    const [username, setUsername] = useState("");
    const [greeting, setGreeting] = useState("");
    const [showGreeting, setShowGreeting] = useState(false);

    useEffect(() => {
        setGreeting(`Hello, ${username}`);
        console.log("renderd" );
    }, [username]);

    const handleShowGreeting = () => {
        setShowGreeting(true);
    };

    return (
        <div className="container">
            <input className="inputForm"
                type="text"
                placeholder="User name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            {showGreeting && <h1>{greeting}</h1>}
            <button className="btn" onClick={handleShowGreeting}>Go</button>
        </div>
    );
}

export default UsernameGreeting;