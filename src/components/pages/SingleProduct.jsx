import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from './CartContext';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addtoCart } = useCart();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p style={{ textAlign: 'center' }}>Loading...</p>;

  return (
    <div className="single-product-wrapper">
      <div className="single-product-card">
        <div className="image-section">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="info-section">
          <h1>{product.title}</h1>
          <p className="category">Category: {product.category}</p>
          <p className="price">Price: ₹{product.price}</p>
          <p className="rating">Rating: ⭐ {product.rating}</p>
          <p className="desc">{product.description}</p>

          <div className="action-buttons">
            <button className="add-to-cart" onClick={() => addtoCart(product)}>
              Add to Cart
            </button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
