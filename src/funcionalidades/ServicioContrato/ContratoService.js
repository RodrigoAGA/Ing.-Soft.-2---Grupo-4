// ContratoService.js
const ContratoService = {
    obtenerContratos: () => {
      return JSON.parse(localStorage.getItem('contratos')) || [];
    },
  
    crearContrato: (contrato) => {
      const contratosExistentes = JSON.parse(localStorage.getItem('contratos')) || [];
      contratosExistentes.push(contrato);
      localStorage.setItem('contratos', JSON.stringify(contratosExistentes));
    },
  
    eliminarContrato: (index) => {
      const contratosExistentes = JSON.parse(localStorage.getItem('contratos')) || [];
      contratosExistentes.splice(index, 1);
      localStorage.setItem('contratos', JSON.stringify(contratosExistentes));
    }
  };
  
  export default ContratoService;
  