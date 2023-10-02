import React from 'react';
import { useParams } from 'react-router-dom';
import products from './listaProducts';
import './Detalle.css'

const Detalle = () => {
    const { id } = useParams();
    const product = products.find((product) => product.id === parseInt(id));

    if (!product) {
        return <div>No se encontró el producto.</div>;
    }

    return (
        <div className="detalle-container">
            <div className="detalle-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="detalle-info">
                <h2>{product.name}</h2>
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
