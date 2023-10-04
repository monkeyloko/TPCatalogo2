import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { getProductosByID } from './service/apiService';
import './Detalle.css'

const Detalle = () => {
    const { id } = useParams();
    const [product, setProducto] = useState({});
    

    useEffect(() => {
        getProductosByID(id)
            .then((response) => {
                console.log('API Response:', response); // Log the API response
                setProducto(response);
            })
            .catch((error) => {
                console.error('API Error:', error); // Log any API errors
            });
    }, [id]);


    return (
        <div className="detalle-container">
            <div className="detalle-image">
                <img src={product.images[0]} alt={product.title} />
            </div>
            <div className="detalle-info">
                <h2>{product.title}</h2>
                <p className="detalle-description">{product.description}</p>
                <div className="detalle-more-info">
                    <p>Categoría: {product.category}</p>
                    <p>Precio: ${product.price}</p>
                    {/* Agrega más detalles del producto aquí */}
                </div>
            </div>
        </div>
    );
};

export default Detalle;
