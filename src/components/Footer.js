import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {}
        <div className="footer-left">
          <img src="Allpa.png" alt="Allpa Logo" className="footer-logo" />
        </div>
        <div className="footer-right">
          <nav>
            <ul className="footer-links">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Pedidos</a></li>
              <li><a href="#">Compra</a></li>
              <li><a href="#">Venta</a></li>
              <li><a href="#">Acerca de</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </nav>
          <div className="social-icons">
            <a href="#"><img src="yt.png" alt="YouTube" /></a>
            <a href="#"><img src="fb.png" alt="Facebook" /></a>
            <a href="#"><img src="twtt.png" alt="Twitter" /></a>
            <a href="#"><img src="insta.png" alt="Instagram" /></a>
            <a href="#"><img src="linke.png" alt="LinkedIn" /></a>
          </div>
          <p className="footer-rights">Allpa Distribuidores © 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;