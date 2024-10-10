import React, { useState, useEffect } from 'react';
import './PedidosEmpresa.css';
import ContratoService from '../funcionalidades/ServicioContrato/ContratoService';

const PedidosEmpresa = () => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [categoria, setCategoria] = useState('');
  const [mostrarMas, setMostrarMas] = useState(false);
  const [contratos, setContratos] = useState([]);

  // Obtenemos el correo del usuario logueado desde localStorage
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const correoUsuario = loggedInUser?.email || '';  // Obtenemos el correo del usuario logueado

  useEffect(() => {
    const contratosGuardados = ContratoService.obtenerContratos();
    setContratos(contratosGuardados);
  }, []);

  const alternarMostrarMas = () => {
    setMostrarMas(!mostrarMas);
  };

  const manejarBusqueda = () => {
    console.log('Buscando:', terminoBusqueda, 'Categoría:', categoria);
  };

  const participarEnContrato = (indexContrato) => {
    ContratoService.registrarParticipacion(indexContrato, correoUsuario);  // Registra la participación de la empresa
    alert(`Has participado en el contrato ${contratos[indexContrato].producto}`);
    const contratosActualizados = ContratoService.obtenerContratos();
    setContratos(contratosActualizados);  // Actualiza la lista de contratos en la UI
  };

  const contratosMostrar = mostrarMas ? contratos : contratos.slice(0, 4);

  return (
    <div className="pedidos-container">
      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar..."
            value={terminoBusqueda}
            onChange={(e) => setTerminoBusqueda(e.target.value)}
          />
          <span className="search-icon">&#128269;</span>
        </div>
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="">Categorías</option>
          <option value="vegetales">Vegetales</option>
          <option value="granos">Granos</option>
          <option value="frutas">Frutas</option>
        </select>
        <button onClick={manejarBusqueda}>Buscar</button>
      </div>

      <div className="header-pedidos">
        <h1 className="titulo">Pedidos</h1>
        <button className="btn-ver-contratos">
          Ver contratos
        </button>
      </div>
      <h2 className="titulo-contratos-destacados">Contratos Destacados</h2>

      <div className="productos-grid">
        {contratosMostrar.length > 0 ? (
          contratosMostrar.map((contrato, index) => (
            <div key={index} className="producto-card">
              <img src={contrato.imagen} alt={contrato.producto} />
              <h3>{contrato.producto}</h3>
              <div className="descripcion-producto">
                <p>
                  Empresa: {contrato.empresa}
                  <br />
                  Tipo de contrato: {contrato.tipoContrato}
                  <br />
                  Cantidad: {contrato.cantidad} tn.
                  <br />
                  Fecha: {contrato.fechaPublicacion}
                </p>
              </div>
              <div className="acciones-contrato">
                <button onClick={() => participarEnContrato(index)}>Participar</button>
                <button onClick={() => alert(`Participantes: ${ContratoService.obtenerParticipantes(index).join(', ')}`)}>
                  Ver participantes
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay contratos disponibles.</p>
        )}
      </div>

      <div className="ver-mas-container">
        {contratos.length > 4 && (
          <button className="ver-mas" onClick={alternarMostrarMas}>
            {mostrarMas ? 'Ver menos' : 'Ver más'}
          </button>
        )}
      </div>
    </div>
  );
};

export default PedidosEmpresa;

