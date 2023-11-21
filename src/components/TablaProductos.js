import React from 'react';
import { Link } from 'react-router-dom';

const TablaProductos = ({ products }) => {
  return (
    <div>
      <h2>Tabla de Productos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(products).map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>S/.{product.price.toFixed(2)}</td>
              <td>{product.stock}</td>
              <td>
                <img src={product.image} alt="Imagen producto" img/>
              </td>
              <td>
                <Link to={`/productos/${product.id}`}>Ver</Link>
                <Link to={`/productos/${product.id}/editar`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaProductos;
