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
    contratosExistentes.splice(index, 1);  // Elimina el contrato en el índice indicado
    localStorage.setItem('contratos', JSON.stringify(contratosExistentes));  // Actualiza el localStorage
  },

  buscarContratos: (terminoBusqueda) => {
    const contratos = JSON.parse(localStorage.getItem('contratos')) || [];
    return contratos.filter(contrato => contrato.producto.toLowerCase().includes(terminoBusqueda.toLowerCase()));
  },

  filtrarPorCategoria: (categoria) => {
    const contratos = JSON.parse(localStorage.getItem('contratos')) || [];
    return contratos.filter(contrato => contrato.categoria === categoria);
  }
};

export default ContratoService;
