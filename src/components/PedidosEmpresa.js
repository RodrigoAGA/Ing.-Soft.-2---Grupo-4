import React, { useState } from 'react';
import './PedidosEmpresa.css';

const PedidosEmpresa = () => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [categoria, setCategoria] = useState('');
  const [mostrarMas, setMostrarMas] = useState(false);

  const alternarMostrarMas = () => {
    setMostrarMas(!mostrarMas);
  };

  const manejarBusqueda = () => {
    console.log('Buscando:', terminoBusqueda, 'Categoría:', categoria);
  };

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
          <option value="otros">Otros</option>
        </select>
        <button onClick={manejarBusqueda}>Buscar</button>
      </div>

      <h1 className="titulo">Pedidos</h1>
      <h2>Contratos destacados</h2>

      <div className="productos-grid">

        <div className="producto-card">
          <img src={process.env.PUBLIC_URL + '/Papa.jpg'} alt="Papa" />
          <h3>Papa</h3>
          <div className="descripcion-producto">
            <p>
              Tubérculo comestible cultivado en varias partes del mundo.
              <br />
              Cantidad: 9999 tn.
              <br />
              Fecha: 01/01/2023
            </p>
            <p>
              Nombre de la empresa
              <br />
              Contrato privado
            </p>
          </div>
          <button>Participar</button>
        </div>

        <div className="producto-card">
          <img src={process.env.PUBLIC_URL + '/Quinua.jpg'} alt="Quinua" />
          <h3>Quinua</h3>
          <div className="descripcion-producto">
            <p>
              Planta andina de la que se obtienen granos ricos en proteínas.
              <br />
              Cantidad: 9999 tn.
              <br />
              Fecha: 01/01/2023
            </p>
            <p>
              Nombre de la empresa
              <br />
              Contrato privado
            </p>
          </div>
          <button>Participar</button>
        </div>

        <div className="producto-card">
          <img src={process.env.PUBLIC_URL + '/Maiz.jpg'} alt="Maíz" />
          <h3>Maíz</h3>
          <div className="descripcion-producto">
            <p>
              Especie de planta gramínea anual originaria de Mesoamérica.
              <br />
              Cantidad: 9999 tn.
              <br />
              Fecha: 01/01/2023
            </p>
            <p>
              Nombre de la empresa
              <br />
              Contrato privado
            </p>
          </div>
          <button>Participar</button>
        </div>

        <div className="producto-card">
          <img src={process.env.PUBLIC_URL + '/Trigo.jpg'} alt="Trigo" />
          <h3>Trigo</h3>
          <div className="descripcion-producto">
            <p>
              Planta gramínea con espigas de cuyos granos molidos se saca la harina.
              <br />
              Cantidad: 9999 tn.
              <br />
              Fecha: 01/01/2023
            </p>
            <p>
              Nombre de la empresa
              <br />
              Contrato privado
            </p>
          </div>
          <button>Participar</button>
        </div>

        {mostrarMas && (
          <>
            <div className="producto-card">
              <img src={process.env.PUBLIC_URL + '/Arroz.jpg'} alt="Arroz" />
              <h3>Arroz</h3>
              <div className="descripcion-producto">
                <p>
                  Cereal básico en muchas culturas culinarias del mundo.
                  <br />
                  Cantidad: 9999 tn.
                  <br />
                  Fecha: 01/01/2023
                </p>
                <p>
                  Nombre de la empresa
                  <br />
                  Contrato privado
                </p>
              </div>
              <button>Participar</button>
            </div>

            <div className="producto-card">
              <img src={process.env.PUBLIC_URL + '/Algodon.jpg'} alt="Algodón" />
              <h3>Algodón</h3>
              <div className="descripcion-producto">
                <p>
                  Fibra natural utilizada principalmente para la producción de textiles.
                  <br />
                  Cantidad: 9999 tn.
                  <br />
                  Fecha: 01/01/2023
                </p>
                <p>
                  Nombre de la empresa
                  <br />
                  Contrato privado
                </p>
              </div>
              <button>Participar</button>
            </div>

            <div className="producto-card">
              <img
                src={process.env.PUBLIC_URL + '/Kiwicha.jpg'}
                alt="Kiwicha"
              />
              <h3>Kiwicha</h3>
              <div className="descripcion-producto">
                <p>
                  Pseudocereal de gran valor nutritivo originario de los Andes.
                  <br />
                  Cantidad: 9999 tn.
                  <br />
                  Fecha: 01/01/2023
                </p>
                <p>
                  Nombre de la empresa
                  <br />
                  Contrato privado
                </p>
              </div>
              <button>Participar</button>
            </div>

            <div className="producto-card">
              <img
                src={process.env.PUBLIC_URL + '/Canihua.jpg'}
                alt="Cañihua"
              />
              <h3>Cañihua</h3>
              <div className="descripcion-producto">
                <p>
                  Grano pequeño originario de los Andes, similar a la quinua.
                  <br />
                  Cantidad: 9999 tn.
                  <br />
                  Fecha: 01/01/2023
                </p>
                <p>
                  Nombre de la empresa
                  <br />
                  Contrato privado
                </p>
              </div>
              <button>Participar</button>
            </div>
          </>
        )}
      </div>

      <div className="ver-mas-container">
        <button className="ver-mas" onClick={alternarMostrarMas}>
          {mostrarMas ? 'Ver menos' : 'Ver más'}
        </button>
      </div>
    </div>
  );
};

export default PedidosEmpresa;
