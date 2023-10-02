// Product.js
import React from 'react';

const Product = ({ id, name, category, image }) => {
    return (
        <div className="product-item">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{category}</p>
        </div>
    );
};

export default Product;
