import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuDesplegable, setMenuDesplegable] = useState(false);
  const navigate = useNavigate(); 

  const alternarMenuDesplegable = () => {
    setMenuDesplegable(!menuDesplegable);
  };

  const loginClick = () => {
    setMenuDesplegable(false); 
    navigate('/login'); 
  };

  const registerClick = () => {
    setMenuDesplegable(false); 
    navigate('/signup'); 
  };

  return (
    <header className="header-container">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/allpa-logo.png'} alt="Allpa Logo" />
      </div>
      <nav className="nav-links">
        <a href="/inicio">Inicio</a>
        <a href="/pedidos-empresa">Pedidos</a>
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
          onClick={alternarMenuDesplegable}  // Al hacer clic se despliega el menú
        />
        {menuDesplegable && (
          <div className="dropdown-menu">
            <h3>Bienvenido</h3>
            <button className="dropdown-button" onClick={loginClick}>Iniciar Sesión</button>
            <button className="dropdown-button" onClick={registerClick}>Registrarse</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
