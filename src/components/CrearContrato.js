import React, { useState } from 'react';
import './CrearContrato.css';
import ContratoService from '../funcionalidades/ServicioContrato/ContratoService'; // Importamos el servicio de contratos

const CrearContrato = () => {
  const [categoria, setCategoria] = useState('');
  const [producto, setProducto] = useState('');
  const [imagen, setImagen] = useState('');

  const categorias = {
    vegetales: ['Papa', 'Quinua', 'Trigo'],
    granos: ['Maiz', 'Arroz', 'Algodon'],
    frutas: ['Kiwicha', 'Canihua'],
  };

  const manejarCambioCategoria = (e) => {
    setCategoria(e.target.value);
    setProducto(''); // Reiniciar selección de producto cuando cambia la categoría
  };

  const manejarCambioProducto = (e) => {
    const seleccionado = e.target.value;
    setProducto(seleccionado);
    setImagen(`${process.env.PUBLIC_URL}/${seleccionado}.jpg`); // Usamos el nombre exacto del producto para cargar la imagen
  };

  const manejarEnvioFormulario = (e) => {
    e.preventDefault();

    const contrato = {
      empresa: document.getElementById('empresa').value,
      tipoContrato: document.getElementById('tipoContrato').value,
      cantidad: document.getElementById('cantidad').value,
      fechaPublicacion: document.getElementById('fechaPublicacion').value,
      categoria,
      producto,
      imagen
    };
    
    ContratoService.crearContrato(contrato); // Usamos el servicio para crear el contrato
    alert('Contrato creado exitosamente');

    // Limpiar el formulario después de crear el contrato
    document.getElementById('empresa').value = '';
    document.getElementById('tipoContrato').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('fechaPublicacion').value = '';
    setCategoria('');
    setProducto('');
    setImagen('');
  };

  return (
    <div className="formulario-contrato-container">
      <h2>Crear Contrato</h2>
      <form onSubmit={manejarEnvioFormulario}>
        <label htmlFor="empresa">Nombre de la empresa</label>
        <input type="text" id="empresa" placeholder="Nombre de la empresa" required />

        <label htmlFor="tipoContrato">Tipo de contrato</label>
        <select id="tipoContrato" required>
          <option value="">Selecciona el tipo de contrato</option>
          <option value="publico">Público</option>
          <option value="privado">Privado</option>
        </select>

        <label htmlFor="cantidad">Cantidad (en Tn)</label>
        <input type="number" id="cantidad" placeholder="Cantidad" required />

        <label htmlFor="fechaPublicacion">Fecha de publicación</label>
        <input type="date" id="fechaPublicacion" required />

        <label htmlFor="categoria">Categoría</label>
        <select id="categoria" value={categoria} onChange={manejarCambioCategoria} required>
          <option value="">Selecciona una categoría</option>
          <option value="vegetales">Vegetales</option>
          <option value="granos">Granos</option>
          <option value="frutas">Frutas</option>
        </select>

        {categoria && (
          <>
            <label htmlFor="producto">Producto</label>
            <select id="producto" value={producto} onChange={manejarCambioProducto} required>
              <option value="">Selecciona un producto</option>
              {categorias[categoria].map((prod) => (
                <option key={prod} value={prod}>
                  {prod}
                </option>
              ))}
            </select>
          </>
        )}

        <button type="submit" className="btn-enviar">
          Crear Contrato
        </button>
      </form>

      {/* Previsualización de la imagen */}
      <div className="imagen-previsualizacion">
        {producto && <img src={imagen} alt={`Previsualización de ${producto}`} />}
      </div>
    </div>
  );
};

export default CrearContrato;

