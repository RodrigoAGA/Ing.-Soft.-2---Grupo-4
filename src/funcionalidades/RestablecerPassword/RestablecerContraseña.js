import React, { useState } from 'react';
import './RestablecerContraseña.css';
import { useNavigate } from 'react-router-dom';

const RestablecerContraseña = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isResetLinkSent, setIsResetLinkSent] = useState(false);
  const navigate = useNavigate();

  const handleResetRequest = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email);

    if (user) {
      alert('Se ha enviado un enlace de restablecimiento a su correo.');
      setIsResetLinkSent(true);
    } else {
      alert('El correo no está registrado.');
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(user => user.email === email);

    if (userIndex !== -1) {
      users[userIndex].password = newPassword;
      localStorage.setItem('users', JSON.stringify(users));
      alert('Contraseña restablecida exitosamente');
      navigate('/login');
    } else {
      alert('Error al restablecer la contraseña.');
    }
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-image">
        <img src={process.env.PUBLIC_URL + '/imagenrecuperarcontrasena.jpg'} alt="Agriculture" />
      </div>
      <div className="reset-password-form">
        {!isResetLinkSent ? (
          <form onSubmit={handleResetRequest}>
            <h2>Restablecer Contraseña</h2>
            <label htmlFor="email">Ingresa tu correo electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Enviar enlace de restablecimiento</button>
          </form>
        ) : (
          <form onSubmit={handlePasswordReset}>
            <h2>Ingresa Nueva Contraseña</h2>
            <label htmlFor="newPassword">Nueva Contraseña</label>
            <input
              type="password"
              id="newPassword"
              placeholder="Nueva Contraseña"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button type="submit">Restablecer Contraseña</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RestablecerContraseña;
