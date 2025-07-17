import React from 'react';
import ProductCard from './ProductCard'; 

const Tshirts = () => {
 

  const tshirtProducts = [
    {
      image:'https://m.media-amazon.com/images/I/61CGqRScDaL._AC_UL320_.jpg',
      title: 'Black Graphic Tee',
      category: 'T-Shirts',
      price: 799,
      href: '/product/tshirt-black',
    },
    {
      image:'https://m.media-amazon.com/images/I/61Oqvx88hhL._AC_UL320_.jpg',
      title: 'Marvel Logo Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-marvel',
    },
    {
      image:'https://m.media-amazon.com/images/I/714xYHmO5dL._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
      image:'https://m.media-amazon.com/images/I/61sFLnpPerL._AC_UL320_.jpg',
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
      image:'https://m.media-amazon.com/images/I/61Iq5e-dSRL._AC_UL320_.jpg',
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
      image:'https://m.media-amazon.com/images/I/61vvYXrifiL._AC_UL320_.jpg',
      title: 'Slogan Printed Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-slogan',
    },
    
    {
      image:'https://m.media-amazon.com/images/I/619oydTctPL._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
      image:'https://m.media-amazon.com/images/I/614XpiTNZoL._AC_UL320_.jpg',
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
      image:'https://m.media-amazon.com/images/I/71hkpCjS9AL._AC_UL320_.jpg',
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
      image:'https://m.media-amazon.com/images/I/61LmtI9XIOL._AC_UL320_.jpg',
      title: 'Slogan Printed Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-slogan',
    },
  ];

  return (
    <div className="products-grid">
      {tshirtProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default Tshirts;
