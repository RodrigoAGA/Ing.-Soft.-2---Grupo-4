import React from 'react';
import './Soporte.css';

const Soporte = () => {
  return (
    <div className="soporte-container">
      <div className="soporte-image">
        <img src={process.env.PUBLIC_URL + '/soporte-image.jpg'} alt="Soporte" />
      </div>
      <div className="soporte-form">
        <h2>Soporte</h2>
        <form>
          <div className="name-container">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" placeholder="Nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input type="text" id="apellido" placeholder="Apellido" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo</label>
            <input type="email" id="correo" placeholder="Correo" required />
          </div>

          <div className="form-group">
            <label htmlFor="tipo-problema">Tipo de problema</label>
            <select id="tipo-problema" required>
              <option value="" disabled selected>Tipo de problema</option>
              <option value="tecnico">Problema técnico</option>
              <option value="facturacion">Problema de facturación</option>
              <option value="otros">Otros</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="descripcion">Descripción del problema</label>
            <textarea id="descripcion" rows="4" placeholder="Descripción del problema" required></textarea>
          </div>

          <div className="form-group checkbox-group">
            <input type="checkbox" id="ayuda-presencial" />
            <label htmlFor="ayuda-presencial">Deseo recibir ayuda presencial.</label>
          </div>

          <div className="form-group submit-group">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Soporte;
