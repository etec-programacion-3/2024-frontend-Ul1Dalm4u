import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import axios from 'axios';
import './ProductCard.css';

const ProductPage = ({ searchQuery }) => {
    const [products, setProducts] = useState([]); // All products
    const [displayedProducts, setDisplayedProducts] = useState([]); // Filtered list to display
    const location = useLocation();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products');
                setProducts(response.data); // Store all products
            } catch (error) {
                console.error("Error al cargar los productos:", error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const gender = query.get('gender');

        // Start with all products and filter based on searchQuery and gender
        let results = products;
        if (searchQuery) {
            results = results.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        if (gender) {
            results = results.filter(product =>
                product.gender.toLowerCase() === gender.toLowerCase()
            );
        }

        setDisplayedProducts(results); // Set the filtered list to display
    }, [location.search, searchQuery, products]);

    return (
        <div className="product-page">
            <h4>
                Resultados de búsqueda para: {searchQuery ? searchQuery : 'Género Seleccionado'}
            </h4>
            <div className="product-list">
                {displayedProducts.length > 0 ? (
                    displayedProducts.map(product => (
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
