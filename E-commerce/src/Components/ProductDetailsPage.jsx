// src/Components/ProductDetailsPage.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetailsPage.css';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/products');
        const foundProduct = response.data.find(p => p.id === parseInt(productId, 10));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError("Producto no encontrado.");
        }
        setError(null);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Error al cargar los productos");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [productId]);

  const changeImage = (direction) => {
    if (product) {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + direction + product.images.length) % product.images.length;
        return newIndex;
      });
    }
  };

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="product-details-container">
      <div className="product-images">
        <div className="slider">
          <img
            src={product.images[currentIndex]}
            alt={product.name}
            className="product-image"
          />
        </div>
        <button className="prev" onClick={() => changeImage(-1)} aria-label="Imagen anterior">&#10094;</button>
        <button className="next" onClick={() => changeImage(1)} aria-label="Imagen siguiente">&#10095;</button>
      </div>
      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}</p>
        <div className="product-buttons">
          <button className="cart-button">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
