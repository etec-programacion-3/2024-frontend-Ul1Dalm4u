import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Asegúrate de que esta ruta sea correcta

const ProductPage = ({ searchQuery }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Simulación de productos
    useEffect(() => {
        const fetchedProducts = [
            {
                id: 'product1',
                images: [
                    "https://cdn-images.farfetch-contents.com/off-white-ow-be-right-back-sneakers-milan_23844041_53806615_1000.jpg?c=3",
                    "https://cdn-images.farfetch-contents.com/off-white-ow-be-right-back-sneakers-milan_23844041_53806614_1000.jpg?c=3",
                    "https://cdn-images.farfetch-contents.com/off-white-ow-be-right-back-sneakers-milan_23844041_53806616_1000.jpg?c=3",
                    "https://cdn-images.farfetch-contents.com/off-white-ow-be-right-back-sneakers-milan_23844041_53806647_1000.jpg?c=3"
                ],
                name: 'Ow Be Right Back Sneakers',
                description: 'These sneakers are perfect for your daily wear.',
                price: '$99.99'
            },
            {
                id: 'product2',
                images: [
                    "https://cdn-images.farfetch-contents.com/10117437_16331384_1000.jpg",
                    "https://cdn-images.farfetch-contents.com/10117437_16331383_1000.jpg",
                ],
                name: 'Classic White T-Shirt',
                description: 'A simple yet stylish t-shirt for any occasion.',
                price: '$19.99'
            },
            // Asegúrate de que todos los IDs sean únicos
            {
                id: 'product3',
                images: [
                    "https://cdn-images.farfetch-contents.com/11608020_15924754_1000.jpg",
                    "https://cdn-images.farfetch-contents.com/11608020_15924755_1000.jpg",
                ],
                name: 'Blue Denim Jacket',
                description: 'A timeless denim jacket that goes with everything.',
                price: '$59.99'
            },
            // ...
        ];
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts); // Muestra todos los productos inicialmente
    }, []);

    // Filtrar productos basados en la búsqueda
    useEffect(() => {
        if (searchQuery) {
            const results = products.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProducts(results);
        } else {
            setFilteredProducts(products); // Muestra todos los productos si no hay búsqueda
        }
    }, [searchQuery, products]);

    return (
        <div className="product-page">
            <h2>Resultados de búsqueda para: {searchQuery}</h2>
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
