import React, { useState, useEffect } from 'react';
import './Productos.css';
import Product from './Product';
import { Link } from 'react-router-dom';
import { useProductApi } from '../contextState';

const Productos = () => {
    const { products, categories } = useProductApi();
    const [search, setSearch] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (categoryFilter) {
            fetchProductsByCategory(categoryFilter);
        } else {
            setFilteredProducts(products);
        }
    }, [categoryFilter, products]);

    const fetchProductsByCategory = async (category) => {
        try {
            const response = await fetch(`https://dummyjson.com/products/category/${category}`);
            if (response.ok) {
                const data = await response.json();
                setFilteredProducts(data.products);
            } else {
                console.error('Error fetching products by category');
                setFilteredProducts([]);
            }
        } catch (error) {
            console.error('Error fetching products by category:', error);
            setFilteredProducts([]);
        }
    };

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
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div className="product-grid">
                {filteredProducts
                    .filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
                    .map((product) => (
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
