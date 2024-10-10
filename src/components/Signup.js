import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(user => user.email === email)) {
      alert('El correo ya está registrado');
      return;
    }

    const newUser = { firstName, lastName, email, password, accountType };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Usuario registrado exitosamente');
    navigate('/login'); // Redirigir al login tras el registro
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src={process.env.PUBLIC_URL + '/agriculture-woman.jpg'} alt="Agriculture" />
      </div>
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="name-fields">
            <div className="first-name-field">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="last-name-field">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="account-type">
            <label>Tipo de cuenta:</label>
            <div className="radio-buttons">
              <label>
                <input
                  type="radio"
                  name="accountType"
                  value="proveedor"
                  checked={accountType === 'proveedor'}
                  onChange={(e) => setAccountType(e.target.value)}
                  required
                />
                Soy proveedor
              </label>
              <label>
                <input
                  type="radio"
                  name="accountType"
                  value="empresa"
                  checked={accountType === 'empresa'}
                  onChange={(e) => setAccountType(e.target.value)}
                />
                Soy empresa
              </label>
            </div>
          </div>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>

          {/* Al hacer clic en cualquier botón se realiza el registro */}
          <div className="social-signup">
            <button type="submit" className="google-signup">Sign up with Google</button>
            <button type="submit" className="apple-signup">Sign up with Apple</button>
          </div>

          <p>Already have an account? <a href="/login">Log In</a></p>          
        </form>
      </div>
    </div>
  );
};

export default Signup;
