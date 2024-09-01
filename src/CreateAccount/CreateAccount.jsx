import React, { useState } from 'react';
import './SignupStyle.css';
import imagee from './imagee.png';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showWelcomePage, setShowWelcomePage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { email, username, password });
    setShowWelcomePage(true);
  };

  return (
    <div className="signup-container">
      {showWelcomePage ? (
        <WelcomePage username={username} />
      ) : (
        <div className="left-frame">
          <div className="form-frame">
            <div className="welcome-box">
              <h1>Welcome to Design Community</h1>
              <p>Already have an account? <a href="/login">Log in</a></p>
            </div>
            <form onSubmit={handleSubmit} className="signup-form">
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <ul className="password-rules">
                  <li>Use 8 or more characters</li>
                  <li>One Uppercase character</li>
                  <li>One lowercase character</li>
                  <li>One special character</li>
                  <li>One number</li>
                </ul>
              </div>
              <div className="checkbox-field">
                <input type="checkbox" id="newsletter" name="newsletter" />
                <label htmlFor="newsletter">I want to receive emails about the product, feature updates, events, and marketing promotions.</label>
              </div>
              <p className="policy">By creating an account, you agree to the <a href="/terms">Terms of use</a> and <a href="/privacy">Privacy Policy</a>.</p>
              <button type="submit" className="create-account-btn">Create an account</button>
            </form>
            <p className="already-account">Already have an account? <a href="/login">Log in</a></p>
          </div>
      <div className="right-image" aria-placeholder='image'>
        <img className="image" src={imagee} alt="image!!" />
      </div>
        </div>
      )}
    </div>
  );
};

const WelcomePage = ({ username }) => {
  return (
    <div className="welcome-container">
      <h1>Welcome, {username}!</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </div>
  );
};

export default SignupForm;