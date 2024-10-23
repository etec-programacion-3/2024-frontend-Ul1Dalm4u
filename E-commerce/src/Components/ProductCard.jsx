import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ProductCard.css";

const ProductCard = ({ productId, productImages, productName, productDescription, productPrice }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Hook para la navegación

  const changeImage = (direction) => {
    const newIndex = (currentIndex + direction + productImages.length) % productImages.length;
    setCurrentIndex(newIndex);
  };

  const handleProductClick = () => {
    // Abre la página de detalles en una nueva pestaña
    window.open(`/products/${productId}`, '_blank');
  };

  return (
    <div className="card" id={productId} onClick={handleProductClick}>
      <div className="card_image">
        <div className="slider">
          <img className="sliderImage" src={productImages[currentIndex]} alt="Product" />
        </div>
        <button className="prev" onClick={(e) => {e.stopPropagation(); changeImage(-1);}}>&#10094;</button>
        <button className="next" onClick={(e) => {e.stopPropagation(); changeImage(1);}}>&#10095;</button>
      </div>
      <div className="card_text">
        <h2>{productName}</h2>
        <p>{productDescription}</p>
        <p>{productPrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;
