// src/Components/ProductPage.jsx

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import axios from 'axios'; // Asegúrate de importar Axios
import './ProductCard.css';

const ProductPage = ({ searchQuery }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const location = useLocation(); // Para acceder a los parámetros de la URL

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products'); // Asegúrate de que la IP y puerto coincidan con tu servidor
                setFilteredProducts(response.data); // Asigna los productos obtenidos
            } catch (error) {
                console.error("Error al cargar los productos:", error);
            }
        };

        fetchProducts(); // Llama a la función para obtener los productos
    }, []); // Solo se ejecuta una vez al montar el componente

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const gender = query.get('gender'); // Obtenemos el género de la URL

        // Filtramos productos basados en la búsqueda
        let results = filteredProducts; // Usamos los productos filtrados
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
    }, [location.search, searchQuery, filteredProducts]); // Agregar filteredProducts a las dependencias

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
