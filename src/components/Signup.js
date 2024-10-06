import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src={process.env.PUBLIC_URL + '/agriculture-woman.jpg'} alt="Agriculture" />
      </div>
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form>
          <div className="name-fields">
            <div className="first-name-field">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="First Name" required />
            </div>

            <div className="last-name-field">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Last Name" required />
            </div>
          </div>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" required />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" placeholder="Confirm Password" required />

          {/* Checkbox y texto eliminados */}

          <button type="submit">Sign Up</button>

          <div className="social-signup">
            <button className="google-signup">Sign up with Google</button>
            <button className="apple-signup">Sign up with Apple</button>
          </div>

          <p>Already have an account? <a href="/login">Log In</a></p>          

        </form>
      </div>
    </div>
  );
};

export default Signup;
