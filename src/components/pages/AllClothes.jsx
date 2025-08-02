import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useOutletContext, Link } from 'react-router-dom';
import { useCart } from './CartContext'; // ✅ Import hook

const AllClothes = () => {
  const { searchTerm } = useOutletContext();
  const { addtoCart } = useCart(); // ✅ Access addtoCart function

  const API = 'https://dummyjson.com/products?limit=100';
  const [All, setAll] = useState([]);

  useEffect(() => {
    const getClothes = async () => {
      try {
        const res = await axios.get(API);
        setAll(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getClothes();
  }, []);

  const filteredProducts = All.filter((product) =>
    [product.title, product.category, product.description]
      .some((field) =>
        field.toLowerCase().includes(searchTerm?.toLowerCase())
      )
  );

  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '30px 0' }}>All Products</h1>
      <div className="product-container">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="category">{product.category}</p>
              <p className="desc">{product.description.slice(0, 60)}...</p>
              <p className="rating">⭐ {product.rating}</p>
            </Link>
            <button className="cartbtn" onClick={() => addtoCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllClothes;
