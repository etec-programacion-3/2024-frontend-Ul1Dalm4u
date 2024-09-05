import React, { useState } from 'react';
import "./ProductCard.css"

const ProductCard = ({ productId, productImages, productName, productDescription, productPrice }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = (direction) => {
    const newIndex = (currentIndex + direction + productImages.length) % productImages.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="card" id={productId}>
      <div className="card_image">
        <div className="slider">
          <img className="sliderImage" src={productImages[currentIndex]} alt="Product" />
        </div>
        <button className="prev" onClick={() => changeImage(-1)}>&#10094;</button>
        <button className="next" onClick={() => changeImage(1)}>&#10095;</button>
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
