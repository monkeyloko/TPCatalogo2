// PokemonContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export function ProductsProvider({ children }) {

    const [products, setProductsData] = useState([]);
    const [product, setProduct] = useState(null)
    const [categories, setCategories] = useState([]);



    useEffect(() => {
        async function fetchProductData() {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setProductsData(response.data.products);
            } catch (error) {
                console.error('Error fetching Products data:', error);
            }
        }
        fetchProductData();
    }, []);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await axios.get('https://dummyjson.com/products/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories data:', error);
            }
        }
        fetchCategories();
    }, []);

    async function fetchProductByID(id) {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching categories data:', error);
        }
    }

    return (
        <ProductContext.Provider value={{ products, categories, product, fetchProductByID }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProductApi() {
    return useContext(ProductContext);
}