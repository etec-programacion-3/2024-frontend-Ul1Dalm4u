import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetailsPage.css';

const ProductDetailsPage = ({ products }) => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + direction + product.images.length) % product.images.length;
      return newIndex;
    });
  };

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
