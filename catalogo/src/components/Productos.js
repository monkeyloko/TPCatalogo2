import React, { useState } from 'react';
import './Productos.css'; // Asegúrate de que la ruta al archivo CSS sea correcta
import Product from './Product';
import products from './listaProducts';
import { Link } from 'react-router-dom';

const Productos = () => {
    const [search, setSearch] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');

    const filteredProducts = products.filter((product) => {
        return (
            product.name.toLowerCase().includes(search.toLowerCase()) &&
            (categoryFilter === '' || product.category === categoryFilter)
        );
    });

    return (
        <div className="productos-container">
            <div className="search-filter">
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />
                <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="category-select"
                >
                    <option value="">Filtrar por categoría</option>
                    <option value="Categoría 1">Categoría 1</option>
                    <option value="Categoría 2">Categoría 2</option>
                </select>
            </div>

            <div className="product-grid">
                {filteredProducts.map((product) => (
                    <Link to={`/detalle/${product.id}`} key={product.id}>
                        <Product
                            id={product.id}
                            name={product.name}
                            category={product.category}
                            image={product.image}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Productos;
