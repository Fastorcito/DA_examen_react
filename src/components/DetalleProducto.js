import React from 'react';
import { useParams, } from 'react-router-dom';

const ProductDetail = ({ products }) => {
    const { id } = useParams();
    const product = products[id];

    if (!product) {
        return <div>No se encontró el producto con ID {id}</div>;
    }

    return (
        <div>
            <h1>Detalle del Producto</h1>
            <p>ID: {product.id}</p>
            <p>Nombre: {product.name}</p>
            <p>Precio: ${product.price.toFixed(2)}</p>
            <p>Stock: {product.stock}</p>
            <img src={product.image} alt="Imagen producto" img/>
        </div>
    );
};

export default ProductDetail;
