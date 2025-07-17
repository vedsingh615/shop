import React, { useState } from 'react';

const ProductCard = ({ image, title, category, price, href }) => {
  const [wishlisted, setWishlisted] = useState(false);

  const toggleWishlist = (e) => {
    e.preventDefault(); // prevent navigating when clicking the heart
    setWishlisted(!wishlisted);
  };

  return (
    <a href={href} className="product-card-link">
      <div className="product-card">
        <div className="image-container">
          <img src={image} alt={title} style={{objectFit:'fill'}} />
          <button
            className={`wishlist-btn ${wishlisted ? 'active' : ''}`}
            onClick={toggleWishlist}
          >
            {wishlisted ? '♥' : '♡'}
          </button>
        </div>
        <div className="product-info">
          <h3><strong>{title}</strong></h3>
          <p className="category">{category}</p>
          <p className="price">₹ {price}</p>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
