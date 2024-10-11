
import React, { useEffect, useState } from 'react';
import ContratoService from '../ServicioContrato/ContratoService';
import './NotificacionesProveedor.css';

const NotificacionesProveedor = () => {
  const [notificaciones, setNotificaciones] = useState([]);

  useEffect(() => {
    // Obtener las notificaciones desde el servicio
    const notificacionesGuardadas = ContratoService.obtenerNotificaciones();
    setNotificaciones(notificacionesGuardadas);
  }, []);

  return (
    <div className="notificaciones-container">
      <h1>Mis Notificaciones</h1>
      <div className="notificaciones-list">
        {notificaciones.length > 0 ? (
          notificaciones.map((notificacion, index) => (
            <div key={index} className="notificacion-card">
              <p>{notificacion.mensaje}</p>
            </div>
          ))
        ) : (
          <p>No tienes notificaciones aún.</p>
        )}
      </div>
    </div>
  );
};

export default NotificacionesProveedor;

