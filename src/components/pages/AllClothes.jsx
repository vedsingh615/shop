import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const AllClothes = () => {

const API = 'https://dummyjson.com/products?limit=150';

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
    
 <div className="product-wrapper">
  <ul className="product-grid">
    {All.map((curElem) => (
      <li key={curElem.id} className="product-card">
        <img src={curElem.thumbnail} alt={curElem.title} className="product-image" />
        <div className="product-info">
          <h2 className="product-title">{curElem.title}</h2>
          <div className="product-meta">
            <span className="product-price">${curElem.price}</span>
            <span className="product-category">{curElem.category}</span>
          </div>
        </div>
      </li>
    ))}
  </ul>
</div>




  )
}

export default AllClothes
