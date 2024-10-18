import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import './ProductPage.css'

const ProductPage = ({ searchQuery }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const location = useLocation(); // Para acceder a los parámetros de la URL

    useEffect(() => {
        const fetchedProducts = [
            {
                id: 'product1',
                images: [
                    "https://cdn-images.farfetch-contents.com/off-white-ow-be-right-back-sneakers-milan_23844041_53806615_1000.jpg",
                ],
                name: 'Ow Be Right Back Sneakers',
                description: 'Estas zapatillas son perfectas para tu uso diario.',
                price: '$99.99',
                gender: 'Man',
            },
            {
                id: 'product2',
                images: [
                    "https://cdn-images.farfetch-contents.com/10117437_16331384_1000.jpg",
                ],
                name: 'Classic White T-Shirt',
                description: 'Una camiseta simple pero estilosa.',
                price: '$19.99',
                gender: 'Woman',
            },
            {
                id: 'product3',
                images: [
                    "https://cdn-images.farfetch-contents.com/17195634_26681664_1000.jpg",
                ],
                name: 'Stylish Black Jacket',
                description: 'Una chaqueta elegante para ocasiones casuales.',
                price: '$79.99',
                gender: 'Man',
            },
            {
                id: 'product4',
                images: [
                    "https://cdn-images.farfetch-contents.com/16563609_26661407_1000.jpg",
                ],
                name: 'Trendy Blue Dress',
                description: 'Un vestido moderno para todas las ocasiones.',
                price: '$49.99',
                gender: 'Woman',
            },
            {
                id: 'product5',
                images: [
                    "https://cdn-images.farfetch-contents.com/16692877_20170547_1000.jpg",
                ],
                name: 'Casual Sneakers',
                description: 'Zapatillas cómodas para un look relajado.',
                price: '$59.99',
                gender: 'Man',
            },
            {
                id: 'product6',
                images: [
                    "https://cdn-images.farfetch-contents.com/15853602_26748124_1000.jpg",
                ],
                name: 'Elegant Handbag',
                description: 'Un bolso elegante para complementar tu outfit.',
                price: '$89.99',
                gender: 'Woman',
            },
            // Agrega más productos según sea necesario...
        ];
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts); // Muestra todos los productos inicialmente
    }, []);

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const gender = query.get('gender'); // Obtenemos el género de la URL

        // Filtramos productos basados en la búsqueda
        let results = products;
        if (searchQuery) {
            results = results.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        // Filtramos por género si se proporciona
        if (gender) {
            results = results.filter(product =>
                product.gender.toLowerCase() === gender.toLowerCase()
            );
        }

        setFilteredProducts(results);
    }, [location.search, products, searchQuery]); // Agregar `searchQuery` a las dependencias

    return (
        <div className="product-page">
            <h4>
                Resultados de búsqueda para: {searchQuery ? searchQuery : 'Género Seleccionado'}
            </h4>
            <div className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            productId={product.id}
                            productImages={product.images}
                            productName={product.name}
                            productDescription={product.description}
                            productPrice={product.price}
                        />
                    ))
                ) : (
                    <p>No se encontraron productos</p>
                )}
            </div>
        </div>
    );
};

export default ProductPage;
