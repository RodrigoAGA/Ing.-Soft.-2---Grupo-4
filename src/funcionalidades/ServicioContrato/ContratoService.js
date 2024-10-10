const ContratoService = {
  obtenerContratos: () => {
    return JSON.parse(localStorage.getItem('contratos')) || [];
  },

  crearContrato: (contrato) => {
    const contratosExistentes = JSON.parse(localStorage.getItem('contratos')) || [];
    contratosExistentes.push(contrato);
    localStorage.setItem('contratos', JSON.stringify(contratosExistentes));
  },

  actualizarContratos: (contratos) => {
    localStorage.setItem('contratos', JSON.stringify(contratos));
  },

  eliminarContrato: (index) => {
    const contratosExistentes = JSON.parse(localStorage.getItem('contratos')) || [];
    contratosExistentes.splice(index, 1);
    localStorage.setItem('contratos', JSON.stringify(contratosExistentes));
  },

  registrarParticipacion: (indexContrato, correoUsuario) => {
    const contratosExistentes = JSON.parse(localStorage.getItem('contratos')) || [];
    const contrato = contratosExistentes[indexContrato];

    if (!contrato.participantes) {
      contrato.participantes = []; // Inicializa la lista de participantes si no existe
    }

    // Evita agregar el mismo participante varias veces
    if (!contrato.participantes.includes(correoUsuario)) {
      contrato.participantes.push(correoUsuario);
    }

    localStorage.setItem('contratos', JSON.stringify(contratosExistentes)); // Actualiza los contratos en localStorage
  },

  obtenerParticipantes: (indexContrato) => {
    const contratosExistentes = JSON.parse(localStorage.getItem('contratos')) || [];
    const contrato = contratosExistentes[indexContrato];
    return contrato.participantes || []; // Devuelve la lista de participantes o un array vacío
  }
};

export default ContratoService;
