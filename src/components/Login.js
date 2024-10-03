import React from 'react';
import './Login.css'; // Estilos para el componente

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-image">
        <img src={process.env.PUBLIC_URL + '/corn-field.jpg'} alt="Corn Field" />
      </div>
      <div className="login-form">
        <h2>Log In</h2>
        <form>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Placeholder" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Placeholder" required />

          <div className="remember-forgot">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Log In</button>

          <div className="social-login">
            <button className="google-login">Log in with Google</button>
            <button className="apple-login">Log in with Apple</button>
          </div>

          <p>No account yet? <a href="/signup">Sign Up</a></p>

        </form>
      </div>
    </div>
  );
}

export default Login;
