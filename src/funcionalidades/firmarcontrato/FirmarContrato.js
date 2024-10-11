import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ContratoService from '../ServicioContrato/ContratoService';
import './FilmarContrato.css';

const FirmarContrato = () => {
  const { idContrato } = useParams(); // Obtener el ID del contrato desde la URL
  const [participantes, setParticipantes] = useState([]);
  const [contratoFirmado, setContratoFirmado] = useState(false);

  useEffect(() => {
    const participantesContrato = ContratoService.obtenerParticipantes(idContrato);
    setParticipantes(participantesContrato);
  }, [idContrato]);

  const firmarContrato = (correoUsuario) => {
    ContratoService.firmarContrato(idContrato, correoUsuario); // Llamar a la función para firmar el contrato
    setContratoFirmado(true); // Marcar el contrato como firmado
  };

  return (
    <div className="firmar-contrato-container">
      <h1>Firmar Contrato</h1>
      {contratoFirmado ? (
        <p>El contrato ha sido firmado con éxito.</p>
      ) : (
        <div>
          <h2>Participantes</h2>
          {participantes.length > 0 ? (
            <ul>
              {participantes.map((correo, index) => (
                <li class="listakey" key={index}>
                  {correo}
                  <button class="botoncorrec" onClick={() => firmarContrato(correo)}>Elegir para firmar contrato</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay participantes para este contrato.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FirmarContrato;

