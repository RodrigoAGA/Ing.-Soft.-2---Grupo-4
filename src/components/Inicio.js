import React from 'react';
import './Inicio.css';

const Inicio = () => {
  return (
    <div className="inicio-container">
      
      {/* Primera Cara */}
      <section className="inicio-hero" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/inicio-imagen1.jpg)` }}>
        <div className="hero-content">
          <h1>
            Obtén la oportunidad de hacer crecer tu negocio
          </h1>
          <p>
            Con Allpa tendrás la posibilidad de vender tus productos y ser parte de los grandes contratos,
            colaborando en conjunto con más productores para satisfacer la gran demanda de productos agrícolas
            alrededor de todo el Perú.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Soy un proveedor</button>
            <button className="btn-secondary">Soy una empresa</button>
          </div>
        </div>
      </section>

      {/* Segunda Cara */}
      <section className="inicio-servicios">
        <h2>Descubre nuestros servicios</h2>
        <div className="servicios-grid">
          <div className="servicio">
            <img src={process.env.PUBLIC_URL + '/inicio-icono1.png'} alt="Icono Servicio 1" />
            <h3>Vende tus productos</h3>
            <p>Lista tus productos en nuestra página y dale visibilidad a tu negocio.</p>
            <a href="#">Conoce más →</a>
          </div>
          <div className="servicio">
            <img src={process.env.PUBLIC_URL + '/inicio-icono2.png'} alt="Icono Servicio 2" />
            <h3>Participa de contratos</h3>
            <p>Colabora junto a más proveedores para completar grandes contratos.</p>
            <a href="#">Conoce más →</a>
          </div>
          <div className="servicio">
            <img src={process.env.PUBLIC_URL + '/inicio-icono3.png'} alt="Icono Servicio 3" />
            <h3>Estadísticas de tu negocio</h3>
            <p>Mejora la toma de decisiones con nuestros indicadores.</p>
            <a href="#">Conoce más →</a>
          </div>
        </div>

        <div className="estadisticas">
          <div className="estadisticas-header">
            <h3>Operamos en más de 16 regiones</h3>
            <p>Sé parte de la comunidad de emprendedores</p>
          </div>
          <div className="estadisticas-grid">
            <div className="estadistica-item">
              <img src={process.env.PUBLIC_URL + '/inicio-icono1.png'} alt="Icono 1" />
              <div className="estadistica-texto">
                <h4>10,000+</h4>
                <p>Visitas diarias</p>
              </div>
            </div>
            <div className="estadistica-item">
              <img src={process.env.PUBLIC_URL + '/inicio-icono2.png'} alt="Icono 2" />
              <div className="estadistica-texto">
                <h4>2 Millones</h4>
                <p>Usuarios</p>
              </div>
            </div>
            <div className="estadistica-item">
              <img src={process.env.PUBLIC_URL + '/inicio-icono3.png'} alt="Icono 3" />
              <div className="estadistica-texto">
                <h4>500+</h4>
                <p>Clientes</p>
              </div>
            </div>
            <div className="estadistica-item">
              <img src={process.env.PUBLIC_URL + '/inicio-icono4.png'} alt="Icono 4" />
              <div className="estadistica-texto">
                <h4>140</h4>
                <p>Ciudades</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tercera Cara */}
      <section className="inicio-app">
        <div className="app-content">
          <h2>Maneja tu negocio desde tu celular</h2>
          <p>
            Descarga nuestra aplicación móvil y empieza a manejar tu negocio, administra tus ventas y participa
            de grandes contratos. Date a conocer como proveedor destacado.
          </p>
          <div className="app-buttons">
            <img src={process.env.PUBLIC_URL + '/google-play.png'} alt="Google Play" />
            <img src={process.env.PUBLIC_URL + '/app-store.png'} alt="App Store" />
          </div>
        </div>
        <div className="app-images">
          <img src={process.env.PUBLIC_URL + '/inicio-phone1.png'} alt="Phone 1" />
          <img src={process.env.PUBLIC_URL + '/inicio-phone2.png'} alt="Phone 2" style={{ marginLeft: '-50px' }} />
        </div>
      </section>

    </div>
  );
};

export default Inicio;
