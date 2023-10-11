import React, { useState, useEffect } from 'react';
import './Productos.css'; // Make sure the CSS file path is correct
import Product from './Product';
import { Link } from 'react-router-dom';
import { getProductos } from '../service/apiService'; // Import the getProductos function
import { ActionTypes, useContextState } from "../contextState";

const Productos = () => {
    const [search, setSearch] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [products, setProducts] = useState([]); // State to store the fetched products
    const { contextState, setContextState } = useContextState();

    useEffect(() => {
        setContextState({ newValue: true, type: ActionTypes.setLoading });
        getProductos()
            .then((response) => {
                setContextState({ newValue: false, type: ActionTypes.setLoading });
                setContextState({ newValue: response, type: ActionTypes.setProducts });
                console.log('API Response:', contextState.allProducts);
            })
            .catch((error) => {
                console.error('API Error:', error);
            });
    }, []);
    

   
    const uniqueCategories = [...new Set(contextState?.allProducts?.map((product) => product.category))];

    const filteredProducts = contextState?.allProducts?.filter((product) => {
        return (
            product.title.toLowerCase().includes(search.toLowerCase()) &&
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
                    {uniqueCategories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div className="product-grid">
                {filteredProducts.map((product) => (
                    <Link to={`/detalle/${product.id}`} key={product.id}>
                        <Product
                            id={product.id}
                            name={product.title}
                            category={product.category}
                            image={product.thumbnail}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Productos;
