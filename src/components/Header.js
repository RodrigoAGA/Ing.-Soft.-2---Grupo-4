import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/allpa-logo.png'} alt="Allpa Logo" />
      </div>
      <nav className="nav-links">
        <a href="#">Inicio</a>
        <a href="#">Pedidos</a>
        <a href="#">Productos</a>
        <a href="#">Sobre nosotros</a>
        <div className="support-dropdown">
          <a href="#">Soporte &#9662;</a>
        </div>
      </nav>
      <div className="icons">
        <img src={process.env.PUBLIC_URL + '/notification-icon.png'} alt="Notifications" />
        <img src={process.env.PUBLIC_URL + '/settings-icon.png'} alt="Settings" />
        <img src={process.env.PUBLIC_URL + '/user-icon.png'} alt="User" />
      </div>
    </header>
  );
}

export default Header;
