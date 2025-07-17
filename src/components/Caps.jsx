import React from 'react';
import ProductCard from './ProductCard';

const Caps = () => {
 

  const tshirtProducts = [
    {
     image:'https://m.media-amazon.com/images/I/51oOIT6wAfL._AC_UL320_.jpg',
      title: 'Black Graphic Tee',
      category: 'T-Shirts',
      price: 799,
      href: '/product/tshirt-black',
    },
    {
     image:'https://m.media-amazon.com/images/I/71MNlTexfkL._AC_UL320_.jpg',
      title: 'Marvel Logo Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-marvel',
    },
     {
     image:'https://m.media-amazon.com/images/I/91+yD3UV+jL._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
     image:'https://m.media-amazon.com/images/I/51Fr7G83qQL._AC_UL320_.jpg',
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
     image:'https://m.media-amazon.com/images/I/61RpbG8BtsL._AC_UL320_.jpg',
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
     image:'https://m.media-amazon.com/images/I/51mcUJ5e8GS._AC_UL320_.jpg',
      title: 'Slogan Printed Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-slogan',
    },
    {
     image:'https://m.media-amazon.com/images/I/71jOcIMK6VL._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
     image:'https://m.media-amazon.com/images/I/61GoLtOkMZL._AC_UL320_.jpg',
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
     image:'https://m.media-amazon.com/images/I/81kaYcpkfaL._AC_UL320_.jpg',
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
     image:'https://m.media-amazon.com/images/I/41zi2pa-j3L._AC_UL320_.jpg',
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

export default Caps;
