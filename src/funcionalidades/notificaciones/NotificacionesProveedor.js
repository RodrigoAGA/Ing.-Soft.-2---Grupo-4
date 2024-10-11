import React, { useEffect, useState } from 'react';
import './NotificacionesProveedor.css';
import ContratoService from '../ServicioContrato/ContratoService';

const NotificacionesProveedor = () => {
  const [notificaciones, setNotificaciones] = useState([]);

  useEffect(() => {
    // Cargar las notificaciones al cargar la página
    const notificacionesGuardadas = ContratoService.obtenerNotificaciones();
    setNotificaciones(notificacionesGuardadas);
  }, []);

  const limpiarNotificaciones = () => {
    ContratoService.limpiarNotificaciones();
    setNotificaciones([]);  // Limpiar el estado de las notificaciones después de eliminarlas
    alert('Todas las notificaciones han sido eliminadas.');
  };

  return (
    <div className="notificaciones-container">
      <h1>Notificaciones</h1>
      {notificaciones.length > 0 ? (
        <ul className="lista-notificaciones">
          {notificaciones.map((notificacion, index) => (
            <li key={index} className="notificacion-item">
              {notificacion}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes notificaciones nuevas.</p>
      )}

      {notificaciones.length > 0 && (
        <button onClick={limpiarNotificaciones} className="btn-limpiar-notificaciones">
          Limpiar notificaciones
        </button>
      )}
    </div>
  );
};

export default NotificacionesProveedor;
