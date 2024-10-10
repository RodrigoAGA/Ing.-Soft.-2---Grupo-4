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
