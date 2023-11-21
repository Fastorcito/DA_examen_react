import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TablaProductos from './components/TablaProductos';
import DetalleProducto from './components/DetalleProducto';
import FormularioProducto from './components/FormularioProducto';
import productos from './data/data';

const App = () => {
    const [products, setProducts] = React.useState(productos);

    const handleSaveProduct = (updatedProduct) => {
        const newProducts = { ...products, [updatedProduct.id]: updatedProduct };
        setProducts(newProducts);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<TablaProductos products={products} />}/>
                <Route path="/productos/:id" exact element={<DetalleProducto products={products} />}/>
                <Route path="/productos/:id/editar" exact element={<FormularioProducto products={products} onSave={handleSaveProduct} />}/>
                <Route path="/crear" exact element={<FormularioProducto products={products} onSave={handleSaveProduct} />}/>
            </Routes>
        </Router>
    );
};

export default App;
