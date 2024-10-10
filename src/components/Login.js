import React, { useState } from 'react';
import './Login.css'; // Estilos para el componente
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      alert('Sesión iniciada');
      localStorage.setItem('loggedInUser', email); // Guardar el usuario actual en localStorage
      navigate('/inicio'); // Redirigir a la página de inicio
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={process.env.PUBLIC_URL + '/corn-field.jpg'} alt="Corn Field" />
      </div>
      <div className="login-form">
        <h2>Log In</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="remember-forgot">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Log In</button>

          {/* Al hacer clic en cualquier botón se hace login */}
          <div className="social-login">
            <button type="submit" className="google-login">Log in with Google</button>
            <button type="submit" className="apple-login">Log in with Apple</button>
          </div>

          <p>No account yet? <a href="/signup">Sign Up</a></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
