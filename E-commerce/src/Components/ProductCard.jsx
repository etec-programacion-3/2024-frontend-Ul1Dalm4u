import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ProductCard.css";

const ProductCard = ({ productId, productImages, productName, productDescription, productPrice }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = (direction) => {
    const newIndex = (currentIndex + direction + productImages.length) % productImages.length;
    setCurrentIndex(newIndex);
  };

  const handleProductClick = () => {
    window.open(`/products/${productId}`, '_blank');
  };

  return (
    <div className="card" id={productId}>
      <div className="card_image">
        <div className="slider">
          <img className="sliderImage" src={productImages[currentIndex]} alt="Product" onClick={handleProductClick} />
        </div>
        <div onClick={(e) => e.stopPropagation()}>
          <button className="prev" onClick={() => changeImage(-1)}>&#10094;</button>
          <button className="next" onClick={() => changeImage(1)}>&#10095;</button>
        </div>
      </div>
      <div className="card_text" onClick={handleProductClick}>
        <h2>{productName}</h2>
        <p>{productDescription}</p>
        <p>{productPrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;
