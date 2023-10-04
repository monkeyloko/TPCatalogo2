    import React, { useEffect, useState } from 'react';
    import Slider from 'react-slick';
    import { Link } from 'react-router-dom';
    import 'slick-carousel/slick/slick.css';
    import 'slick-carousel/slick/slick-theme.css';
    import './Home.css';
    import Product from './Product'; // Importa el componente Product
    import products from './listaProducts'; // Importa la lista de productos
    import { getProductos } from './service/apiService';

    const Home = () => {
        const [productos, setProductos] = useState([]);
        const carouselImages = [
            'https://es.hairfinder.com/preguntas/productos-cabello.jpg',
            'https://es.hairfinder.com/preguntas/productos-cabello.jpg',
            'https://es.hairfinder.com/preguntas/productos-cabello.jpg',
        ];

        useEffect(() => {
            getProductos()
                .then((response) => {
                    console.log('API Response:', response); // Log the API response
                    setProductos(response);
                })
                .catch((error) => {
                    console.error('API Error:', error); // Log any API errors
                });
        }, []);
        
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
                            <img src={image} alt={`Slide ${index + 1}`} />
                            <div className="carousel-text">
                                <h1>Catalogos.shop</h1>
                                <p>catalogo de.</p>
                            </div>  
                        </div>
                    ))}
                </Slider>
                <div className="product-grid">
                {productos.length > 0 ? (
        productos.map((product) => (
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
