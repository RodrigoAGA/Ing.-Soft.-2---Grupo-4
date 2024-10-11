import React, { useState, useEffect } from 'react';
import './PedidosProveedor.css';
import ContratoService from '../funcionalidades/ServicioContrato/ContratoService';

const PedidosProveedor = () => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [categoria, setCategoria] = useState('');
  const [mostrarMas, setMostrarMas] = useState(false);
  const [contratos, setContratos] = useState([]);

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

  const eliminarContrato = (index) => {
    ContratoService.eliminarContrato(index);
    const nuevosContratos = ContratoService.obtenerContratos();
    setContratos(nuevosContratos);
  };

  const mostrarParticipantes = (indexContrato) => {
    const participantes = ContratoService.obtenerParticipantes(indexContrato);
    if (participantes && participantes.length > 0) {
      alert(`Participantes: ${participantes.join(', ')}`);
    } else {
      alert('No hay participantes en este contrato.');
    }
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
          <span className="search-icon">&#128269;</span> {/* Icono de lupa */}
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
        <div className="botones-header">
          <button className="btn-notificaciones" onClick={() => window.location.href = '/Notificaciones'}>
              Ver Notificaciones
          </button>
          <button className="btn-crear-contrato" onClick={() => window.location.href = '/crear-contrato'}>
              Crear contrato
          </button>
        </div>
      </div>
      
      <h2 className="titulo-mis-contratos">Mis contratos</h2>

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
              <div className="botones-contrato">
                <button onClick={() => eliminarContrato(index)}>Eliminar contrato</button>
                <button onClick={() => mostrarParticipantes(index)}>Ver participantes</button>
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

export default PedidosProveedor;
