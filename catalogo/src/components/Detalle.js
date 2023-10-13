import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductApi } from '../contextState';
import './Detalle.css';

const Detalle = () => {
    const { id } = useParams();
    const { product, fetchProductByID } = useProductApi();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchProductByID(id).then(() => {
            setLoading(false);
        });
    }, [id]);

    return (
        <div className="detalle-container">
            {loading ? (
                <h1>Cargando...</h1>
            ) : (
                product ? (
                    <>
                        <div className="detalle-image">
                            <img src={product.thumbnail} alt={product.title} />
                        </div>
                        <div className="detalle-info">
                            <h2>{product.title}</h2>
                            <p className="detalle-description">{product.description}</p>
                            <div className="detalle-more-info">
                                <p>Categoría: {product.category}</p>
                                <p>Precio: ${product.price}</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>No se encontraron detalles para este producto.</p>
                )
            )}
        </div>
    );
};

export default Detalle;
