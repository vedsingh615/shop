import React from 'react';
import ProductCard from './ProductCard';

const dummyImage = "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1751994388_9774808.jpg?v=2"; // Use your actual image

const products = [
  {
    image: dummyImage,
    title: 'Batman: Dark Knight Edition',
    category: 'Backpacks',
    price: 3499,
      href: '/product/superman',
  },   {
    image: dummyImage,
    title: 'Batman: Dark Knight Edition',
    category: 'Backpacks',
    price: 3499,
      href: '/product/superman',
  },  {
    image: dummyImage,
    title: 'Batman: Dark Knight Edition',
    category: 'Backpacks',
    price: 3499,
      href: '/product/superman',
  },
   {
    image: dummyImage,
    title: 'Batman: Dark Knight Edition',
    category: 'Backpacks',
    price: 3499,
      href: '/product/superman',
  }, 
  {
    image: dummyImage,
    title: 'Superman: Krypton Origin',
    category: 'Backpacks',
    price: 3999,
  },
  {
    image: dummyImage,
    title: 'Batman: Dark Knight Edition',
    category: 'Backpacks',
    price: 3499,
  },
  {
    image: dummyImage,
    title: 'Flash: Speed Force',
    category: 'Backpacks',
    price: 2899,
  },
];
const products2 = [
  {
    image: 'https://m.media-amazon.com/images/I/31lfo6GucnL._MCnd_AC_.jpg',
    title: 'Batman: Dark Knight Edition',
    category: 'Backpacks',
    price: 3499,
      href: '/product/superman',
  },   {
    image: 'https://m.media-amazon.com/images/I/31lfo6GucnL._MCnd_AC_.jpg',
    title: 'Batman: Dark Knight Edition',
    category: 'Backpacks',
    price: 3499,
      href: '/product/superman',
  },  {
    image: 'https://m.media-amazon.com/images/I/31lfo6GucnL._MCnd_AC_.jpg',
    title: 'Batman: Dark Knight Edition',
    category: 'Backpacks',
    price: 3499,
      href: '/product/superman',
  },
   {
    image: 'https://m.media-amazon.com/images/I/31lfo6GucnL._MCnd_AC_.jpg',
    title: 'Batman: Dark Knight Edition',
    category: 'Backpacks',
    price: 3499,
      href: '/product/superman',
  }, 
  {
    image: 'https://m.media-amazon.com/images/I/31lfo6GucnL._MCnd_AC_.jpg',
    title: 'Superman: Krypton Origin',
    category: 'Backpacks',
    price: 3999,
  },
  {
    image: 'https://m.media-amazon.com/images/I/31lfo6GucnL._MCnd_AC_.jpg',
    title: 'Batman: Dark Knight Edition',
    category: 'Backpacks',
    price: 3499,
  },
  {
    image: 'https://m.media-amazon.com/images/I/31lfo6GucnL._MCnd_AC_.jpg',
    title: 'Flash: Speed Force',
    category: 'Backpacks',
    price: 2899,
  },
];
const products3 = [
  {
    image: 'https://m.media-amazon.com/images/I/31lfo6GucnL._MCnd_AC_.jpg',
    title: 'Batman: Dark Knight Edition',
    category: 'Backpacks',
    price: 3499,
      href: '/product/superman',
  },   {
    image: 'https://m.media-amazon.com/images/I/31lfo6GucnL._MCnd_AC_.jpg',
    title: 'Batman: Dark Knight Edition',
    category: 'Backpacks',
    price: 3499,
      href: '/product/superman',
  },  {
    image: 'https://m.media-amazon.com/images/I/31lfo6GucnL._MCnd_AC_.jpg',
    title: 'Batman: Dark Knight Edition',
    category: 'Backpacks',
    price: 3499,
      href: '/product/superman',
  },
   {
    image: 'https://m.media-amazon.com/images/I/31lfo6GucnL._MCnd_AC_.jpg',
    title: 'Batman: Dark Knight Edition',
    category: 'Backpacks',
    price: 3499,
      href: '/product/superman',
  }, 
  {
    image: 'https://m.media-amazon.com/images/I/31lfo6GucnL._MCnd_AC_.jpg',
    title: 'Superman: Krypton Origin',
    category: 'Backpacks',
    price: 3999,
  },
  {
    image: 'https://m.media-amazon.com/images/I/31lfo6GucnL._MCnd_AC_.jpg',
    title: 'Batman: Dark Knight Edition',
    category: 'Backpacks',
    price: 3499,
  },
  {
    image: 'https://m.media-amazon.com/images/I/31lfo6GucnL._MCnd_AC_.jpg',
    title: 'Flash: Speed Force',
    category: 'Backpacks',
    price: 2899,
  },
];
const Productlist = () => {
  return (
   <div className='App' style={{margin:'20px 40px'}}>
    <h1>T-Shirts</h1>
     <div className="products-grid">
      
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
   <h1>Pants</h1>
    <div className="products-grid">
      
      {products2.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
    <h1>Shoes</h1>
    <div className="products-grid">
      
      {products3.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
    <h1>Shirts</h1>
    <div className="products-grid">
      
      {products2.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
    <h1>Cargos</h1>
    <div className="products-grid">
      
      {products2.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
    <h1>Jackets</h1>
    <div className="products-grid">
      
      {products2.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
    <h1>Jeans</h1>
    <div className="products-grid">
      
      {products2.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
    <h1>
      Watches
    </h1>
    <div className="products-grid">
      
      {products2.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
    <h1>Bagpacks</h1>
    <div className="products-grid">
      
      {products2.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
    <h1>
      Perfumes
    </h1>
    <div className="products-grid">
      
      {products2.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
   </div>
  );
};

export default Productlist;
