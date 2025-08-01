import React from 'react'
import axios from 'axios'
import { handleAddToCart } from '../form/Carst'; 
import { useState, useEffect } from 'react'

const AllClothes = () => {

const API = 'https://dummyjson.com/products?limit=100';

const [All , setAll] = useState([]);

const getClothes = async ()=>{
    try{
    const res = await axios.get(API);
     console.log(res.data.products);
    setAll(res.data.products);
} catch (error){
    console.log(error)
}
}

useEffect(()=>{
   getClothes();
},[]);

  return (
    <>
    <h1 style={{ textAlign: 'center', margin: '30px 0' }}>All Products</h1>
  <div className="product-container">
      {All.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p className="category">{product.category}</p>
          <p className="desc">{product.description.slice(0, 60)}...</p>
          <p className="rating">⭐ {product.rating}</p>
          <button className='cartbtn' onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>

</>


  )
}

export default AllClothes
