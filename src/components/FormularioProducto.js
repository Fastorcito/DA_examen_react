import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductForm = ({ products, onSave }) => {
    const { id } = useParams();
    const product = id ? products[id] : { name: '', price: '', stock: '', image: '' };

    const [formData, setFormData] = useState(product);
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const actualizarProducto = { ...formData, id: id || new Date().getTime().toString() };
        onSave(actualizarProducto);

        navigate('/')
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <br />
            <label>
                Precio:
                <input type="number" name="price" value={formData.price} onChange={handleChange} />
            </label>
            <br />
            <label>
                Stock:
                <input type="number" name="stock" value={formData.stock} onChange={handleChange} />
            </label>
            <br />
            <label>
                Imagen:
                <input type="text" name="image" value={formData.image} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Guardar</button>
        </form>
    );
};

export default ProductForm;
