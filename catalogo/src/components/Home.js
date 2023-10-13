import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';
import Product from './Product';
import { useProductApi } from '../contextState';

const Home = () => {
    const { products } = useProductApi();

    const getRandomProductImages = (count) => {
        const randomImages = [];
        for (let i = 0; i < count; i++) {
            const randomProduct = products[Math.floor(Math.random() * products.length)];
            if (randomProduct && randomProduct.images && randomProduct.images.length > 0) {
                const randomImageIndex = Math.floor(Math.random() * randomProduct.images.length);
                randomImages.push(randomProduct.images[randomImageIndex]);
            }
        }
        return randomImages;
    };

    const carouselImages = getRandomProductImages(3);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <div className="home">
            <Slider className="slider" {...settings}>
                {carouselImages.map((image, index) => (
                    <div key={index} className="carousel-slide">
                        <div className="image-container">
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="product-title">
                <h2>Productos</h2>
            </div>
            <div className="product-grid">
                {products.length > 0 ? (
                    products.map((product) => (
                        <Link to={`/detalle/${product.id}`} key={product.id}>
                            <Product
                                id={product.id}
                                name={product.title}
                                category={product.category}
                                image={product.thumbnail}
                            />
                        </Link>
                    ))
                ) : (
                    <p>Loading products...</p>
                )}
            </div>
        </div>
    );
};

export default Home;
