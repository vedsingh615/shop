import React from 'react';
import ProductCard from './ProductCard';

const Cargos = () => {
  

  const cargosProducts = [
    {
image:'https://m.media-amazon.com/images/I/61hcFJJ6sQL._AC_UL320_.jpg',
      title: 'Black Graphic Tee',
      category: 'T-Shirts',
      price: 799,
      href: '/product/tshirt-black',
    },
    {
image:'https://m.media-amazon.com/images/I/71hJjgEsJHL._AC_UL320_.jpg',
      title: 'Marvel Logo Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-marvel',
    },
    {
image:'https://m.media-amazon.com/images/I/815gdBdQIOL._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
image:'https://m.media-amazon.com/images/I/61u5oAftaeL._AC_UL320_.jpg',
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
image:'https://m.media-amazon.com/images/I/51ZWEnfVgwL._AC_UL320_.jpg',
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
image:'https://m.media-amazon.com/images/I/51yPnppwqSL._AC_UL320_.jpg',
      title: 'Slogan Printed Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-slogan',
    },
    {
image:'https://m.media-amazon.com/images/I/51Gjmk4c-nL._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
image:'https://m.media-amazon.com/images/I/61-MhFCuzaL._AC_UL320_.jpg',
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
image:'https://m.media-amazon.com/images/I/61Lc+e1Ka7L._AC_UL320_.jpg',
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
image:'https://m.media-amazon.com/images/I/61HVc2KVmML._AC_UL320_.jpg',
      title: 'Slogan Printed Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-slogan',
    },
  ];

  return (
    <div className="products-grid">
      {cargosProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default Cargos;
