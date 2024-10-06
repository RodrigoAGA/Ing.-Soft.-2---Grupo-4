import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [MenuDesplegable, SetMenuDesplegable] = useState(false);
  const navigate = useNavigate(); 

  const AlternarMenuDesplegable = () => {
    SetMenuDesplegable(!MenuDesplegable);
  };

  const LoginClick = () => {
    SetMenuDesplegable(false); 
    navigate('/login'); 
  };
  const RegisterClick = () => {
    SetMenuDesplegable(false); 
    navigate('/signup'); 
  };

  return (
    <header className="header-container">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/allpa-logo.png'} alt="Allpa Logo" />
      </div>
      <nav className="nav-links">
        <a href="/">Inicio</a>
        <a href="/pedidos">Pedidos</a>
        <a href="#">Productos</a>
        <a href="#">Sobre nosotros</a>
        <div className="support-dropdown">
          <a href="/soporte">Soporte &#9662;</a> 
        </div>
      </nav>
      <div className="icons">
        <img src={process.env.PUBLIC_URL + '/notification-icon.png'} alt="Notifications" />
        <img src={process.env.PUBLIC_URL + '/settings-icon.png'} alt="Settings" />
        <img 
          src={process.env.PUBLIC_URL + '/user-icon.png'} 
          alt="User" 
          className="user-icon"
          onClick={AlternarMenuDesplegable}
        />
        {MenuDesplegable && (
          <div className="dropdown-menu">                                           
            <h3>Bienvenido</h3>
            <button className="dropdown-button" onClick={LoginClick}>Iniciar Sesión</button>
            <button className="dropdown-button" onClick={RegisterClick}>Registrarse</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
