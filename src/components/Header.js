import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuDesplegable, setMenuDesplegable] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [userType, setUserType] = useState(null); // Manejamos el tipo de usuario
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser')); // Obtenemos el usuario completo
    if (user) {
      setLoggedInUser(user.email);
      setUserType(user.accountType); // Establecemos el tipo de cuenta (proveedor o empresa)
    }
  }, []);

  const alternarMenuDesplegable = () => {
    setMenuDesplegable(!menuDesplegable);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
    setUserType(null); // Limpiamos el tipo de cuenta
    navigate('/login'); // Redirigir al login tras el cierre de sesión
  };

  return (
    <header className="header-container">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/allpa-logo.png'} alt="Allpa Logo" />
      </div>
      <nav className="nav-links">
        <a href="/inicio">Inicio</a>
        {userType === 'empresa' ? (
          <a href="/pedidos-empresa">Pedidos Empresa</a>
        ) : (
          <a href="/pedidos-proveedor">Pedidos Proveedor</a>
        )}
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
          onClick={alternarMenuDesplegable}
        />
        {menuDesplegable && (
          <div className="dropdown-menu">
            {loggedInUser ? (
              <>
                <h3>Bienvenido, {loggedInUser}</h3>
                <button className="dropdown-button" onClick={handleLogout}>Cerrar Sesión</button>
              </>
            ) : (
              <>
                <h3>Bienvenido</h3>
                <button className="dropdown-button" onClick={() => navigate('/login')}>Iniciar Sesión</button>
                <button className="dropdown-button" onClick={() => navigate('/signup')}>Registrarse</button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
