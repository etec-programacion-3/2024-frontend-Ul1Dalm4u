// src/Components/ProductPage.jsx

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import products from './data'; // Importa el archivo de datos
import './ProductPage.css';

const ProductPage = ({ searchQuery }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const location = useLocation(); // Para acceder a los parámetros de la URL

    useEffect(() => {
        setFilteredProducts(products); // Muestra todos los productos inicialmente
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
    }, [location.search, searchQuery]); // Agregar `searchQuery` a las dependencias

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
